import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet-async';
import AdSenseBanner from '../components/AdSenseBanner';

const Contacto = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        lastName: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_o2zzypf', // Reemplazar con tu ID de servicio
            'template_miq60sr', // Reemplazar con tu ID de plantilla
            {
                firstName: formData.firstName,
                email: formData.email,
                lastName: formData.lastName,
                message: formData.message,
                from_name: formData.email,
                to_name: "Marcos",
                reply_to: formData.email
            },
            'bsTJFXhXvuL9dP776' // Reemplazar con tu ID de usuario
        )
        .then(() => {
            alert('Mensaje enviado con éxito.');
            setFormData({
                firstName: '',
                email: '',
                lastName: '',
                message: ''
            });
        })
        .catch((error) => {
            console.error('Error al enviar el mensaje:', error);
            alert('Hubo un error al enviar tu mensaje. Intenta nuevamente.');
        });
    };

    return (
        <div className="bg-white">
            <Helmet>
                <title>DietasBalance - Contacto</title>
                <meta name="description" content="Contacta con nosotros para aportar información sobre tu dieta ideal y para ayudarte a mejorar tu salud." />
            </Helmet>
            <Nav />
            <div className="container mx-auto py-12 px-6 md:px-12">
                <h2 className="text-5xl font-bold text-center text-green-600 mb-8">Contacta con nosotros</h2>
                <form className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-green-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-green-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-green-500"
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-green-500"
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300">
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
                
            </div>
            <Footer />
        </div>
    );
};

export default Contacto;
