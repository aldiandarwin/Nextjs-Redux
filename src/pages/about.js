import MetaHead from '@/components/MetaHead';

export default function About() {
    return (
        <section className='p-5 text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500'>
            <MetaHead
                title='About Us'
                description='Learn more about our commitment to accessible and enjoyable online shopping.'
                image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
                url={`${process.env.NEXT_PUBLIC_HOST_NAME}/about`}
            />
            <h1 className='mb-4 text-2xl font-bold'>Our Commitment to Accessible Shopping</h1>
            <p className='py-2 text-sm'>
                At FlowCommerce, we are dedicated to providing an inclusive and enjoyable online shopping experience for
                everyone. We believe that the digital world should be accessible to all users, regardless of their
                abilities or disabilities.
            </p>
            <p className='py-2 text-sm'>
                Our commitment to accessibility goes beyond compliance; its about creating an environment where every
                user can navigate our platform comfortably and make informed choices. We understand that each user is
                unique, and we strive to meet diverse needs.
            </p>
            <p className='py-2 text-sm'>
                Whether you are using assistive technologies or have specific preferences, our user-friendly interface
                and thoughtful design aim to make your online shopping journey seamless and enjoyable.
            </p>
            <h2 className='mt-4 text-xl font-bold'>Our Values</h2>
            <p className='py-2 text-sm'>
                <strong>Inclusivity:</strong> We embrace diversity and design our platform to be inclusive, ensuring
                that everyone can participate in the online shopping experience.
            </p>
            <p className='py-2 text-sm'>
                <strong>User-Friendly Design:</strong> Our website features an intuitive and easy-to-navigate design,
                making it accessible to users with varying levels of digital proficiency.
            </p>
            <p className='py-2 text-sm'>
                <strong>Continuous Improvement:</strong> We are committed to continuously improving our platforms
                accessibility, listening to user feedback, and implementing enhancements that benefit the entire
                community.
            </p>
            <h2 className='mt-4 text-xl font-bold'>Get Involved</h2>
            <p className='py-2 text-sm'>
                Your feedback is invaluable to us. If you have suggestions or encounter any accessibility challenges,
                please{' '}
                <a href='/contact' title='Contact Us'>
                    contact us
                </a>
                . Together, lets build a more accessible and inclusive online shopping experience for everyone.
            </p>
            <p className='py-2 text-sm'>
                Thank you for choosing FlowCommerce. We are here to make your online shopping journey enjoyable and
                accessible.
            </p>
        </section>
    );
}
