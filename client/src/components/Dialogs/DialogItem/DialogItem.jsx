import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    let src = props.img;
    return (
        <NavLink to={path} activeClassName={s.active}>
        <div className={s.dialog}>
            <img className={s.avatar} src={src} alt="avatar"/>
            <span>{props.name}</span>
        </div>
        </NavLink>
    )
}

export default DialogItem
