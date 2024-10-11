import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
    return (
        <div className="bg-gray-100 font-helvetica">
            <Helmet>
                <title>Dietas Balance - Politica de Privacidad.</title>
                <meta name="description" content="Nos importa tu privacidad." />
            </Helmet>
            <Nav />
            <div className="container mx-auto p-8">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">Política de Privacidad</h1>

                <p className="text-lg text-gray-700 mb-4">
                    En <strong>DietasBalance</strong>, valoramos tu privacidad y estamos comprometidos a proteger tu
                    información personal. Esta política de privacidad describe qué información recopilamos y cómo la
                    utilizamos.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Información que Recopilamos</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Recopilamos información personal que nos proporcionas directamente, como tu nombre, apellido, correo
                    electrónico y cualquier mensaje que nos envíes a través de nuestro formulario de contacto.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso de la Información</h2>
                <p className="text-lg text-gray-700 mb-4">
                    La información que recopilamos se utiliza únicamente para responder a tus consultas, proporcionarte
                    servicios relacionados con nuestros productos y mejorar la experiencia en nuestro sitio web.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Compartir la Información</h2>
                <p className="text-lg text-gray-700 mb-4">
                    No compartimos tu información personal con terceros, excepto cuando sea necesario para cumplir con
                    la ley o en respuesta a procesos legales válidos.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Seguridad</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Nos tomamos muy en serio la seguridad de tu información personal y tomamos medidas razonables para
                    protegerla de accesos no autorizados, divulgación, alteración o destrucción.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Nuestro sitio utiliza cookies para mejorar tu experiencia y proporcionar funcionalidades personalizadas.
                    Puedes desactivar las cookies en la configuración de tu navegador, aunque esto puede afectar la
                    funcionalidad del sitio.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Enlaces a Otros Sitios</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas
                    de privacidad ni del contenido de esos sitios externos.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cambios a Esta Política de Privacidad</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te
                    notificaremos cualquier cambio publicando la nueva política en esta página.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contacto</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Si tienes alguna pregunta sobre esta política de privacidad, no dudes en contactarnos a través de
                    nuestro formulario o enviando un correo electrónico a <a href="mailto:dietasbalance@gmail.com" className="text-green-600 underline">dietasbalance@gmail.com</a>.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
