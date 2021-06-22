import React, { useState } from 'react';
import UserPool from '../UserPool';

function Signup(){ 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
                if (err) console.error(err);
                console.log(data);
            }
        );
    };

    return (
    <div>
        You can register your account here!
        <form onSubmit={onSubmit}>
            <input 
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <input 
                value={password}
                onChange={event => setPassword(event.target.value)}
            />

            <button type='submit'>Signup</button>
        </form>
        <br></br>
    </div>
    )
}
export default Signup