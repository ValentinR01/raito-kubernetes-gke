import PropTypes from "prop-types";
import React from "react";
import LabelStyle from "./Label.style";

const Label = ({ children }) => {
  return <LabelStyle>{children}</LabelStyle>;
};

Label.propTypes = {
  children: PropTypes.string,
};

export default Label;
