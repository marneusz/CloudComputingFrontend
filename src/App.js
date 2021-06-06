import { useState } from "react";
import "./App.css";
import Header from "./header";
import Search from "./Search";
import conf from "./conf.json";
import { DataGrid } from "@material-ui/data-grid";

function App() {
  const [users, setUsers] = useState([]);

  function submitSearch(txt) {
    const url = conf.apiUrl + "fullname=" + txt;
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setUsers(resp.Items));
  }

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>
      <Header />
      <div>
        <Search onChange={submitSearch} />
        <table class="table">
          <th>Name</th> <th>Company</th>
          {users.map((row) => (
            <tr>
              <td>{row.FullName}</td>
              <td>{row.Company}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
