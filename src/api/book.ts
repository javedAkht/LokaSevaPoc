import express from "express"
import BookService from "../services/book";
export const bookRouter = express.Router();
bookRouter.post("/CreateBook", async (req, res) => {
    const result = await BookService.add(req.body);
    res.json({
        status: result
    })
})