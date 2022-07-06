import ArchIcone from 'assetsSVG-main/Arch';
import LogoIcone from 'assetsSVG-main/Logo';
import React from 'react'  ; 
import "./Sidebar.css" ;
import NavigationMenu from 'components/organisms/navigation/NavigationMenu/NavigationMenu';
import SideBarStyle from './SideBar.style';


const SideBar = () => {

  return (
    <SideBarStyle>
        <LogoIcone  fill={"#F3EDD7"}  width="78" height="78" />
        <NavigationMenu/>
        <ArchIcone  fill="#F3EDD7" stroke="#F3EDD7" width="70" height="70" />
    </SideBarStyle>
  )
}

export default SideBar ;