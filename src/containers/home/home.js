import React from "react"
import {Wrapper, Content} from "./homeStyle"
import Header from '../../components/home/Header'
import Todo from "../../components/home/Todo"

const Home = ()=>{
    return (
        <Wrapper>
            <Header/>
            <Content>
                <Todo/>
            </Content>
        </Wrapper>
        
    )
}


export default Home;