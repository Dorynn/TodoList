import React from "react";
import { useSelector } from 'react-redux';
import NotifItem from './NotifItem'
import "../../styles/Notif.css"

const NotifContent = ()=>{
    const notifList = useSelector((state) => state.notification.notifList)
    //console.log(notifList);
    const notifs = [...notifList];
    const ListNotif = [];
    const check =(item)=>{
        for(var i = 0; i < ListNotif.length; i++)
            if(ListNotif[i].title == item.title)
                return false;
        return true;
    }
    notifs.map((item)=>{
        if(check(item))
            ListNotif.push({id: item.id,title: item.title, time: item.time});
    })
    //console.log(ListNotif);
    ListNotif.sort((a, b) => new Date(b.time) - new Date(a.time));
    return(
        <>
        <div className="boxNotif">
            { ListNotif.length>0 ? ListNotif.map((notif)=><NotifItem key={notif.id} notif={notif} />) : <p>No Notification</p>}
        </div>
        </>
    )


}

export default NotifContent;