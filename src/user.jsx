import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Pool from './UserPool'
import Amplify, { Auth } from 'aws-amplify';
import FileInput from './fileupload';
import axios from 'axios';
import conf from'./conf.json'

import { Account, AccountContext } from './components/Accounts';

Pool.getCurrentUser();

function User(){
    const { getSession } = useContext(AccountContext);
    const [input, setInput] = useState({})
    const [userData, setUserData] = useState({})
    let history = useHistory();
    const currentUser = Pool.getCurrentUser()
    useEffect(() => {  
        console.log(currentUser)
    if (!currentUser){
        history.push('/accountpanel')
    }
    
    getSession().then( ({ headers }) => {
        console.log('headers', headers)
          const url = conf.apiUrl + "?username=" + currentUser.username;
          fetch(url, {headers: headers})
            .then((resp) => resp.json())
            .then((resp) => {if (resp.Items) setUserData(resp.Items[0])})
            .catch(e=> console.log(e));}
      ).catch(e=> console.log('getSession', e))
    },[]);

    function handleInputChange(event) {
        const target = event.target;
        setInput({...input, [target.name]: target.value})
    }
        

    function addUser(event){
        getSession().then(async ({ user, headers }) => {
            event.preventDefault()
            const body = {
                "fullname": input.fullname,
                "company": input.company,
                "username": currentUser.username
            }
            console.log(headers)
            axios.post(conf.apiUrl, body, {headers: headers}).catch(e=> console.log(e));
        })
        
    }
    return (<div>
        {currentUser ?
        <div>
        {JSON.stringify(userData)}
        <form onSubmit={addUser}>
        <input name='fullname' placeholder ={userData.FullName || 'Fullname'} onChange={handleInputChange}></input>
            <input name='company' placeholder = {userData.Company || 'Company'} onChange={handleInputChange}></input>
            <button type='submit'>Submit</button>
        </form>
        
        <FileInput username={currentUser.username}></FileInput>
        </div>: "Please log in."}
    </div>)
}
export default User