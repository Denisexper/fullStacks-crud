import mongoose from "mongoose";

let urlGlbal = "mongodb+srv://denis:jJghQNn20C2YVGlj@ddb.oljshlt.mongodb.net/UsersCrud?retryWrites=true&w=majority&appName=DDB"

const connectDB = async () => {
    try {
        const db = await mongoose.connect(urlGlbal)
        console.log("connected to data base")
    } catch (error) {
        console.error(error)
    }
}

export default connectDB;