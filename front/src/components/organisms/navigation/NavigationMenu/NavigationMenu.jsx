import React from "react";
import NavigationMenuStyle from "./NavigationMenu.style";
import MeditationIcon from "components/atoms/embedding/MeditationIcon/MeditationIcon";
import ProfileIcon from "components/atoms/embedding/ProfileIcon/ProfileIcon";
import NavigationMenuLink from "components/molecules/navigation/NavigationMenuLink";
import AmbianceIcon from "components/atoms/embedding/AmbianceIcon/AmbianceIcon";
import { themeColorLight } from "style/vars/colors";

const NavigationMenu = () => {
  const navMenuData = {
    ambiances: {
      title: "Ambiances",
      path: "/ambiances/",
      icon: <AmbianceIcon />,
    },
    respiration: {
      title: "Respiration",
      path: "/respiration/",
      icon: (
        <MeditationIcon
          stroke="none"
          fill={themeColorLight.cream}
          width="15"
          height="15"
        />
      ),
    },
    profil: {
      title: "Profil",
      path: "/profil",
      icon: <ProfileIcon fill={themeColorLight.cream} width="15" height="15" />,
    },
  };

  return (
    <NavigationMenuStyle className="side-navbar-menu">
      <NavigationMenuLink
        path={navMenuData.ambiances.path}
        icon={navMenuData.ambiances.icon}
        title={navMenuData.ambiances.title}
      />
      <NavigationMenuLink
        path={navMenuData.respiration.path}
        icon={navMenuData.respiration.icon}
        title={navMenuData.respiration.title}
      />
      <NavigationMenuLink
        path={navMenuData.profil.path}
        icon={navMenuData.profil.icon}
        title={navMenuData.profil.title}
      />
    </NavigationMenuStyle>
  );
};

export default NavigationMenu;
