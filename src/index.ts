import express from "express";
import cors from "cors";
import "./models/index";
import { indexRouter } from "./api";
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());
app.use("/route", indexRouter);


app.listen(process.env.PORT, () => {
  console.log(`Listening...${process.env.PORT}`);
});