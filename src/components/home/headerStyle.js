import styled from 'styled-components' ;

var bgHeader = "black";
var textHeader="#fff";
var bgSearch = "#efe8e89d";

export const Wrapper = styled.div`
  background-color: ${bgHeader};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  color: ${textHeader};
  font-size: 18px;
`;

export const Left = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;

`;

export const I = styled.i`
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 18px;
    &:hover{
        background-color:rgba(255,255,255,0.2);
    }
`;

export const Search = styled.div`
    position: relative;
`;

export const Input = styled.input`
    padding: 8px 32px;
    background-color: ${bgSearch};
    border: none;
    border-radius: 4px;
    margin-left: 10px;    
    &:hover{
        background-color:#ffffff;
    }

    &:focus{
        border:none;
    }

`;

export const Person = styled.div`
    padding: 0 8px;
`;

export const Image = styled.img`
    border-radius: 50%;
    width: 37px;
    height: 37px;
`;

export const Right=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;