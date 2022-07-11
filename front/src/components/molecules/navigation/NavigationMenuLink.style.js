import styled, { css } from "styled-components";

const NavigationMenuLinkStyle = styled.li`
  color: #f3edd7;
  list-style: none;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 30px;
  font-weight: bold;

  ${({ $bold }) => {
    let fontWeight = "normal";
    if ($bold) {
      console.log($bold);
      fontWeight = "bold";
    }
    return css`
      font-weight: ${fontWeight};
    `;
  }};
`;

export default NavigationMenuLinkStyle;
