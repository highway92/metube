import app from "./app";
import "./db";
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";

dotenv.config();

const PORT = process.env.PORT;
const handleListening = () =>
  console.log(`👌 Listening:http://localhost:${PORT}`);

app.listen(PORT, handleListening);
