import React from 'react';
import { Account } from '../components/Accounts';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Status from '../components/Status';

function AccountPanel() {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
    </Account>
  );
}

export default AccountPanel