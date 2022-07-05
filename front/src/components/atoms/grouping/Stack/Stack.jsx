import React from "react";
import StackStyle from "./Stack.style";

/**
 * @description This component groups content vertically (default) or horizontally
 * @param {Boolean} horizontal If true, the stack will display its content horizontally.
 * @param {JSX.Element} children Any JSX Element
 * @returns
 */
const Stack = ({ horizontal = false, children }) => {
  return <StackStyle $horizontal={horizontal}>{children}</StackStyle>;
};

export default Stack;
