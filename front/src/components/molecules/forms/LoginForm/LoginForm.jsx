import React from 'react'
import InputEmail from 'components/atoms/forms/Input/InputEmail'
import InputPassword from 'components/atoms/forms/Input/InputPassword'
import ConnexionButton from 'components/molecules/clickable/ConnexionButton/ConnexionButton'
import InscriptionButton from 'components/molecules/clickable/InscriptionButton/InscriptionButton'

const LoginForm = () => {
    return (    
    <div>
        <p>Email</p>
        <InputEmail />
        
        <p>Mot de passe</p>
        <InputPassword />
        <ConnexionButton />
        <InscriptionButton />
    </div>
    
    )
  }
  
  export default LoginForm