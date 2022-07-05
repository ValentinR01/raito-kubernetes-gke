import AmbianceIcone from 'assetsSVG-main/Ambiance';
import ArchIcone from 'assetsSVG-main/Arch';
import LogoIcone from 'assetsSVG-main/Logo';
import MeditationIcon from 'assetsSVG-main/MeditationIcon';
import ProfilIcone from 'assetsSVG-main/ProfilIcone';
import React from 'react'  ; 
import "./Sidebar.css" ;
import {
  Link
} from "react-router-dom";


const sidebarData = [
    {
      title: "Ambiances",
      path: "/ambiance/:id",
      icon: < AmbianceIcone color="#F3EDD7" iconeSize="15"/>,
  
      cName: "nav-text"
    },
    {
      title: "Respiration",
      path: "/respiration/:id",
      icon: < MeditationIcon  stroke="none" fill="#F3EDD7"  width="15" height="15" />,
      cName: "nav-text"
    },
    {
      title: "Profil",
      path: "/profil",
      icon: < ProfilIcone fill={"#F3EDD7"}  width="15" height="15" />,
      cName: "nav-text"
    }
  ];

function SideBar() {
  return (
    <div className="sidebar-nav" >

        <div  className="side-logo">
        <LogoIcone  fill={"#F3EDD7"}  width="78" height="78" />
        </div >
        {/** Bottom Menu */}
        <div className="side-navbar-menu">

            {sidebarData.map((item, index) => {
                    return (
                        <li   key={index} className={item.cName}>
                            <span className="icon-bar">{item.icon}</span>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    );
                    })}
         </div>
         {/** Bottom Sidebar */}
        <div className="sidebar-bottom">
          < ArchIcone  fill="#F3EDD7" stroke="#F3EDD7" width="70" height="70" />
         </div>

          
 
      
    </div>
  )
}

export default SideBar ;