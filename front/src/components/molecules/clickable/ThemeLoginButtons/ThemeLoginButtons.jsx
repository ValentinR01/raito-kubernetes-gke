import React from 'react'
import ThemeLoginStyle from './ThemeLoginStyle.style'
import ThemeButton from 'components/atoms/forms/ThemeLoginButtons/ThemeButton'
import Separator from 'components/atoms/forms/ThemeLoginButtons/Separator'
import LoginButton from 'components/atoms/forms/ThemeLoginButtons/LoginButton'

const ThemeLoginButtons = () => {
  return (    
    <ThemeLoginStyle>
      <ThemeButton />
      <Separator /> 
      <LoginButton />
    </ThemeLoginStyle>
  )
}

export default ThemeLoginButtons