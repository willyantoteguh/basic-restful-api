import express from "express";
import mongoose from "mongoose";
import route from "./routes/index.js"
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


const app = express();

// mongoose.connect("mongodb://localhost:27017/node-restful-db", { useNewUrlParser: true, useUnifiedTopology: true },);
mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log("Connected to Cloud Database");
    }
);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));

app.use(cors());
app.use(express.json());
app.use('/product', route);

app.listen(8080, () => console.log('Server Running at Port: 8080'));