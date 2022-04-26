import React from 'react';
import PropTypes from "prop-types";

import TextStyle from './Text.style';

const Text = ({
    className,
    children,
    size,
}) => {
  return (
    <TextStyle
        // Component
        className={className}
        // Style
        $size={size}
    >
        {children}
    </TextStyle>
  )
}

Text.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'xlarge',
  ]),
}

Text.defaultProps = {
  children: null,
  className: null,
  size: 'medium',
}

export default Text;
