import MetaHead from '@/components/MetaHead';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/authSlice';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // ... existing code ...

        setIsLoading(false);

        router.push('/');

        // username: 'kminchelle',
        // password: '0lelplR',
    };

    return (
        <section className='p-5 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500'>
            <MetaHead
                title='Login'
                description='This is the Login page'
                image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
                url={`${process.env.NEXT_PUBLIC_HOST_NAME}/login`}
            />
            <section className='max-w-screen-md p-8 mx-auto bg-white rounded-lg dark:bg-gray-900'>
                <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-white'>
                    Login
                </h2>
                <form onSubmit={onSubmit}>
                    <div className='mb-6'>
                        <label
                            htmlFor='username'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Username
                        </label>
                        <input
                            type='username'
                            id='username'
                            name='username'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor='password'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Your password
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        disabled={isLoading}>
                        {isLoading ? 'Logging In ..' : 'Submit'}
                    </button>
                </form>
            </section>
        </section>
    );
}
