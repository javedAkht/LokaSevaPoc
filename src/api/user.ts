import express from "express";
import UserService from "../services/user";
export const userRouter = express.Router();
userRouter.post("/CreateUser", async (req, res) => {
    const result = await UserService.add(req.body);
    res.json({
        status: result
    })
})