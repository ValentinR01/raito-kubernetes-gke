import React from 'react';
import ModalStyle from './ModalStyle.style'
import LoginForm from '../../molecules/forms/LoginForm/LoginForm'

const Modal = ({open, children, onClose}) => {
    if (!open) return null

    return (  
        <div>
            <ModalStyle>
                <button onClick={onClose}>Close</button>
                {children}
                <LoginForm />
            </ModalStyle>
            
        </div>
    )
  }
  
  export default Modal