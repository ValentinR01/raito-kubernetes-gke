import React from 'react'
import CloudOne from '../CloudOne/CloudOne'
import CloudSecond from '../CloudSecond/CloudSecond'
import MountainIcon from '../MountainIcon/MountainIcon'
import AppBackgroundStyle from './AppBackground.style'

const AppBackground = () => {
  return (
    <AppBackgroundStyle>
      <MountainIcon />
      <CloudOne />
      <CloudSecond />
    </AppBackgroundStyle>
  )
}

export default AppBackground