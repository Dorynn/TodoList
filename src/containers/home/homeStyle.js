import styled from 'styled-components'
import image from '../../containers/img/andrew.jpg'

export const Wrapper = styled.div`
    background-color: green;
    width: 100%;
    height: 100vh;

`;
export const Content = styled.div`
    width: 100%;
    background: white;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(rgba(131, 131, 131, 0.4), rgba(131, 131, 131, 0.4)), url(${image});
    height: fit-content;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

