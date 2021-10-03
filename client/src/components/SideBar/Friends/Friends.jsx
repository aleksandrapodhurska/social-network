import React from 'react';
import {NavLink} from 'react-router-dom';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friends = props.friends.map(friend => <Friend friend={friend.name}/>);

    return (
        <div>
            {/* <NavLink to="/friends"> */}
            FRIENDS
                {friends}
            {/* </NavLink>  */}
        </div>
    )
}

export default Friends
