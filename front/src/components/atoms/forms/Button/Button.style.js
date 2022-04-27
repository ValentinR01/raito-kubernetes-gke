import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
    background: ${({ theme, $color }) => theme.colors[$color]};
    padding: 20px 50px;
    pointer-events: ${({ $disabled }) => $disabled ?? 'none'};
    ${({ $disabled, $color, theme }) => {
        let color = $color;
        $disabled ?? (color = 'primaryDisabled')

        return css`
            color: ${theme.colors[color]};
        `
    }};
`;

export default ButtonStyle;