import styled from 'styled-components';

const BasicButtonStyle = styled.button`
    color: ${props => (props.primary ? "#F3EDD7" : "#a44d4d")};
    background-color: ${props => (props.primary ? "#a44d4d" : "transparent")};
    font-size: 1em;
    font-weight: 600;
    padding: 0.35em 1em;
    border: none;
    border-radius: 14px;
        &:hover {
            background-color: ${props => (props.primary ? "#ce6060" : "none")};
        }
`;

export default BasicButtonStyle;