import React from 'react'
import PropTypes from "prop-types"

import ButtonStyle from './Button.style'

const Button = ({
    className,
    color,
    children,
    disabled,
    name,
    type,
    value,
}) => {
  return (
    <ButtonStyle
        // Component
        className={className}
        name={name}
        type={type}
        value={value}
        // Style
        $color={color}
        $disabled={disabled}
    >
        {children}
    </ButtonStyle>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
      'primary',
      'secondary',
      'terra'
  ]),
  children: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.oneOf([
      'button',
      'reset',
      'submit',
  ]).isRequired,
  value: PropTypes.string,
}

Button.defautProps = {
    className: null,
    color: 'primary',
    children: 'hey',
    disabled: false,
    name: null,
    type: 'button',
    value: null,
}

export default Button;