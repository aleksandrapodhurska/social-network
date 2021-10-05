import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "http://localhost:8000/",
});

const usersAPI = {
	getUsers(selectedPage = 1, pageSize = 5) {
		return instance
			.get(`users?_page=${selectedPage}&_limit=${pageSize}`)
			.then((res) => {
				return res.data;
			});
	},
	getTotalCount() {
		return instance.get(`totalCount`).then((res) => {
			return res.data;
		});
	},
	getUsersForNewPage(currentPage = 1, pageSize = 5) {
		return instance
			.get(`users?_page=${currentPage}&_limit=${pageSize}`)
			.then((res) => {
				return res.data;
			});
	},
	toggleFollowUser(userId, reqBody) {
		return instance.put(`users/${userId}`, reqBody).then((res) => {
			return res.data;
		});
	},
};

export default usersAPI;
