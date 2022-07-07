import styled from 'styled-components';

const CloudOneStyle = styled.div `
    position: fixed;
    top: 10px;
    left: 450px;
    @media (max-width: 1285px) {
        left: 400px;
    }
    @media (max-width: 1177px) {
        left: 350px;
    }
    @media (max-width: 1127px) {
        left: 300px;
    }
    @media (max-width: 1090px) {
        left: 250px;
    }
    @media (max-width: 1016px) {
        left: 20px;
    }
`;
export default CloudOneStyle;