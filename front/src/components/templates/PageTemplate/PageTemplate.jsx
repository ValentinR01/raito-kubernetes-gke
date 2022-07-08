import React from 'react';
import SideBar from 'components/organisms/navigation/SideBar/SideBar';
import ThemeLoginButtons from 'components/molecules/clickable/ThemeLoginButtons/ThemeLoginButtons';
import PageTemplateStyle from './PageTemplate.style';
import PageContentTemplate from 'components/templates/PageContentTemplate/PageContentTemplate';
import "./style.css" ;
const PageTemplate = ({ children }) => {
  return (
    <PageTemplateStyle>
      <SideBar />
      <ThemeLoginButtons/>
      <div className="page-template">
      <PageContentTemplate >
        {children}
      </PageContentTemplate>      
      </div>
     
    </PageTemplateStyle>
  );
};

export default PageTemplate;
