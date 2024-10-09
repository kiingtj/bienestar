import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Hidratate = () => {
    return (
        <div className="bg-gray-100">
            <Nav />
            <main className="max-w-screen-lg mx-auto p-6">
                <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">Hidratación: ¡Bebe para tu Salud!</h1>
                <p className="text-gray-800 mb-8 text-center">
                    La hidratación es fundamental para mantener un cuerpo sano y en funcionamiento. Aquí aprenderás por qué es importante y cómo asegurarte de que estás bebiendo suficiente agua.
                </p>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">¿Por qué es importante la hidratación?</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li className="text-gray-800 mb-2">Mantiene el equilibrio de fluidos en el cuerpo.</li>
                        <li className="text-gray-800 mb-2">Ayuda en la regulación de la temperatura corporal.</li>
                        <li className="text-gray-800 mb-2">Contribuye a la salud de la piel.</li>
                        <li className="text-gray-800 mb-2">Facilita la digestión y previene el estreñimiento.</li>
                        <li className="text-gray-800 mb-2">Es esencial para el funcionamiento adecuado de los riñones.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Consejos para mantenerte hidratado</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">1. Bebe agua regularmente</h3>
                            <p className="text-gray-600">Establece recordatorios en tu teléfono para beber agua cada hora.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">2. Come alimentos ricos en agua</h3>
                            <p className="text-gray-600">Incorpora frutas y verduras como sandía, pepino y naranjas en tu dieta.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">3. Lleva contigo una botella de agua</h3>
                            <p className="text-gray-600">Tener agua a la mano te recordará beber con más frecuencia.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">4. Establece una meta diaria</h3>
                            <p className="text-gray-600">Intenta beber al menos 2 litros de agua al día.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Preguntas Frecuentes</h2>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿Cuánta agua debo beber al día?</h3>
                        <p className="text-gray-600">Se recomienda beber al menos 2 litros de agua al día, pero la cantidad puede variar según tu actividad física y clima.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿Qué pasa si no bebo suficiente agua?</h3>
                        <p className="text-gray-600">La deshidratación puede causar fatiga, dolor de cabeza, mareos y confusión. Es importante mantenerte hidratado.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿Es posible beber demasiada agua?</h3>
                        <p className="text-gray-600">Sí, la hiponatremia ocurre cuando hay un exceso de agua en el cuerpo que diluye el sodio en la sangre, lo cual puede ser peligroso.</p>
                    </div>
                </section>

                <p className="text-gray-800 mb-4 text-center">
                    Para más consejos sobre salud y bienestar, visita nuestras secciones de <Link to="/consejos" className="text-green-600 underline">Consejos</Link> y <Link to="/dietas" className="text-green-600 underline">Dietas</Link>.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Hidratate;
