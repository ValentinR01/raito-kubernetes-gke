import { createGlobalStyle } from "styled-components";
import RobotoRagularWoff2 from './fonts/Roboto-Regular.woff2';

const fontFace = ({ family, format = 'woff2', path, weight = 400 }) => `
    @font-face {
        font-display: block;
        font-family: ${family};
        font-stretch: normal;
        font-style: normal;
        font-variant: normal;
        font-weight: ${weight};
        src: url(${path}) format('${format});
    }
`;

const FontStyles = createGlobalStyle`
    ${fontFace({ family: 'Roboto', path: RobotoRagularWoff2 })}
`;

export default FontStyles;