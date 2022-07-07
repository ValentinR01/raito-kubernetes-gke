import React from "react";
import CloudOne from "components/atoms/embedding/CloudOne/CloudOne";
import CloudSecond from "components/atoms/embedding/CloudSecond/CloudSecond";
import MountainIcon from "components/atoms/embedding/MountainIcon/MountainIcon";
import AppBackgroundStyle from "./AppBackground.style";

const AppBackground = () => {
  return (
    <AppBackgroundStyle>
      <MountainIcon />
      <CloudOne />
      <CloudSecond />
    </AppBackgroundStyle>
  );
};

export default AppBackground;
