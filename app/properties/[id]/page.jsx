'use client';
import '@/assets/styles/global.css';

import Link from 'next/link';
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation';

const PropertiesPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    return (
        <div>
            <button onClick={() => router.push('/')} className="bg-blue-500 p-2">
                Go Home
            </button>
        </div>
    );
}

export default PropertiesPage;
