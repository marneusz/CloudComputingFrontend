import React from 'react';
import { useEffect, useState } from "react";
import conf from "./conf.json";
import Search from "./components/Search";
import Table from 'react-bootstrap/Table'
import FileUploader from './fileupload';

function Home (){
    const [users, setUsers] = useState([]);
    const [searchTxt, setSeachTxt] = useState("")
    useEffect(() => { 
      if (searchTxt){
        const url = conf.apiUrl + "?fullname=" + searchTxt;
        fetch(url)
          .then((resp) => resp.json())
          .then((resp) => setUsers(resp.Items));}
    }, [searchTxt]); 

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