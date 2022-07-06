import React from 'react'
import ThemeButton from 'components/atoms/forms/ThemeLoginButtons/ThemeButton'
import Separator from 'components/atoms/forms/ThemeLoginButtons/Separator'
import LoginButton from 'components/atoms/forms/ThemeLoginButtons/LoginButton'

const ThemeLoginButtons = () => {
  return (    
    <div>
      <ThemeButton />
      <Separator /> 
      <LoginButton />
    </div>
  )
}

export default ThemeLoginButtons