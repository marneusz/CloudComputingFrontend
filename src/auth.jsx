import React, { useState } from 'react' 
// npm i amazon-cognito-identity-js
import { CognitoUserPool } from 'amazon-cognito-identity-js'
import conf from "./conf.json";

function Auth(){ 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const poolData = {
        UserPoolId: conf.cognito.userPoolId,
        ClientId: conf.cognito.userPoolClientId
    };

    const UserPool = new CognitoUserPool(poolData);

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
        Here goes authentication.
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
    </div>
    )
}
export default Auth