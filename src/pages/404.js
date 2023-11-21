import MetaHead from '@/components/MetaHead';

export default function Page404() {
    return (
        <section className='flex items-center justify-center h-screen text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500'>
            <MetaHead
                title='404 Not Found'
                description='Page not found. The requested page could not be found.'
                image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
                url={`${process.env.NEXT_PUBLIC_HOST_NAME}/404`}
            />
            <div className='text-center'>
                <h1 className='mb-4 text-2xl font-bold text-red-500'>404 Not Found</h1>
                <div className='flex flex-col items-center'>
                    <svg
                        className='w-8 h-8 mb-4 text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='currentColor'
                        viewBox='0 0 18 14'>
                        <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
                    </svg>
                    <blockquote className='text-xl italic font-semibold text-gray-900 dark:text-white'>
                        <p>Halaman yang dicari tidak ditemukan</p>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
