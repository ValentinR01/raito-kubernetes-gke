import React from "react";
import PropTypes from "prop-types";
import  TitleStyle  from "./Title.style.jsx"

const Title = ({
    className,
    children,
    color,
    size,
}) => {
  return (
    < TitleStyle
        // Component
        className={className}
        // Style
        $color={color}
        $size={size}
    >
        {children}
    </ TitleStyle >
  )
}

Title.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'xlarge',
  ]),
  color: PropTypes.oneOf([
    'cream',
    'terra',
    'primary',
    'secondary'
  ]),
}

Text.defaultProps = {
  children: null,
  className: null,
  size: 'medium',
  color: 'primary',
}

export default Title;