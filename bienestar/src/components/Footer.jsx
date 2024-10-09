import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer class="bg-green-50 border-t border-green-300 shadow-md">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://dietasbalance.vercel.app" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/assets/images/logo/logo.png" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap ">DietasBalance</span>
                    </a>
                    <a href="mailto:dietasbalance@gmail.com" className='bg-green-50 hover:underline'>dietasbalance@gmail.com</a>
                </div>
                <hr class="my-6 border-green-300 sm:mx-auto lg:my-8" />
                <span class="block md:text-sm text-xs sm:text-center ">© 2024 <Link to="/privacy"><a href="https://dietasbalance.vercel.app" class="hover:underline">DietasBalance</a></Link>. Todos los derechos reservados.</span>
            </div>
        </footer>
    );
};

export default Footer;
