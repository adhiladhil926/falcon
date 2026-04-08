import express from "express";
import cors from "cors";
import uploadRoute from "./routes/uploadRoutes.js";
import contactRoute from "./routes/contactRoutes.js";
import dotenv from "dotenv"; 

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST"],
}));

app.use(express.json());
app.use("/api/upload", uploadRoute);
app.use("/api/contact", contactRoute);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
