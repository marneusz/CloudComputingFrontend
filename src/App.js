import "./App.css";
import Bar from "./navbar";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./user";
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
          <Route path="/">
            <Home />
          </Route>
          <Route path="/user_:id" children={<User />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
