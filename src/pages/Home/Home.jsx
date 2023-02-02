import React from "react";
import Tobbar from "./../../components/tobbar/Tobbar";
import Sidebar from "./../../components/sidebar/Sidebar";
import Feed from "./../../components/feed/feed";
import Rightbar from "./../../components/rightbar/Rightbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Tobbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
