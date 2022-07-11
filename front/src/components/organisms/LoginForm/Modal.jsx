import React, { Fragment } from 'react';
import ModalStyle from './ModalStyle.style'
import LoginForm from '../../molecules/forms/LoginForm/LoginForm'
import CloseButtonModalStyle from './CloseButtonModalStyle';
import Card from 'components/atoms/grouping/Card/Card';
import ModalBackground from 'components/atoms/grouping/ModalBackground/ModalBackground';

const Modal = ({open, children, onClose}) => {
    if (!open) return null

    return (  
            <ModalStyle>
                <ModalBackground>
                    <Card medium>
                        {/* <button onClick={onClose}>close;</button> */}
                        <CloseButtonModalStyle onClick={onClose}>&times;</CloseButtonModalStyle>
                        {children}
                        <LoginForm />
                    </Card>
                </ModalBackground>
            </ModalStyle>
    )
}
  
export default Modal;