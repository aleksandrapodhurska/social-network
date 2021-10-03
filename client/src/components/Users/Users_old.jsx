import React from 'react';
import axios from 'axios';
import s from '../Dialogs/Dialogs.module.css';
import userImage from '../../assets/images/user.jpeg'

const Users = (props) => {

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => props.setUsers(res.data.items));
    }
        
    return (
        <div>
            { props.users.map(user => 
                <div key={user.id}>
                    <span>
                        <div>
                            <img className={s.avatar} src={user.photos.small !== null ? user.photos.small : userImage} alt=""/>
                        </div>
                    </span>
                    <span>
                        <button onClick={() => props.toggleFollow(user.id)}>{user.following ? 'UNFOLLOW' : 'FOLLOW'}</button>
                    </span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </div>
            )}
        </div>
    )
}

export default Users
