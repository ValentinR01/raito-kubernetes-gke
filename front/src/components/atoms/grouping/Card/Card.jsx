import React from 'react';
import CardStyle from "./Card.style";

function Card({ children, small = false, medium = false }) {
    return (
        <CardStyle $small={small} $medium={medium}>
          {children}
        </CardStyle>
      );
    };

export default Card;