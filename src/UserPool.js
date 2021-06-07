// npm i amazon-cognito-identity-js
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import conf from "./conf.json";

const poolData = {
    UserPoolId: conf.cognito.userPoolId,
    ClientId: conf.cognito.userPoolClientId
};

export default new CognitoUserPool(poolData);