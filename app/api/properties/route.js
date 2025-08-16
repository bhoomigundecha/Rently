import connectDB from "@/config/database";
import Property from "@/models/Property";
export const GET = async(request) => {

  try{
    await connectDB();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), {
      status : 200,
    });

  }catch(err){
    console.log(err);
    return new Response('Error', {status : 500});
  }
} 