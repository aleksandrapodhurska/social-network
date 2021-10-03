import mongoose from "mongoose";

const Message = mongoose.Schema({
	sender: { type: String, required: true },
	receiver: { type: String, required: true },
	content: { type: String, required: true },
	selectedFile: { type: String },
	starred: { type: Boolean, default: false },
	createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("Message", Message);
