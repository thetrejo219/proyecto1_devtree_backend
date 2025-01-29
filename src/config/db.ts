import colors from 'colors'
import mongoose from "mongoose";

export const connectDB=async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(colors.cyan.bold(`MongoDB Conectado en ${url}`))
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message))
        process.exit(1)
    }
}
