import React from "react";
import PropTypes from "prop-types";
import { getStyle } from "./Title.style.jsx"

const Title = ({
    className,
    children,
    color,
    size,
}) => {
  return (
    <getStyle
        // Component
        className={className}
        // Style
        $color={color}
        $size={size}
    >
        {children}
    </getStyle>
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