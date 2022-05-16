import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        color: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.fonts.main};
        font-weight: 400;
        *::selection {
            color: ${({ theme }) => theme.colors.mainFontColor};
            background: ${({ theme }) => theme.colors.selectionColor};
        }
    }
`;

export default GlobalStyle;