import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import Pool from './UserPool'
import Amplify, { Auth } from 'aws-amplify';
import FileInput from './fileupload';

Pool.getCurrentUser();

function User(){ 
    let history = useHistory();
    const currentUser = Pool.getCurrentUser()
    useEffect(() => {  
        console.log(currentUser)
    if (!currentUser){
        history.push('/accountpanel')
    }
    },[]);
    return (<div>
        {currentUser ?
        <FileInput username={currentUser.username}></FileInput>: "Please log in."}
    </div>)
}
export default User