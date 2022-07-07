import styled from 'styled-components';

const PageContentTemplateStyle = styled.div`
width: 70vw;
align-items:center;
overflow:auto;
scrollbar: hidden;
margin: 10px;
border-radius: 12px;
opacity: 0.20px
-ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
      }
}
`;

export default PageContentTemplateStyle;