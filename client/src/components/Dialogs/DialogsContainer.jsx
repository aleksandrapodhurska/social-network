import React from "react";
import {
    addMessage,
    updateNewMessage,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewMessage
})(Dialogs);

export default DialogsContainer;


// const DialogsContainer = () => {
//     return (
//         <Context.Consumer>
//             {
//                 store => {
//                     let state = store.getState().dialogsPage;

//                     let onMessageChange = (value) => {
//                         store.dispatch(updateNewMessageActionCreator(value));
//                     };
                
//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator());
//                     };
//                     return <Dialogs
//                         addMessage={addMessage}
//                         onMessageChange={onMessageChange}
//                         dialogsPage={state}
//                     />
//                 }
//             }
        
//         </Context.Consumer>
//     );
// };

// const mapDispatchToProps = (dispatch) => {
    //     return {
    //         addMessage: () => {
    //             dispatch(addMessageActionCreator())
    //         },
    //         onMessageChange: (value) => {
    //             dispatch(updateNewMessageActionCreator(value))
    //         }
    //     }
    // }