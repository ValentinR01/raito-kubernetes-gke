import React from 'react'
import NavigationMenuStyle from './NavigationMenu.style';
import AmbianceIcone from 'assetsSVG-main/Ambiance';
import MeditationIcon from 'assetsSVG-main/MeditationIcon';
import ProfilIcone from 'assetsSVG-main/ProfilIcone';
import MenuLink from 'components/molecules/nav/MenuLink';



const NavigationMenu = () => {
    const navMenuData = {
        ambiances: {
              title: "Ambiances",
              path: "/ambiance/:id",
              icon: < AmbianceIcone color="#F3EDD7" iconeSize="15"/>,    
            },
           respiration: {
              title: "Respiration",
              path: "/respiration/:id",
              icon: < MeditationIcon  stroke="none" fill="#F3EDD7"  width="15" height="15" />,
            },
            profil: {
              title: "Profil",
              path: "/profil",
              icon: < ProfilIcone fill={"#F3EDD7"}  width="15" height="15" />,
            }
        }
      
  return (
    <NavigationMenuStyle className="side-navbar-menu">
          <MenuLink path={navMenuData.ambiances.path} icon={navMenuData.ambiances.icon} title={navMenuData.ambiances.title}/>
          <MenuLink path={navMenuData.respiration.path} icon={navMenuData.respiration.icon} title={navMenuData.respiration.title}/>
          <MenuLink path={navMenuData.profil.path} icon={navMenuData.profil.icon} title={navMenuData.ambiances.title}/>
         </NavigationMenuStyle>
  )
}
export default NavigationMenu