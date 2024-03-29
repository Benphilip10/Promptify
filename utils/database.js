import  mongoose from "mongoose";

let isConnected = false; //tracks the connection to the db

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected){
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share-prompts",
            useNewUrlParser: true,
            useUnifiedTopology : true,
        })

        isConnected = true
        console.log("MongoDB is connected");
    }

    catch(error) {
        console.log(error);
    }
}