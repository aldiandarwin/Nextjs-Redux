import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

function ActiveLink({ children, href, className, onHandleMobileMenu }) {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        onHandleMobileMenu();
        router.push(href);
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}

export default function Header() {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

    const cart = useSelector((state) => state.cart.value);
    const { isLogin, value } = useSelector((state) => state.auth);

    const onHandleMobileMenu = () => setIsShowMobileMenu(!isShowMobileMenu);

    return (
        <nav className='fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 dark:border-gray-600 mx-auto'>
            <div className='flex flex-wrap items-end justify-between max-w-screen-xl p-4 '>
                <ActiveLink
                    href='/'
                    className='flex items-center'
                    onHandleMobileMenu={() => setIsShowMobileMenu(false)}>
                    <img
                        src='https://flowbite.com/docs/images/logo.svg'
                        className='h-8'
                        alt='Flowbite Logo'
                        width={50}
                        height={50}
                    />

                    <span className='self-center text-2xl p-1 font-semibold rounded-sm whitespace-nowrap dark:text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500'>
                        Flowcommerce
                    </span>
                </ActiveLink>

                <div className='flex md:order-2  '>
                    <Link
                        href='/cart'
                        type='button'
                        className='mr-3  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-2 justify-between align-middle'>
                        Cart ({cart.length})
                    </Link>

                    {isLogin && (
                        <Link href='/dashboard/profile'>
                            <img
                                class='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mx-3'
                                src={value.image}
                                alt='Bordered avatar'
                            />
                        </Link>
                    )}

                    <button
                        onClick={onHandleMobileMenu}
                        type='button'
                        className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='drawer-navigation'
                        aria-expanded='false'>
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 17 14'>
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 1h15M1 7h15M1 13h15'
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`items-center justify-between  ${
                        isShowMobileMenu ? '' : 'hidden'
                    } w-full md:flex md:w-auto md:order-1`}>
                    <ul className='flex flex-col p-4 mt-4 ml-0 mr-4 font-semibold border border-gray-100 rounded-sm bg-gray-5 md:p-2 md:flex-row md:space-x-4 md:mt-2 md:border-0 md:via-cyan-500 bg-gradient-to-r from-cyan-200 via-cyan-900 to-blue-500 justify-between items-center'>
                        <li>
                            <ActiveLink
                                href='/'
                                className='block py-2 pl-3 pr-4 text-gray-900 rounded bg-white-500 md:bg-transparent md:p-0 md:dark:text-blue-500 md:hover:text-blue-700 '
                                onHandleMobileMenu={onHandleMobileMenu}>
                                Home
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink
                                href='/about'
                                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                onHandleMobileMenu={onHandleMobileMenu}>
                                About
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink
                                href='/contact-us'
                                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                onHandleMobileMenu={onHandleMobileMenu}>
                                Contact
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink
                                href='/login'
                                className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                onHandleMobileMenu={onHandleMobileMenu}>
                                Login
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
