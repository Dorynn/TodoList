import styled from 'styled-components';

var textCorlor="cadetblue";

export const Body = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-item: center;

`;

export const Contain = styled.div`
    margin-top: 75px;
    width: 80%;
    height: 80%;
    border-radius: 20px;
    display: flex;
    box-shadow: 0 0  10px grey;
    overflow: hidden

`;

export const Main = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;


export const Title = styled.div`
    margin-top: 70px;
    width: 100%;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: ${textCorlor};
`;
export const Text = styled.div`
    margin-top: 70px;
    color: ${textCorlor};
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 20px;
    margin-bottom: 50px;
`;

export const Wrapper = styled.div`
    width: 300px;
    position: relative;
    background-color: white ;
`;

export const Input= styled.input`
    border: none;
    border-bottom: 1px solid ${textCorlor};
    width: 100%;
    padding: 8px 2px;
    outline: 0;
`;

export const I = styled.i`
    position: absolute;
    right: 5px;
    bottom: 5px;
    
`;

export const Image = styled.div`
    width: 60%;
    opacity: 0.8;
`;

export const Row = styled.div`
    box-sizing: border-box;
    color: ${textCorlor};
    margin: 10px 0 20px;

`;

export const Button = styled.button`
    background-color: ${textCorlor};
    border:none;
    padding: 8px 48px;
    border-radius: 25px;
    margin-top: 50px;
    font-size: 18px;
    color: white;
    &:hover{
        cursor: pointer;
    }
`;

export const P = styled.p`
    margin: 0;
`

