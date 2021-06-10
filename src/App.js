import "./App.css";
import Bar from "./components/navbar";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./user";
import AccountPanel from "./components/AccountPanel";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        <Bar />
        <Switch>
          <Route path="/user" children={<User />}></Route>
          <Route path="/accountpanel" children={<AccountPanel />}></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
