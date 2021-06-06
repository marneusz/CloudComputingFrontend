import { useEffect, useState } from "react";
import "./App.css";
import Bar from "./navbar";
import Search from "./Search";
import conf from "./conf.json";

function App() {
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
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>
      <Bar />
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
      </div>
    </div>
  );
}

export default App;
