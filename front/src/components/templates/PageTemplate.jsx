import React from 'react';
import SideBar from 'components/organisms/navigation/SideBar/SideBar';
import LoginButtons from 'components/molecules/clickable/LoginButtons/LoginButtons';

const PageTemplate = ({children}) => {
    return (
        <div>
            <SideBar />
            <LoginButtons />
            {children}
        </div>
    );
};

export default PageTemplate;