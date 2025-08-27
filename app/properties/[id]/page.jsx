'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchProperty } from '@/utils/requests';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import { FaArrowLeft, FaBookmark, FaShare } from 'react-icons/fa';
import Link from 'next/link';
import PropertyDetails from '@/components/PropertyDetails';
import Spinner from '@/components/Spinner';
import PropertyImages from '@/components/PropertyImages';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyContactForm from '@/components/PropertyContactForm';

const PropertyPage = () => {
    const { id } = useParams();

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getProperty = async () => {
            if(!id) return;
            try{    
                const propertyData = await fetchProperty(id);
                setProperty(propertyData);

            }catch(err){
                console.error(err);
                console.error("Error catching prop : ", err);
            }finally{
                setLoading(false);
            }
        }

        if(property===null){
            getProperty();
        }
    }, [id, property]);

    if(!property && !loading){
        return(
            <h1 className='text-center text-2xl font-bold mt-10'>
                Property not found
            </h1>
        );
    }
    
    return (
        <>
            {loading && <Spinner loading={loading}/>}
            {!loading && property && (<>
                <PropertyHeaderImage image={property.images[0]}/>
            </>)}
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                    href="/properties"
                    className="text-blue-500 hover:text-blue-600 flex items-center"
                    >
                    <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Properties
                    </Link>
                </div>
            </section>

            <section className="bg-blue-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-[70%_30%] w-full gap-6">
                    
                    {!loading && property && 
                    <PropertyDetails property={property} />}

                   
                    <aside className="space-y-4">       
                        <BookmarkButton property={property} />

                        <ShareButtons property={property} />

                        <PropertyContactForm proeprty={property}/>


       
                    </aside>
                    </div>
                </div>
            </section>
            {!loading && property && (
                <PropertyImages images={property.images || []} />
            )}

        </>
    )
}

export default PropertyPage;
