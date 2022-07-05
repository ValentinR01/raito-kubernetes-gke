import React from "react";
import CardStyle from "./Card.style";

const Card = ({ children, small = false, medium = false }) => {
  return (
    <CardStyle $small={small} $medium={medium}>
      {children}
    </CardStyle>
  );
};

export default Card;
