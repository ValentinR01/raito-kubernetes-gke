import styled from "styled-components";

const PageContentTemplateStyle = styled.div`
width: 100vw;
padding-top: 70px;
display: flex;
flex-direction: column;
align-items:center;
position:relative;
z-index:-1;
overflow:auto;
scrollbar: hidden;
-ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
      }
}
`;

export default PageContentTemplateStyle;
