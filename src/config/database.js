import mongoose from "mongoose";

export const connect = async () => {
    await mongoose.connect("mongodb+srv://arkashish:txdqKV1kgXP7DcMb@cluster0.vruaqn2.mongodb.net/")
}
