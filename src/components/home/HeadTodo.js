import React, { useState } from 'react'
import Button,{ButtonSelect} from './Button';
import { useDispatch,useSelector } from 'react-redux';
import ModalTodo from './ModalTodo';
import { updateFilterStatus } from '../../slices/todoSlice';


const HeadTodo = () =>{
    const [modalOpen, setModalOpen] = useState(false);  
    const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
    const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
    const dispatch = useDispatch();

    const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };  
    return(
        <div style={{display: "flex", justifyContent:"space-between", width:"100%", margin:"30px 0"}}>
            <Button className="button" onClick={() => setModalOpen(true)}>Add Task</Button>
            <ButtonSelect id='status ' onChange={(e) => updateFilter(e)}
        value={filterStatus}>
                <option value='all'>All</option>
                <option value='Incomplete'>Incomplete</option>
                <option value='Completed'>Completed</option>
                <option value='Processing'>Processing</option>

            </ButtonSelect>
            <ModalTodo type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    )
}

export default HeadTodo;