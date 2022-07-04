import styled, { css } from "styled-components";

const StackStyle = styled.div`
  width: 100%;

  ${({ $horizontal }) => {
    let display;
    if ($horizontal) {
      display = "flex";
    }
    return css`
      display: ${display};
    `;
  }};
`;

export default StackStyle;
