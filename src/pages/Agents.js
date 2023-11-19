import React, { useContext, useEffect } from "react";
import { ValoContext, ValoProvider } from "../context/MyContext";
import "../styles/home.css";
import { NavLink, useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import { AuthContext } from "../context/Auth";
import AppHeader from "../components/Appheader";
const Agent = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { valo } = useContext(ValoContext);
  const navigate = useNavigate();
  console.log(valo);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  return (
    <>
      {valo.map((p, i) => {
        return (
          <div className="wrappper" key={i}>
            <div className="avatar">
              <NavLink to={`/detail/${p.uuid}`}>
                <img src={p.displayIcon} alt={p.displayName} />
              </NavLink>
            </div>
            <NavLink to={"/detail/" + p.uuid}>
              <h3 className="headerDesc">{p.displayName}</h3>
            </NavLink>
          </div>
        );
      })}
    </>
  );
};

function Agents() {
  return (
    <>
      <AppHeader />

      <div className="container-view">
        <ValoProvider>
          <Agent />
        </ValoProvider>

        <BottomNav />
      </div>
    </>
  );
}

export default Agents;
