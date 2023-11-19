import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ValoContext, ValoProvider } from "../context/MyContext";
import "../styles/detail.css";
import BottomNav from "../components/BottomNav";
import AppHeader from "../components/Appheader";
import { AuthContext } from "../context/Auth";
function AgentDetail() {
    const { isLoggedIn } = useContext(AuthContext);
  const { uuid } = useParams();
  const { valo } = useContext(ValoContext);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);
  useEffect(() => {
    const filtered = valo.filter((item) => item.uuid == uuid);
    filtered.map((item) => {
      setFilteredData(item);
      setLoading(false)
    });
  }, [valo, uuid]);

 

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  if(loading){
    return(
        <div className="loading-container">
          <h2>Loading...</h2>
        </div>
    )
  }

  return (
    <div className="detail-wrapper">
      <div className="detail-info">
        <img className="image" src={filteredData.fullPortrait} />

        <div className="title">{filteredData.displayName}</div>
        <div className="title">Role : {filteredData.role.displayName}</div>
        <div className="title">{filteredData.description}</div>
      </div>
    </div>
  );
}

function AgDetail() {
  return (
    <>
      <AppHeader />
      <div className="container-detail">
        <ValoProvider>
          <AgentDetail />
        </ValoProvider>
        <BottomNav />
      </div>
    </>
  );
}
export default AgDetail;
