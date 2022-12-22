import React, {useState} from "react";
import {Body, Contain, Main, Title, Text, Row, Wrapper, Image, Button, Input,I, P } from "./LoginStyle";
import desk from "../img/desk2.webp"



const Login = () =>{
    const [state, setState] = useState({
        username: '',
        password:''
    })

    return (
        <Body>
            <Contain>
                <Main>
                    <Title>Welcome Back</Title>
                    <Text>Login</Text>
                    <Row>
                        <P>Username</P>
                        <Wrapper>
                        <Input 
                            onChange={(event) => {
                                setState({...state, username: event.target.value})
                            }}
                        />
                        <I>
                            <i class="fa-solid fa-user"></i>
                        </I>
                        </Wrapper>
                    </Row>
                    <Row>
                        <P margin="0px">Password</P>
                        <Wrapper>
                            <Input type="password"
                                onChange={(event)=> {
                                    setState({...state, password: event.target.value})
                                }}
                            />
                            <I>
                                <i class="fa-solid fa-lock"></i>
                            </I>
                        </Wrapper>
                    </Row>   

                    <Button
                        onClick={() => {
                            // console.log('ban vua click nut login')
                            // const params = {
                            //     username: state.username,
                            //     password: state.password,
                            // };
                            window.location.href += "home";

                        }}
                    >Login</Button>
                </Main>
                <Image>
                    <img alt="desk" src={desk} width="100%" height="100%"/>
                </Image>
            </Contain>
        </Body>
    )
}

export default Login;