import React, {useEffect, useState} from "react";
import '../../styles/modal.css';
import { v4 as uuid } from 'uuid';
import {MdOutlineClose} from 'react-icons/md';
import { ButtonAdd, ButtonCancel } from "./Button";
import "../../styles/button.css";
import {addTodo, updateTodo} from '../../slices/todoSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const ModalTodo=({modalOpen, setModalOpen, type, todo})=>{
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('Completed');
    const [desc, setDesc] = useState('');
    const [deadline, setDeadline] = useState('');
    const [startDate, setStartDate] = useState('');

    const dispatch = useDispatch();

    useEffect(()=>{
        if(type==='update' && todo){
            setTitle(todo.title);
            setDesc(todo.desc);
            setStatus(todo.status);
            setDeadline(todo.deadline);
            setStartDate(todo.startDate);
        }else{
            setTitle('');
            setDesc('');
            setStatus('Incomplete');
            setDeadline('');
            setStartDate('');
        }
    },[type, todo, modalOpen]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(title==='' || desc===''){
            toast.error("Please complete form...");
            return;
        }
        if(title&&status&&desc&&deadline)
        {
            if(type==='add'){
                dispatch(
                    addTodo({
                        id:uuid(),
                        title,
                        desc,
                        deadline,
                        status,
                        startDate,
                    })
                    );
                    
                    toast.success('Added!');

            }
        
            if(type==='update')
            {
                if(todo.title !==title || todo.status!==status || todo.desc !== desc || todo.deadline !==deadline || todo.startDate !== startDate){
                    dispatch(updateTodo({...todo, title, desc,deadline,status, startDate}))
                    toast.success('Updated!')
                setModalOpen(false);

                }else{
                    toast.error('No changes')
                    return;
                }

            }
            setModalOpen(false);
        }       
    }

    return(    
    modalOpen && (
        <div className='wrapper'>
            <div className='container'>
                <div className='closeButton'  onClick={() => setModalOpen(false)}>
                    <MdOutlineClose></MdOutlineClose>
                </div>
                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                        <h1 className='formTitle' >{type==='update'?'Update':'Add'} Task</h1>

                        <label htmlFor="title" >
                            Title
                            <input type="text" id='title' value={title}
                            onChange={(e) => setTitle(e.target.value)}/>
                        </label>

                        <label htmlFor='desc' >
                            Description
                            <textarea type="text" id='desc' value={desc}
                            onChange={(e) => setDesc(e.target.value)}/>
                        </label>

                        <label htmlFor="startDate" >
                            Ngày bắt đầu
                            <input type="datetime-local" id='startDate' value={startDate}
                            onChange={(e) => setStartDate(e.target.value.toLocaleString())}/>
                        </label>

                        <label htmlFor="deadline" >
                            Ngày kết thúc
                            <input type="datetime-local" id='deadline' value={deadline}
                            onChange={(e) => setDeadline(e.target.value.toLocaleString())}/>
                        </label>

                        <label htmlFor="type">
                            Status
                            <select
                            id="type"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            >
                            <option value="Incomplete">Incomplete</option>
                            <option value="Processing">Processing</option>
                            <option value="Completed">Completed</option>
                            </select>
                        </label>

                        <div className='buttonContainer'>
                            <ButtonAdd className='button--add' type='submit'  >{type==='update'?'Update':'Add'} Task</ButtonAdd>
                            <ButtonCancel className="button--cancel" type='button' onClick={() => setModalOpen(false)}>Cancel</ButtonCancel>
                        </div>
                </form>


            </div>
        </div>
        )

    )


}

export default ModalTodo