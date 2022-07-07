import styled from 'styled-components';

const PageContentTemplateStyle = styled.div`
width: 100vw;
padding-top: 80px;


align-items:center;
overflow:auto;
scrollbar: hidden;
height: 95vh;
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