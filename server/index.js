import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/message.js";

const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/", router);

const PORT = process.env.PORT || 5000;
const DB_URL =
	"mongodb+srv://aPodh:836KDqhMFmZcUnz@cluster0.bcyu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const startApp = async () => {
	try {
		await mongoose.connect(
			DB_URL,
			{ useNewUrlParser: true },
			{ useUnifiedTopology: true }
		);
		app.listen(PORT, () =>
			console.log(`SERVER IS RUNNING ON ${PORT} PORT`)
		);
	} catch (error) {
		console.log(error.message);
	}
};

startApp();

app.get("/", (req, res) => {
	res.status(200).json("server is working");
});
