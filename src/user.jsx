import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Pool from './UserPool'
import Amplify, { Auth } from 'aws-amplify';
import FileInput from './fileupload';
import axios from 'axios';
import conf from'./conf.json'

Pool.getCurrentUser();

function User(){ 
    const [input, setInput] = useState({})
    let history = useHistory();
    const currentUser = Pool.getCurrentUser()
    useEffect(() => {  
        console.log(currentUser)
    if (!currentUser){
        history.push('/accountpanel')
    }
    },[]);

    function handleInputChange(event) {
        const target = event.target;
        setInput({...input, [target.name]: target.value})
    }
        

    function addUser(event){
        event.preventDefault()
        const body = {
            "fullname": input.fullname,
            "company": input.fullname,
            "username": currentUser.username
        }

        console.log(body)
        fetch("https://0zsbmdfy55.execute-api.us-east-1.amazonaws.com/default/dynamodb" , {
            method: 'POST',  
            headers: {
                'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json' 
            },  
            body: JSON.stringify(body) // body data type must match "Content-Type" header
          }).catch(e=> console.log(e));
    }
    return (<div>
        {currentUser ?
        <div>
        <form onSubmit={addUser}>
        <input name='fullname' placeholder = 'Fullname' onChange={handleInputChange}></input>
            <input name='company' placeholder = 'Company' onChange={handleInputChange}></input>
            <button type='submit'>Submit</button>
        </form>
        <FileInput username={currentUser.username}></FileInput></div>: "Please log in."}
    </div>)
}
export default User