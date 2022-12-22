import React ,{useState}from 'react'
import {Wrapper, Left, Right,I, Search, Input, Person, Image} from './headerStyle'
import avt from "../../containers/img/desk.png";
import SideBar from './SideBar';
import NotifContent from './NotifContent';
import "../../styles/Notif.css"
import ModalTodo from './ModalTodo';

const Header = ()=>{
    const [sideBarOpen, setSideBarOpen]=useState(false);
    const [notifOpen, setNotifOpen] = useState(false);
    const [addTask, setAddTask] = useState(false);
    const handleOpen = ()=>{
        setSideBarOpen(!sideBarOpen)

    }
    const HandleOpen = ()=>{
        setNotifOpen(!notifOpen);
    }
    const taskOP=()=>{
        setAddTask(!addTask);
    }
    return (
        <div>
        <Wrapper>
            <Left>
                <I  className="fa-solid fa-bars" id='sidebar' onClick={handleOpen} >
                </I>
                <I className="fa-solid fa-house-chimney-user" />
                <Search>
                <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
                    <i className="fa-solid fa-magnifying-glass" style = {{position:"absolute", top:"6px", left: "15px", color: "black", opacity:"0.6", fontSize: "24px"}}/>
                    <Input type="text" placeholder="Search" style={{ outline:0}}/>
                </Search>
            </Left>
            <Right>
                <I className="fa-solid fa-plus hover" onClick={taskOP}/>

                <I onClick={HandleOpen} className="fa-regular fa-bell hover"/>
                { notifOpen && <div className="box-before"></div>}
                { notifOpen && <NotifContent/>}
                <Person>
                    <Image src={avt} alt=""/>
                </Person>
                <ModalTodo modalOpen={addTask} setModalOpen={setAddTask} type='add'/>
            </Right>
        </Wrapper>
        </div>
    )
}

export default Header;