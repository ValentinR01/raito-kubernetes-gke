import { NavIcon } from "components/atoms/grouping";
import { Link } from "components/atoms/text";
import React from "react";
import { useLocation } from "react-router";
import NavigationMenuLinkStyle from "./NavigationMenuLink.style";
import NavigationSelector from "./NavigationSelector/NavigationSelector";

/**
 * @param {String} path The router path
 * @param {JSX.Element} icon The icon for the button
 * @param {String} title The title of page of the link
 * @returns
 */

const NavigationMenuLink = ({ path, icon, title }) => {
  const { pathname } = useLocation();

  const selected = pathname === path;

  return (
    <NavigationMenuLinkStyle $bold={selected}>
      <NavigationSelector visible={selected} />
      <NavIcon>{icon}</NavIcon>
      <Link to={path}>{title}</Link>
    </NavigationMenuLinkStyle>
  );
};

export default NavigationMenuLink;
