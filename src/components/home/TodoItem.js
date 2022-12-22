import React, {useEffect, useState} from "react";
import clsx from 'clsx';
import '../../styles/item.css'
import { format, set } from 'date-fns';
import styled from 'styled-components'
import { MdDelete, MdEdit } from 'react-icons/md';
import { deleteTodo, updateTodo } from "../../slices/todoSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addnotif } from "../../slices/notifSlice";
import { getTime } from "date-fns";
import { v4 as uuid } from 'uuid';
import ModalTodo from "./ModalTodo";

const Input = styled.input`
    width: 30px;
    height: 20px;
`;

const TodoItem= ({todo}) =>{
    const [modalUpdate, setModalUpdate]=useState(false);
    const [checkTodo, setCheckTodo] = useState(false);
    const dispatch=useDispatch();
    const handleDelete=()=>{
        dispatch(deleteTodo(todo.id));
        toast.success("Task deleted!")
    }

    useEffect(()=>{
        if(todo.status==='Completed'){
            setCheckTodo(true);
        }else{
            setCheckTodo(false);
        }
    },[todo.status])

    const handleCheck=()=>{
        setCheckTodo(!checkTodo);
        dispatch(updateTodo(
            {...todo, status: checkTodo?'Incomplete':'Completed'}
        ))
    }

    const handleEdit=()=>{
        setModalUpdate(true)
    }

    const [title, setTitle] = useState('')
    const [flag, setFlag] = useState(false);
    
    setInterval(()=>{
        if(getTime(new Date(todo.deadline))-getTime(new Date()) <= 0)
        {
            
            const SetTitle = ()=>setTitle(`Deadline of  ${todo.title}  is over`);
            if(!flag)
            {
                SetTitle();
                setFlag(true);
            }
            if(title)   
            dispatch(
                addnotif({
                    id:uuid(),
                    title,
                    time: new Date().toLocaleString(),
                })
                );
            
        }

    }, 1000);
   
    
    return(
        <div  className='item'>
            <div className="todoDetails">
                <Input onClick={handleCheck} type='checkbox' id="action" checked = {checkTodo} readOnly/>
                <div className="texts">
                    <p 
                        className={clsx('todoText',{completed:checkTodo})}

                    >{todo.title}</p>
                    <div style={{display:"flex", gridGap:"20px"}}>
                        <p className="time">{format(new Date(todo.startDate), 'p, MM/dd/yyyy')} - {format(new Date(todo.deadline), 'p, MM/dd/yyyy')}</p>
                        <p>{todo.status}</p>
                    </div>
                </div>
            </div>
            <div className="todoActions">
                <div className="icon" onClick={handleDelete}>
                        <MdDelete/>
                </div>

                <div className="icon" onClick={handleEdit} >
                 <MdEdit/>

                </div>

            </div>
            <ModalTodo type='update' modalOpen={modalUpdate} setModalOpen={setModalUpdate} todo={todo} />
        </div>
    )
}

export default TodoItem;

