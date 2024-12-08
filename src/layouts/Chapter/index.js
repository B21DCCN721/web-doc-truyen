import React from "react";

import Header from "../Header";

import { useParams } from "react-router-dom";
import Chap from "./components/Chap";
const Chapter = () => {
    const {id, chapter} = useParams()
    console.log(id, chapter);
    
    return (
      <div className="container-fluid p-0 bg-secondary" style={{minHeight:'100vh'}}>
        <Header />
        <Chap />
      </div>
    );
  };
  
  export default Chapter;