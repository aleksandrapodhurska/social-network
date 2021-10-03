import Message from "../models/message.js";

class MessageService {
	async create(message) {
		const createdMessage = await Message.create(message);
		return createdMessage;
	}
	async getAll() {
		const messages = await Message.find();
		return messages;
	}
	async getMessage(id) {
		if (!id) {
			throw new Error("Id was not passsed");
		}
		const message = await Message.findById(id);
		return message;
	}
	async updateMessage(message) {
		console.log(message);
		if (!message._id) {
			res.status(400).json("Id was not passsed");
		}
		const updatedMessage = await Message.findByIdAndUpdate(
			message._id,
			message,
			{ new: true }
		);
		return updatedMessage;
	}
	async deleteMessage(id) {
		if (!id) {
			res.status(400).json("Id was not passsed");
		}
		const message = await Message.findByIdAndDelete(id);
		const allMessages = await Message.find();
		return allMessages;
	}
}

export default new MessageService();
