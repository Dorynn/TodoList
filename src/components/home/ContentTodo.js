import React from "react";
import { useSelector } from 'react-redux';
import TodoItem from "./TodoItem";
import {useEffect, useState} from "react";

const ContentTodo=()=>{
    const todoList = useSelector((state) => state.todo.todoList);
    const [title, setTitle] = useState('');

    const filterStatus = useSelector((state) => state.todo.filterStatus);
    const sortedTodoList = [...todoList];
    const filteredTodoList = sortedTodoList.filter((item) => {
        if (filterStatus === 'all') {
          return true;
        }
        return item.status === filterStatus;
      });
    return(
        <div style={{backgroundColor: "#000000a1", boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", borderRadius: "16px", padding:"16px"}}>
            {
                filteredTodoList && filteredTodoList.length>0?filteredTodoList.map((todo)=><TodoItem key={todo.id} todo={todo}/>):<p style={{color:"white"}}>No todo found</p>
            }
        </div>
    )
}

export default ContentTodo;