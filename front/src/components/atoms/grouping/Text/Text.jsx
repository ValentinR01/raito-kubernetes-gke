import React from "react";
import PropTypes from "prop-types";

import TextStyle from "./Text.style";

const Text = ({ className, children, color, size }) => {
  return (
    <TextStyle
      // Component
      className={className}
      // Style
      $color={color}
      $size={size}
    >
      {children}
    </TextStyle>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["xsmall", "small", "medium", "large", "xlarge"]),
  color: PropTypes.oneOf(["cream", "terra", "primary", "secondary", "error"]),
};

Text.defaultProps = {
  children: null,
  className: null,
  size: "medium",
  color: "primary",
};

export default Text;
