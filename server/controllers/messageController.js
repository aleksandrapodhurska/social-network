import Message from "../models/message.js";
import MessageService from "../service/MessageService.js";

class MessagesController {
	async create(req, res) {
		try {
			const message = await MessageService.create(req.body);
			res.json(message);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getAll(req, res) {
		try {
			const message = await MessageService.getAll();
			res.json(message);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async getMessage(req, res) {
		try {
			const message = await MessageService.getMessage(req.params.id);
			res.json(message);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async updateMessage(req, res) {
		try {
			const updatedMessage = await MessageService.updateMessage(req.body);
			res.json(updatedMessage);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	async deleteMessage(req, res) {
		try {
			const message = await MessageService.deleteMessage(req.params.id);
			res.json(message);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}

export default new MessagesController();
