import express from "express";
import cors from "cors";
import { userRouter } from "./api/user";
import "./models/index";
import { bookRouter } from "./api/book";
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());
app.use("/user", userRouter);
app.use("/book", bookRouter)


app.listen(process.env.PORT, () => {
  console.log(`Listening...${process.env.PORT}`);
});