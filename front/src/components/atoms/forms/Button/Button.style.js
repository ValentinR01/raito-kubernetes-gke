import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
    border-radius: 10px;
    cursor: pointer;
   
    ${({ $bgColor, $disabled, $format, $locked, $textColor, $size, theme }) => {
        let background = theme.colors[$bgColor];
        let backgroundHover = theme.colors[`${$bgColor}Hover`];
        let border;
        let borderHover;
        let color = $textColor;
        let cursor = 'pointer';
        let padding;
        let pointerEvents = 'auto';
        let fontSize;
        let textDecoration;

        if ($disabled) {
            background = theme.colors[`${$bgColor}Disabled`]
            color = 'primaryDisabled';
            cursor = 'auto';
            pointerEvents = 'none';
        }

        if ($locked) {
            backgroundHover = theme.colors[$bgColor]
            cursor = 'not-allowed'
        } 

        switch ($size) {
            case 'small':
                padding = '15px 20px'
                fontSize = '15px'
                break;
            case 'large':
                padding = '25px 30px'
                fontSize = '25px'
                break;
            case 'xlarge':
                padding = '30px 35px'
                fontSize = '30px'
                break;
            default:
                padding = '20px 25px'
                fontSize = '20px'
        }

        switch ($format) {
            case 'ghost':
                background = 'none';
                backgroundHover = theme.colors[`${$bgColor}Hover`];
                border = 'none';
                color = 'none';
                break;
            case 'link':
                background = '';
                border = 'none';
                borderHover = 'primaryTransparent';
                color = 'terra';
                textDecoration = 'underline';
                break;
            case 'outline':
                background = 'primary';
                border = 'primary';
                borderHover = `1px solid ${theme.colors[$bgColor]}`
                color = theme.colors[$bgColor];
                break;
            default:
                break;
        }
        return css`
            background: ${background};
            border: ${border};
            color: ${theme.colors[color]};
            cursor: ${cursor};
            padding: ${padding};
            pointer-events: ${pointerEvents};
            font-size: ${fontSize};
            :hover {
                background: ${backgroundHover};
                border: ${borderHover};
                cursor: ${cursor};
                text-decoration: ${textDecoration};
                transition: 0.3s;
            }
        `
    }};
`;

export default ButtonStyle;