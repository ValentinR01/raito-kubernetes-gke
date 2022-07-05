import styled, { css } from "styled-components";

const StackStyle = styled.div`
  display: flex;
  align-items: center;

  ${({ $horizontal }) => {
    let flexDirection = "column";
    let justifyContent;
    if ($horizontal) {
      flexDirection = "initial";
      justifyContent = "space-evenly";
    }
    return css`
      flex-direction: ${flexDirection};
      justify-content: ${justifyContent};
    `;
  }};
`;

export default StackStyle;
