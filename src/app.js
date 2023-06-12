import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./config/database.js";
db.connect();

import userRoutes from "./routes/userRoutes";
app.use("/users", userRoutes);

export default app;
