import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
	_state: {
		dialogsPage: {
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
			newMessage: "I am a new message",
		},
		profilePage: {
			postData: [
				{ id: 1, message: "Hi, how are you?", likesCount: 23 },
				{ id: 2, message: "It's my first post", likesCount: 2 },
			],
			newPostText: "",
		},
		sidebar: {
			friends: [
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
			],
		},
	},
	_callSubscriber() {
		console.log("state changed");
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		// {type: 'someaction'}
		this._state.profilePage = profileReducer(
			this._state.profilePage,
			action
		);
		this._state.dialogsPage = dialogsReducer(
			this._state.dialogsPage,
			action
		);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	},
};

export default store;

// let rerender = () => {
//     console.log('state changed')
// }

// let state = {
//     dialogsPage: {
//         dialogs: [
//             { id: 1, name: "Max", img: "https://st3.depositphotos.com/1007168/14190/v/1600/depositphotos_141908684-stock-illustration-burger-cartoon-character.jpg" },
//             { id: 2, name: "Dmytry", img: "https://i.pinimg.com/originals/bb/9c/65/bb9c6586d746056d8f8d09c489eddb2c.jpg", },
//             { id: 3, name: "Alex", img: "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYmxvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"},
//             { id: 4, name: "Johanna", img: "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg", },
//             { id: 5, name: "Johnnyahoo", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfXsTrzHR5VZ8bHq3vswX-rDBZdk1jA6Z9g&usqp=CAU", },
//         ],
//         messages: [
//             { id: 1, message: "Hi hi hi" },
//             { id: 2, message: "How is your IT-kamasutra?" },
//             { id: 3, message: "How are you doing?" },
//         ],
//         newMessage: 'I am a new message'
//     },
//     profilePage: {
//         postData: [
//             { id: 1, message: "Hi, how are you?", likesCount: 23 },
//             { id: 2, message: "It's my first post", likesCount: 2 },
//         ],
//         newPostText: ""
//     },
//     sidebar: {
//         friends: [
//             { id: 1, name: "Max", img: "https://st3.depositphotos.com/1007168/14190/v/1600/depositphotos_141908684-stock-illustration-burger-cartoon-character.jpg" },
//             { id: 2, name: "Dmytry", img: "https://i.pinimg.com/originals/bb/9c/65/bb9c6586d746056d8f8d09c489eddb2c.jpg", },
//             { id: 3, name: "Alex", img: "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYmxvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"},
//         ],
//     }
// };

// export const updateNewPostText = (text) => {
//     state.profilePage.newPostText = text;
//     rerender(state);
// }

// export const addPost = () => {
//     let newPost = {
//         id: 4,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.postData.push(newPost);
//     state.profilePage.newPostText = '';
//     rerender(state);
// }

// export const updateMessageText = (text) => {
//     state.dialogsPage.newMessage = text;
//     rerender(state);
// }

// export const addMessage = () => {
//     let newMessage = {
//         id: 4,
//         message: state.dialogsPage.newMessage,
//     };
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessage = '';
//     rerender(state);
// }

// export const subscribe = (observer) => {
//     rerender = observer
// }

// export default state;

// if (action.type === ADD_POST) {
//     let newPost = {
//         id: 4,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     }
//     this._state.profilePage.postData.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     this._state.profilePage.newPostText = action.text;
//     this._callSubscriber(this._state);
// } else if (action.type === ADD_MESSAGE) {
//     let newMessage = {
//         id: 4,
//         message: this._state.dialogsPage.newMessage,
//     };
//     this._state.dialogsPage.messages.push(newMessage);
//     this._state.dialogsPage.newMessage = '';
//     this._callSubscriber(this._state);
// } else if (action.type === UPDATE_MESSAGE_TEXT) {
//     this._state.dialogsPage.newMessage = action.text;
//     this._callSubscriber(this._state);
// }

// updateNewPostText(text) {
//     this._state.profilePage.newPostText = text;
//     this._callSubscriber(this._state);
// },
// addPost() {
//     let newPost = {
//         id: 4,
//         message: this._state.profilePage.newPostText,
//         likesCount: 0
//     }
//     this._state.profilePage.postData.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
// },
// updateMessageText(text) {
//     this._state.dialogsPage.newMessage = text;
//     this._callSubscriber(this._state);
// },
// addMessage() {
//     let newMessage = {
//         id: 4,
//         message: this._state.dialogsPage.newMessage,
//     };
//     this._state.dialogsPage.messages.push(newMessage);
//     this._state.dialogsPage.newMessage = '';
//     this._callSubscriber(this._state);
// },

let a = {
	name: "sasha",
	age: 28,
	love: {
		name: "max",
		age: 28,
		do() {
			console.log(this.name);
		},
	},
};

// for (const key of Object.keys(a)) {
//     console.log(key)
// }

// for (const props of Object.entries(a)){
//     console.log(props)
// }

for (const key of Object.keys(a)) {
	if (typeof key == "object") {
		for (const key of Object.keys(a)) {
			let value = a[key];
			console.log(key + ":" + value);
		}
	}
	let value = a[key];
	console.log(key + ":" + value);
}

// let b = JSON.parse(JSON.stringify(a));
// console.log(b)
// b.love.do();

// let b = a;
// console.log(a === b);
// b.name = 'klava';
// console.log(a, b);
// let c = {...a};

// c.love = {...a.love};
// c.love.name = 'paul';
// console.log(a, c);
// c.love.do();
