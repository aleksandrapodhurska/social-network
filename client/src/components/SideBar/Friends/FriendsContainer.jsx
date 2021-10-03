import React from 'react';
import Friends from './Friends';
import {connect} from 'react-redux';

// const FriendsContainer = () => {
// 	return (
//         <Context.Consumer>
//             {
//                 store => {
//                     let state = store.getState().sidebar.friends;
//                     console.log(state);
//                     return <Friends friends={state}/>
//                 }
//             }
//         </Context.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends,
    }
}

let mapDispatchToProps = (dispatch) => {
    return 
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer
