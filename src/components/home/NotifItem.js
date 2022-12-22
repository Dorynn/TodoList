import React, {useEffect, useState} from "react";

import '../../styles/item.css'
import { format } from 'date-fns';

import "../../styles/Notif.css"


const NotifItem = ({notif})=>{
    return(
    <div className="contain">
        
        <p className="notif-title">{notif.title}</p>
        <p className="date">{format(new Date(notif.time), 'p, MM/dd/yyyy')}</p>
    </div>

    )
}

export default NotifItem;