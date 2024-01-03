import React from "react";

const MusicContext = React.createContext({
  logStatus: false,
  changeLogStatus: () => {},
});

export default MusicContext;
