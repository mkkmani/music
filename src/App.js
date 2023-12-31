import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Instruments from "./components/Instruments";
import Videos from "./components/Videos";

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/instruments" component={Instruments} />
      <Route exact path="/videos" component={Videos} />
    </Switch>
  </>
);

export default App;
