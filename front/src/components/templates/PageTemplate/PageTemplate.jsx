import React from "react";
import SideBar from "components/organisms/navigation/SideBar/SideBar";
import ThemeLoginButtons from "components/molecules/clickable/ThemeLoginButtons/ThemeLoginButtons";
import PageTemplateStyle from "./PageTemplate.style";
import PageContentTemplate from "components/templates/PageContentTemplate/PageContentTemplate";

const PageTemplate = ({ children }) => {
  return (
    <PageTemplateStyle>
      <SideBar />
      <ThemeLoginButtons />
      <PageContentTemplate>{children}</PageContentTemplate>
    </PageTemplateStyle>
  );
};

export default PageTemplate;
