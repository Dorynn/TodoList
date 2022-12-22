import React from "react";
import {Wrapper, Project, Title, Icon,I} from './sideBarStyle'

const SideBar = ({sideBarOpen, setSideBarOpen})=>{
    
    return(
        sideBarOpen&&<Wrapper>
            <Project>
                <Title>Project</Title>
                <Icon>
                    <I className="fa-solid fa-plus hover"></I>
                    <I className="fa-solid fa-caret-down"></I>
                </Icon>
            </Project>
            <form>

            </form>
        </Wrapper>
        
    )
}

export default SideBar;