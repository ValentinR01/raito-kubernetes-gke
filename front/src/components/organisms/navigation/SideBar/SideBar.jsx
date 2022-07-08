import ToriIcon from "components/atoms/embedding/ToriIcon/ToriIcon";
import LogoIcon from "components/atoms/embedding/LogoIcon/LogoIcon";
import NavigationMenu from "components/organisms/navigation/NavigationMenu/NavigationMenu";
import SideBarStyle from "./SideBar.style";

const SideBar = () => {
  return (
    <SideBarStyle>
      <LogoIcon fill="#F3EDD7" width="90" height="90" /> 
      <NavigationMenu />
      <ToriIcon fill="#F3EDD7" stroke="#F3EDD7" width="140" height="140" />
    </SideBarStyle>
  );
};

export default SideBar;
