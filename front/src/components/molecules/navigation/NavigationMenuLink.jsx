import { Link } from "components/atoms/text";
import React from "react";
import NavigationMenuLinkStyle from "./NavigationMenuLink.style";
import Icon from "components/atoms/grouping/NavIcon/Icon";

/**
 * @param {String} path The router path
 * @param {JSX.Element} icon The icon for the button
 * @param {String} title The title of page of the link
 * @returns
 */

const NavigationMenuLink = ({ path, icon, title }) => {
  return (
    <NavigationMenuLinkStyle>
      <Icon><span>{icon}</span></Icon>
      <Link to={path}>{title}</Link>
    </NavigationMenuLinkStyle>
  );
};

export default NavigationMenuLink;
