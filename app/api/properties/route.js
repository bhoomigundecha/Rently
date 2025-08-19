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

export const POST = async(request) => {


  try{
    const FormData = await request.formData();

    // Access all values from amenties and images 

    const amenties = FormData.getAll('amenties')
    const images = FormData.getAll('images').filter((image)=>image.name!=='');

    // Create propertyData object for the database 

    const propertyData = {
      type : FormData.get('type'),
      name : FormData.get('name'),
      description : FormData.get('description'),
      location : {
        street : FormData.get('location.street'),
        city : FormData.get('location.city'),
        state : FormData.get('location.state'),
        zipcode : FormData.get('location.zipcode'),
      },
      beds : FormData.get('beds'),
      baths : FormData.get('baths'),
      square_feet : FormData.get('square_feet'),
      amenties, 
      rates : {
        weekly : FormData.get('location.weekly'),
        monthly : FormData.get('location.monthly'),
        nightly : FormData.get('location.nightly'),
      },
      seller_info : {
        name : FormData.get('seller_info.name'),
        email : FormData.get('seller_info.email'),
        phone : FormData.get('seller_info.phone'),
      },
      images
    }

    console.log(propertyData)

    return new Response(JSON.stringify({message : 'Success'}), {status : 200})
  }catch(err){
    return new Response(JSON.stringify({message : 'Failed to add property'}), {status : 500})

  }
}