import styled, { css } from "styled-components";

const StackStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ $horizontal }) => {
    let flexDirection;
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
