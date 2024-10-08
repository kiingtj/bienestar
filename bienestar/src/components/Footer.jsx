import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer class="bg-green-50 border-t border-green-300 shadow-md">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/images/logo/logo.png" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap ">DietasBalance</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-green-300 sm:mx-auto lg:my-8" />
                <span class="block text-sm sm:text-center ">© 2024 <a href="https://flowbite.com/" class="hover:underline">DietasBalance</a>. Todos los derechos reservados.</span>
            </div>
        </footer>
    );
};

export default Footer;
