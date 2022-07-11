import React from "react";
import BasicButtonStyle from "components/molecules/clickable/BasicButton/BasicButton.style";

const BasicButton = ({ children, primary, onClick }) => {
  return (
    <BasicButtonStyle primary={primary} onClick={onClick}>
      {children}
    </BasicButtonStyle>
  );
};

export default BasicButton;
