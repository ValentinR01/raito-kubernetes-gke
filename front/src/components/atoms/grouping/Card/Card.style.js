import styled, { css } from "styled-components";
import { themeColorLight } from "style/vars/colors";

const CardStyle = styled.section`
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-top: 20px;

  border-radius: 10px;
  text-align: center;

  ${({ $medium, $small, $transparent }) => {
    let width = "1133px";
    let backgroundColor = themeColorLight.lightCream;
    if ($medium) {
      width = "742px";
    } else if ($small) {
      width = "371px";
    }

    if ($transparent) {
      backgroundColor = "rgba(255, 255, 255, 0)";
    }
    return css`
      width: ${width};
      background-color: ${backgroundColor};
    `;
  }};
`;

export default CardStyle;
// padding: 10px;
