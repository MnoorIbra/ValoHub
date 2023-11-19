import React from "react";
import "../styles/about.css";
import BottomNav from "../components/BottomNav";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import AppHeader from "../components/Appheader";


 function About() {

  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  
  
  
  return (
    <div className="about-container">
      <div className="about-wrapper">
      <h1>About</h1>
      <img src="https://media.tenor.com/rc8puALGJfgAAAAd/bocchi-the-rock-hitori-gotou.gif"/>
      
      <p>Hallo program ValoHub ini dibuat oleh kelompok 34 Praktikum RPLBK yang berangotakan Muhammad Noor Ibrahim, Aldo Serena Safiola, Rizal Firdaus, Muhammad Fadhil Sulthan. Program ini dibuat dengan Reactjs dan API dash-valorant-api
      </p>
      </div>
      
    </div>

    
    
  );


  
}



function Tentang(){
  return (
    <>
    <AppHeader/>
  <div className="container-view">
       <About/>
       <BottomNav/>
      
    </div>
    </>
    
  );
}

export default Tentang
