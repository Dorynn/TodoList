// import axios from "axios";
import React from "react";
import HeadTodo from "./HeadTodo";
import { Wrapper } from "./TodoStyle";
import ContentTodo from "./ContentTodo";
import {Title, Task} from "./TodoStyle";
import {Toaster} from 'react-hot-toast';

const Todo = ()=>{
    return (
        <div >
        <Wrapper>
            <Title>TODO LISTS</Title>
            <Task>
                <HeadTodo/>
                <ContentTodo />
            </Task>
        </Wrapper>
        <Toaster/>
        </div>

    )
}

export default Todo;