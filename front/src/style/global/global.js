import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        color: ${({ theme }) => theme.color.primary};
        font-family: ${({ theme }) => theme.fonts.main};
        font-weight: 400;
        *::selection {
            color: ${({ theme }) => theme.color.mainFontColor};
            background: ${({ theme }) => theme.color.selectionColor};
        }
    }
`;

export default GlobalStyle;