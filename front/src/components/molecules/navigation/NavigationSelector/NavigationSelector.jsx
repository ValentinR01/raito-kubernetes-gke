import SelectorIcon from "components/atoms/embedding/SelectorIcon/SelectorIcon";
import React from "react";
import NavigationSelectorStyle from "./NavigationSelector.style";

const NavigationSelector = ({ visible }) => {
  return (
    <NavigationSelectorStyle $visible={visible}>
      <SelectorIcon />
    </NavigationSelectorStyle>
  );
};
export default NavigationSelector;
