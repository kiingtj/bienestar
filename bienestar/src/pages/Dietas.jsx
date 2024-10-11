import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Dietas = () => {
    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>Dietas Balance - 6 Dietas para comenzar a cuidar tu salud.</title>
                <meta name="description" content="Bienvenido a la página de dietas, donde encontrarás 6 tipos de dietas, con todos sus alimentos recomendables y los que debes evitar." />
            </Helmet>
            <Nav />

            <main className="max-w-7xl mx-auto py-10 px-4">
                <section className="text-center py-10">
                    <h1 className="md:text-5xl text-4xl font-bold text-green-700 mb-4">6 Tipos de Dietas Saludables</h1>
                    <div className='text-justify md:text-center md:mt-0 mt-8'>
                        <p className="md:text-xl text-lg text-green-800">
                            Explora las dietas más populares y efectivas para mejorar tu salud, perder peso o simplemente mantener un estilo de vida equilibrado.
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:mt-8">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/assets/images/dietas/mediterranea.jpg" alt="Dieta Mediterránea" className="h-40 w-full object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">Dieta Mediterránea</h3>
                        <p className="text-green-800 mb-4">
                            Basada en alimentos frescos y naturales, esta dieta incluye frutas, verduras, pescado, aceite de oliva, y cereales integrales. Ayuda a mejorar la salud cardiovascular.
                        </p>
                        <Link to="/dietas/mediterranea">
                            <p className="text-green-600 font-semibold">Más detalles &rarr;</p>
                        </Link>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/assets/images/dietas/keto.jpg" alt="Dieta Keto" className="h-40 w-full object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">Dieta Keto</h3>
                        <p className="text-green-800 mb-4">
                            Esta dieta es alta en grasas y baja en carbohidratos. Pone al cuerpo en un estado de cetosis, ideal para la quema de grasas y pérdida de peso rápida.
                        </p>
                        <Link to="/dietas/keto">
                            <p className="text-green-600 font-semibold">Más detalles &rarr;</p>
                        </Link>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/assets/images/dietas/vegana.jpg" alt="Dieta Vegana" className="h-40 w-full object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">Dieta Vegana</h3>
                        <p className="text-green-800 mb-4">
                            Esta dieta excluye todos los productos de origen animal, centrándose en alimentos de origen vegetal. Es rica en fibra, vitaminas y antioxidantes.
                        </p>
                        <Link to="/dietas/vegana">
                            <p className="text-green-600 font-semibold">Más detalles &rarr;</p>
                        </Link>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/assets/images/dietas/paleo.jpg" alt="Dieta Paleo" className="h-40 w-full object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">Dieta Paleo</h3>
                        <p className="text-green-800 mb-4">
                            Inspirada en la alimentación de los primeros humanos, esta dieta se basa en carnes magras, pescados, frutas, verduras y frutos secos.
                        </p>
                        <Link to="/dietas/paleo">
                            <p className="text-green-600 font-semibold">Más detalles &rarr;</p>
                        </Link>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/assets/images/dietas/dash.jpg" alt="Dieta DASH" className="h-40 w-full object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">Dieta DASH</h3>
                        <p className="text-green-800 mb-4">
                            Diseñada para reducir la presión arterial, esta dieta incluye frutas, verduras, cereales integrales y productos lácteos bajos en grasa.
                        </p>
                        <Link to="/dietas/dash">
                            <p className="text-green-600 font-semibold">Más detalles &rarr;</p>
                        </Link>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <img src="/assets/images/dietas/flexitariana.jpg" alt="Dieta Flexitariana" className="h-40 w-full object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-semibold text-green-700 mb-2">Dieta Flexitariana</h3>
                        <p className="text-green-800 mb-4">
                            Una dieta mayoritariamente basada en vegetales, pero que permite el consumo ocasional de carne y productos animales.
                        </p>
                        <Link to="/dietas/flexitariana">
                            <p className="text-green-600 font-semibold">Más detalles &rarr;</p>
                        </Link>
                    </div>
                </section>

                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Beneficios de una Dieta Equilibrada</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Mejora la Salud Cardiovascular</h3>
                            <p className="text-green-800">
                                Seguir una dieta rica en frutas, verduras y grasas saludables puede reducir el riesgo de enfermedades cardíacas y mejorar la circulación.
                            </p>
                        </div>

                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Controla el Peso</h3>
                            <p className="text-green-800">
                                Mantener una dieta equilibrada ayuda a mantener un peso saludable y reduce el riesgo de obesidad.
                            </p>
                        </div>

                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Mejora la Energía</h3>
                            <p className="text-green-800">
                                Los alimentos ricos en nutrientes proporcionan energía sostenida durante todo el día, mejorando el rendimiento físico y mental.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="md:py-16">
                    <h2 className="md:text-4xl text-2xl font-bold text-green-700 text-center mb-8">Consejos para Mantener una Alimentación Saludable</h2>
                    <ul className="list-disc list-inside max-w-4xl mx-auto text-left text-green-800 text-lg">
                        <li className="mb-4">
                            <strong>Consume alimentos frescos y naturales:</strong> Evita los alimentos procesados y prioriza alimentos integrales como frutas, verduras y granos.
                        </li>
                        <li className="mb-4">
                            <strong>Bebe suficiente agua:</strong> Mantén tu cuerpo hidratado bebiendo al menos 8 vasos de agua al día.
                        </li>
                        <li className="mb-4">
                            <strong>Controla las porciones:</strong> No se trata solo de lo que comes, sino también de cuánto. Aprende a medir tus porciones.
                        </li>
                        <li className="mb-4">
                            <strong>Haz comidas regulares:</strong> No te saltes las comidas y asegúrate de que sean equilibradas en nutrientes.
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Dietas;
