import "./index.css";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";

const apiStatusList = {
  init: "INIT",
  loading: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Videos = () => {
  const [videosList, addVideosList] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusList.init);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = process.env.REACT_APP_VIDEOS_API;
        const response = await fetch(api);
        if (response.ok) {
          const data = await response.json();
          setVideosList(data);
          setApiStatus(apiStatusList.success);
        } else {
          setApiStatus(apiStatusList.failure);
        }
      } catch (error) {
        setApiStatus(apiStatusList.failure);
      }
    };

    fetchData();
  }, []);

  const EmptyVideosList = () => (
    <div className="empty-list-container">
      <h1>No videos available right now</h1>
    </div>
  );

  return (
    <>
      <Navbar />
      <EmptyVideosList />
    </>
  );
};

export default Videos;
