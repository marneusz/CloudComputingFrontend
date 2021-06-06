import React from 'react';
import { useEffect, useState } from "react";
import conf from "./conf.json";
import Search from "./Search";

function Home (){
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      submitSearch("");
    }, []);
    function submitSearch(txt) {
      const url = conf.apiUrl + "fullname=" + txt;
      fetch(url)
        .then((resp) => resp.json())
        .then((resp) => setUsers(resp.Items));
    }

    return (
    <div>
      <Search onChange={submitSearch} />
      {users !== [] ? (
        <table class="table">
          <th>Name</th> <th>Company</th>
          {users.map((row) => (
            <tr>
              <td>{row.FullName}</td>
              <td>{row.Company}</td>
            </tr>
          ))}
        </table>
      ) : null}
    </div>)
}
export default Home;