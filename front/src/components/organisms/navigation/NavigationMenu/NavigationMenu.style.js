import styled, { css } from 'styled-components';

const NavigationMenuStyle = styled.div`
    margin-top: -100px;
    font-size: 1.25em;
    color: ${({ theme, $color }) => theme.colors[$color]};
    ${({ $size }) => {
        let fontSize;
        switch ($size) {
            case 'small':
                fontSize = 20;
                break;
            case 'large':
                fontSize = 36;
                break;
            case 'xlarge':
                fontSize = 48;
                break;
            default:
                fontSize = 16;
                break;
        }
        return css`
            font-size: ${fontSize}px;
        `;
    }}
`;

export default NavigationMenuStyle;