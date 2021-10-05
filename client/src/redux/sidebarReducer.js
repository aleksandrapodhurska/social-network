let initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
	return state;
};

export default sidebarReducer;
