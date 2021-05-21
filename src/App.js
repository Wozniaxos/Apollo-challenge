import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Countries from "./pages/countries";
import Home from "./pages/home";
import Country from "./pages/country";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/countries" component={Countries}/>
        <Route path="/countries/:id" component={Country} />
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
