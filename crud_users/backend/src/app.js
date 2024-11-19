import express from "express"
import connectDB from "./confing/dbconnection.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors"
const app = express();


app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
connectDB();

app.use("/api", userRoutes);


