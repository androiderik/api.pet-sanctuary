import express from "express";
import { myrouter } from "./src/routes/index";
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables from .env file 

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello from Dog and Cat Sanctuary server!");
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});


app.use('/', myrouter());