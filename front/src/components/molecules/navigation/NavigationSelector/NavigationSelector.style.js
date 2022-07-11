import styled, { css } from "styled-components";

const NavigationMenuLinkStyle = styled.span`
  ${({ $visible }) => {
    let visibility = "hidden";
    if ($visible) {
      visibility = "visible";
    }
    return css`
      visibility: ${visibility};
    `;
  }};
`;

export default NavigationMenuLinkStyle;
