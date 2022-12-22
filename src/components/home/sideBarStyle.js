import styled from "styled-components";

var textColor = "#6e6e6e"
export const Wrapper = styled.div`
    background-color: #27251d;
    width: 200px;
    padding: 0 35px;
    height:100vh;
    position: absolute;
    top: 40px;
    left: -140px;
    padding-bottom: 32px;
    margin: 0;
    opacity: 0.6;
`;

export const Project = styled.div`
    margin: 0;
    color: ${textColor};
    display: flex;
    width: 100%;
    justify-content: space-between;
    
`;

export const Icon = styled.div`
    padding-top: 15px;
`;

export const I = styled.i`
    padding-left: 16px;
    font-size: 22px;
`;

export const Title = styled.h3`
    margin: 0;
    color: #fff;
    padding: 10px 0;
`;

export const Text = styled.p`
    font-size: 18px;
    color: ${textColor};
`;

