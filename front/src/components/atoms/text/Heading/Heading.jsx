import React from "react";
import HeadingStyle from "./Heading.style";

/**
 * @description A heading element in order to display titles
 * @param {String} level (h1 | h2 | h3 | h4 | h5 | h6) - The level of the heading to influence the style
 * @param {Boolean} upperCase - If true, heading text is in upper case
 * @param {String} children (any) - The text to display as heading
 * @returns
 */
const Heading = ({ level, children, upperCase = false }) => {
  return (
    <HeadingStyle $level={level} $upperCase={upperCase}>
      {children}
    </HeadingStyle>
  );
};

export default Heading;
