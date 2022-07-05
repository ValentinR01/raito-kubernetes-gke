import React from 'react'
import CloudOne from "components/atoms/embeding/CloudOne/CloudOne";
import CloudSecond from "components/atoms/embeding/CloudSecond/CloudSecond";
import MountainIcon from "components/atoms/embeding/MountainIcon/MountainIcon";
import AppBackgroundStyle from './AppBackground.style'

const AppBackground = () => {
  return (
    <AppBackgroundStyle>
      <MountainIcon />
      <CloudOne/>
      <CloudSecond />
    </AppBackgroundStyle>
  )
}

export default AppBackground