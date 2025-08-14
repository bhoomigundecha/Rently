'use client';
import '@/assets/styles/global.css';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
const PropertiesPage = () => {
    const router = useRouter();
    const { id } = useParams();
    return(
        <div>
            <button onClick={()=>router.push('/')} className='bg-blue-500 p-2'>Go Home {id}</button> 
        </div>
    )
}

export default PropertiesPage