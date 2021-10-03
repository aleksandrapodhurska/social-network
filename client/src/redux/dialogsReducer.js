const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
	dialogs: [
		{
			id: 1,
			name: "Max",
			img:
				"https://st3.depositphotos.com/1007168/14190/v/1600/depositphotos_141908684-stock-illustration-burger-cartoon-character.jpg",
		},
		{
			id: 2,
			name: "Dmytry",
			img:
				"https://i.pinimg.com/originals/bb/9c/65/bb9c6586d746056d8f8d09c489eddb2c.jpg",
		},
		{
			id: 3,
			name: "Alex",
			img:
				"https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYmxvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
		},
		{
			id: 4,
			name: "Johanna",
			img:
				"https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg",
		},
		{
			id: 5,
			name: "Johnnyahoo",
			img:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfXsTrzHR5VZ8bHq3vswX-rDBZdk1jA6Z9g&usqp=CAU",
		},
	],
	messages: [
		{ id: 1, message: "Hi hi hi" },
		{ id: 2, message: "How is your IT-kamasutra?" },
		{ id: 3, message: "How are you doing?" },
	],
	newMessage: "",
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			return {
				...state,
				messages: [
					...state.messages,
					{ id: 4, message: state.newMessage },
				],
				newMessage: "",
			};
		case UPDATE_MESSAGE_TEXT:
			return {
				...state,
				newMessage: action.text,
			};
		default:
			return state;
	}
};

export const addMessage = () => ({ type: "ADD-MESSAGE" });

export const updateNewMessage = (value) => ({
	type: "UPDATE-MESSAGE-TEXT",
	text: value,
});

export default dialogsReducer;
