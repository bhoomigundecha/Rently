'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';


const PropertyPage = () => {
    const { id } = useParams();

    const [property, setProperty] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchProperty = async () => {
            if(!id) return;
            try{    
                const property = await fetchProperty(id);
                setProperty(property);

            }catch(err){
                console.error(err);
                console.error("Error catching prop : ", err);
            }finally{
                setLoading(false);
            }
        }

        if(property===null){
            fetchProperty(id);
        }
    }, [id, property]);
    
    return (
        <>

        </>
    )
}

export default PropertiesPage;
