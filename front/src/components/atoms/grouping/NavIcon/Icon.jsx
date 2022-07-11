import React from 'react';
import IconStyle from "./Icon.style";

const Icon = ({ children }) => {
  return (
    <IconStyle>
      {children}
    </IconStyle>
  );
};

export default Icon;