import React from 'react';
import { useEffect, useState, useContext } from "react";
import conf from "./conf.json";
import Search from "./components/Search";
import Table from 'react-bootstrap/Table'
import FileUploader from './fileupload';

import { AccountContext } from './components/Accounts';


function Home (){
    const { getSession } = useContext(AccountContext);
    const [users, setUsers] = useState([]);
    const [searchTxt, setSeachTxt] = useState("")
    useEffect(() => { 
      getSession().then(async ({ headers }) => {
        if (searchTxt){
          const url = conf.apiUrl + "?fullname=" + searchTxt;
          fetch(url, {headers: headers})
            .then((resp) => resp.json())
            .then((resp) => setUsers(resp.Items));}
      }, [searchTxt]); 
    })

    return (
    <div>  
      <Search onChange={setSeachTxt} />
      {(users.length > 0) && ( 
          <div>
            <Table class="table">
                <thead>

            <th>Name</th> <th>Company</th>
                </thead>
                <tbody>

            {users.map((row) => (
                <tr>
                <td>{row.FullName}</td>
                <td>{row.Company}</td>
                </tr>
            ))}
            </tbody>
            </Table>
        </div>
      )  }  
    </div>)
}
export default Home;