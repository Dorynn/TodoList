import React, {Component} from "react";
import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
`
class NotFound extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: 0,
        }
    }
    render() {
        return(
            <Body>
                <div>Not found</div>
            </Body>
        )
    }
}


export default NotFound;