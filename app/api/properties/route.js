// here we need to fetch properties 
// creating handler 

// access property that wasnt there : 404 

import connectDB from '@/config/database';

export const GET = async(request) =>{
    try{
        await connectDB();

        return new Response(JSON.stringify({message : 'Hello world'}), {status : 200});
    }catch(err){
        return new Response('Something went wrong', {statuc : 500});
    }
}