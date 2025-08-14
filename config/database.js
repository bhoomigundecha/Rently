import mongoose from 'mongoose'

let connected = false 

const connectDB = async () => {
    mongoose.set('strictQuery', true);
    // if db is already connected, dont connect again 

    if(connected){
        console.log('DB is already connected')
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true;
        console.log('DB connected')
    }catch(err){
        console.log(err)
    }
}

export default connectDB