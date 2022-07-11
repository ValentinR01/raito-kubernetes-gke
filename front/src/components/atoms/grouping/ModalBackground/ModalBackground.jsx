import React from 'react'
import ModalBackgroundStyle from './ModalBackground.style'

const ModalBackground = ({children}) => {
  return (
    <ModalBackgroundStyle>
      {children}
    </ModalBackgroundStyle>
  )
}
export default ModalBackground