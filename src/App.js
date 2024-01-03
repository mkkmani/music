import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useContext, useState } from "react";
import MusicContext from "./musicContext/musicContext";
import Home from "./components/Home";
import Instruments from "./components/Instruments";
import Videos from "./components/Videos";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [logStatus, changeLogStatus] = useState(false);
  const context = useContext(MusicContext);
  const onChangeLogStatus = () => {
    changeLogStatus(!logStatus);
  };

  const contextData = {
    logStatus,
    changeLogStatus: onChangeLogStatus,
  };

  return (
    <>
      <Switch>
        <MusicContext.Provider value={contextData}>
          <Route exact path="/" component={Home} />
          <Route exact path="/instruments" component={Instruments} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/login" component={LoginPage} />
        </MusicContext.Provider>
      </Switch>
    </>
  );
};

export default App;
