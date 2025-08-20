import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/authOptions'

export const getSessionUser = async() => {
    const session = await getServerSession(authOptions);
    try{
        if(!session || !session.user){
            return null;
        }
        return{
            user : session.user,
            userId : session.user.id
        }
    }
    catch(err){
        console.log(err);
        return null
    }
    

    

}