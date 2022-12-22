import styled from "styled-components"


export const Wrapper = styled.div`
    ${'' /* width: 100vh; */}
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    ${'' /* background-image:  url(${image}); */}
    ${'' /* overflow: hidden;
    box-sizing: border-box;
    background-image: linear-gradient(rgba(131, 131, 131, 0.4), rgba(131, 131, 131, 0.4)), url(${image}); */}
`;

export const Title = styled.h1`
    ${'' /* text-align: center;
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 48px; 
    color: black;
    text-shadow: #FC0 1px 0 10px; */}
    text-align: center;
    font-family: 'Bowlby One', cursive;
    color: rgba(255, 255, 255, 0.596);
    text-shadow: 20px 0px 10px rgb(0, 0, 0);
`;

export const Task = styled.div`
    width: 700px;
    margin: auto;
`;

export const Text = styled.textarea`
    outline: 0;
    border: none;
    padding: 8px 32px;
`;

export const Input = styled.input`
    outline: 0;
    border: none;
    padding: 8px 32px;
`;

export const Contain = styled.div`
    ${'' /* border: 1px solid #ccc; */}
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 10px;
    border-radius: 5px;
    overflow: hidden;
`;