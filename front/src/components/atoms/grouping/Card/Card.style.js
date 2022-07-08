import styled, { css } from "styled-components";
import { themeColorLight } from 'style/vars/colors';

const CardStyle = styled.section`
  background-color: ${themeColorLight.lightCream};
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  
  border-radius: 10px;
  text-align: center;

  ${({ $medium, $small }) => {
    let width = "1133px";
    if ($medium) {
      width = "742px";
    } else if ($small) {
      width = "371px";
    }
    return css`
      width: ${width};
    `;
  }};
`;

export default CardStyle;
// padding: 10px;