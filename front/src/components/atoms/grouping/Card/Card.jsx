import React from "react";
import CardStyle from "./Card.style";

const Card = ({
  children,
  small = false,
  medium = false,
  transparent = false,
}) => {
  return (
    <CardStyle $small={small} $medium={medium} $transparent={transparent}>
      {children}
    </CardStyle>
  );
};

export default Card;
