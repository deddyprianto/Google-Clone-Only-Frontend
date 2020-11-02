import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Page/Home";
import "./App.css";
import SearchMain from "./Page/SearchMain";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchMain />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
