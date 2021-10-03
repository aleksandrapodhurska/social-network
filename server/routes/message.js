import express from "express";
import MessagesController from "../controllers/messageController.js";

const router = express.Router(); //or new Router();

router.post("/messages", MessagesController.create);
router.get("/messages", MessagesController.getAll);
router.get("/messages/:id", MessagesController.getMessage);
router.put("/messages", MessagesController.updateMessage);
router.delete("/messages/:id", MessagesController.deleteMessage);

export default router;
