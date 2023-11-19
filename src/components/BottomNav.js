import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/BottomNav.css";
import { AiOutlineHome } from "react-icons/ai";
import { IoMapSharp } from "react-icons/io5";
import { TbBrandValorant } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import { useEffect, useContext } from "react";
import { CiLogout } from "react-icons/ci";

// navigation ini buat array menu navigasi yang ada di atas navbar.. ini kubuat Home sama about, pathnya ngikutin di App.js yang Home itu / doang, yang About itu /profile


export default function BottomNav() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
 

 

  const logout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    console.log(isLoggedIn);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  };

  return (
    
    <div className="bottom-nav">
      <NavLink to="/" className="link nav-link">
        <AiOutlineHome className="icon" />
        Home
      </NavLink>
      {/* <NavLink to="/agents" className="link nav-link">
        <TbBrandValorant className="icon" />
        Agents
      </NavLink> */}
      
      <NavLink to="/About" className="link nav-link">
        <BsPerson className="icon" />
        About
      </NavLink>
      <NavLink className="link nav-link" onClick={(e) => logout(e)}>
        <CiLogout className="icon" />
        <span>Logout</span>
      </NavLink>
    </div>
  );
}
