import React from 'react'
import { Link } from 'react-router-dom'
import MenuLinkStyle from './MenuLink.style';

/**
 * @param {String} path The router path
 * @param {JSX.Element} icon The icon for the button
 * @param {String} title The title of page of the link 
 * @returns 
 */

const MenuLink = ({path, icon, title }) => {
  return (
    <MenuLinkStyle>
        <span className="icon-bar">{icon}</span>
        <Link to={path}>{title}</Link>
    </MenuLinkStyle>
  )
}

export default MenuLink