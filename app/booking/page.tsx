'use client';

import dynamic from 'next/dynamic';

// Dynamically import the client-only component with SSR disabled
const BookingPageClient = dynamic(() => import('./../../components/BookingClient'), { ssr: false });

const BookingPage = () => {
    return (
        <div>
            <BookingPageClient />
        </div>
    );
};

export default BookingPage;
