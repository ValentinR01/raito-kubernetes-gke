import styled, { css } from 'styled-components';

const BasicButtonStyle = styled.button`
    background: ${({ theme, $color }) => theme.colors[$color]};
    ${({ $disabled, }) => {

    }}
`;

export default BasicButtonStyle;