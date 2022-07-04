import React from "react";
import StackStyle from "./Stack.style";

const Stack = ({ horizontal = false, children }) => {
  return <StackStyle $horizontal={horizontal}>{children}</StackStyle>;
};

export default Stack;
