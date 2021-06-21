import React, { useState, useContext } from 'react';
import rp from 'request-promise';

import { AccountContext } from './Accounts'

export default () => {

    const { getSession } = useContext(AccountContext);

    const createProfile = async () => {
        getSession().then(async ({ user, headers }) => {
            const url = '';
            console.log(headers);
            // code 
            const number = await rp(url, { headers })
        })
        
    }
    

    return (
        <div>
            Random number: {number}
        </div>
    )
}