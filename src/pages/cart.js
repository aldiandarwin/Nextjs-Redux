import Image from 'next/image';
import { useEffect, useState } from 'react';
// import { CartContext } from "@/contexts/CartContext";

import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '@/store/cartSlice';

export default function Cart() {
    const [summary, setSummary] = useState(0);
    // const { cart, onDeleteCart } = useContext(CartContext);

    const dataCartDariRedux = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    const total = () => {
        let total = 0;
        dataCartDariRedux.forEach((value) => {
            total += value.price * value.quantity;
        });
        setSummary(total);
    };

    useEffect(() => {
        total();
    }, [dataCartDariRedux, total]);

    return (
        <section>
            <h1 className='mb-5 text-2xl font-bold'>Cart</h1>
            <div className='flex gap-5'>
                <div className='w-full'>
                    {dataCartDariRedux.map((value) => (
                        <div
                            key={value.id}
                            className='flex flex-col items-center p-5 mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 '>
                            <div className='w-[100px] h-[100px] bg-red-50 flex-none'>
                                <Image
                                    className='object-cover w-full h-[100px] bg-red-200'
                                    src={value.image}
                                    alt={value.title}
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className='flex flex-col justify-between p-4 leading-normal'>
                                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                                    ${value.title}
                                </h5>
                                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>${value.price}</p>
                                <div>Quantity: {value.quantity}</div>
                            </div>
                            <button
                                className='p-2 ml-auto text-white bg-red-500 '
                                onClick={() => dispatch(deleteCart(value.id))}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <div className='w-[300px]'>
                    <div className='p-5 bg-blue-500 rounded-xl '>
                        <h2 className='mb-5'>Total Belanja</h2>
                        <p className='my-3'>${summary}</p>
                        <button className='w-full p-3 bg-amber-300 rounded-xl'>Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
