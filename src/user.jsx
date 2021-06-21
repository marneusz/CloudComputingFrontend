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
            .then((resp) => {
                if (resp.Items) {
                    setUserData(resp.Items[0]);
                    setInput({company: resp.Items[0].Company, 
                        fullname: resp.Items[0].FullName})}
                    })
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
                "username": currentUser.username,
                "SoundUri": userData.SoundUri
            }
            console.log(headers)
            console.log(body)
            axios.post(conf.apiUrl, body, {headers: headers}).catch(e=> console.log(e));
        })
        
    }
    return (<div>
        {currentUser ?
        <div>
        {/* // {JSON.stringify(input)}
        //     {JSON.stringify(userData)} */}
        <form onSubmit={addUser}>
        <label>Full name:</label>
        <input name='fullname' placeholder ={ 'Fullname'} onChange={handleInputChange} value={input.fullname}></input>
        <br>
        </br>
        <label>Company:</label>
            <input name='company' placeholder = { 'Company'} onChange={handleInputChange} value={input.company}></input>
            <br/>
            <button type='submit'>Submit</button>
        </form>
        {userData.SoundUri && <a href={userData.SoundUri}>Your current voice recording</a> }
        <FileInput userData={userData} username={currentUser.username}></FileInput>
        </div>: "Please log in."}
    </div>)
}
export default User