import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Countries from "./pages/countries";
import Home from "./pages/home";
import Country from "./pages/country";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/countries" component={Countries}/>
        <Route path="/country/:countryId" component={Country} />
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
