import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./Post";
import Detail from "./Detail";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Post} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
