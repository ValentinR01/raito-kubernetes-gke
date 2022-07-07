import React from "react";
import ThemeButton from "components/atoms/forms/ThemeLoginButtons/ThemeButton";
import Separator from "components/atoms/forms/ThemeLoginButtons/Separator";
import LoginButton from "components/atoms/forms/ThemeLoginButtons/LoginButton";
import ThemeLoginButtonsStyle from "./ThemeLoginButtons.style";

const ThemeLoginButtons = () => {
  return (
    <ThemeLoginButtonsStyle>
      <ThemeButton />
      <Separator />
      <LoginButton />
    </ThemeLoginButtonsStyle>
  );
};

export default ThemeLoginButtons;
