import React from 'react';
import { useEffect, useState } from "react";
import conf from "./conf.json";
import Search from "./Search";
import Table from 'react-bootstrap/Table'

function Home (){
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      submitSearch("");
    }, []);
    function submitSearch(txt) {
    if (txt){
      const url = conf.apiUrl + "fullname=" + txt;
      fetch(url)
        .then((resp) => resp.json())
        .then((resp) => setUsers(resp.Items));}
        console.log(users)
    }

    return (
    <div>
      <Search onChange={submitSearch} />
      {users.length ? ( 
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
      ) : 'aa'}
    </div>)
}
export default Home;