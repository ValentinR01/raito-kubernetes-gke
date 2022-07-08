import styled, { css } from "styled-components";

const HeadingStyle = styled.p`
  color: #a44d4d;
  display: block;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  text-align: center;
  padding-left: 20px;

  ${({ $level, $upperCase }) => {
    let fontSize;
    let marginTop;
    let marginBottom;
    let textTransform;
    switch ($level) {
      case "h1":
        fontSize = "2em";
        marginTop = "0.67em";
        marginBottom = "0.67em";
        break;
      case "h2":
        fontSize = "1.5em";
        marginTop = "0.83em";
        marginBottom = "0.83em";
        break;
      case "h3":
        fontSize = "1.17em";
        marginTop = "1em";
        marginBottom = "1em";
        break;
      case "h4":
        fontSize = " 1em";
        marginTop = "1.33em";
        marginBottom = "1.33em";
        break;
      case "h5":
        fontSize = ".83em";
        marginTop = "1.67em";
        marginBottom = "1.67em";
        break;
      case "h6":
        fontSize = ".67em";
        marginTop = "2.33em";
        marginBottom = "2.33em";
        break;
      default:
        fontSize = "2em";
        marginTop = "0.67em";
        marginBottom = "0.67em";
        break;
    }

    if ($upperCase) {
      textTransform = "uppercase";
    }

    return css`
      font-size: ${fontSize};
      margin-top: ${marginTop};
      margin-bottom: ${marginBottom};
      text-transform: ${textTransform};
    `;
  }};
`;

export default HeadingStyle;
