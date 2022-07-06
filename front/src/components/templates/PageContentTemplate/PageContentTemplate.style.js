import styled from 'styled-components';

const PageContentTemplateStyle = styled.div`
width: 100vw;
padding-top: 80px;
display: flex;
flex-direction: column;
align-items:center;
overflow:auto;
scrollbar: hidden;
-ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
      }
}
`;

export default PageContentTemplateStyle;