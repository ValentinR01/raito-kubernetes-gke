import styled, { css } from "styled-components";

const NavigationMenuLinkStyle = styled.span`
  position: absolute;
  left: 0px;
  margin-top: -15px;
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
