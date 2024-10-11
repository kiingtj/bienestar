import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet-async';

const Dash = () => {
    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>Dietas Balance - Dieta Dash (hipertensión arterial).</title>
                <meta name="description" content="Con la dieta Dash podrás prevenir la hipertension arterial, y también podrás controlarla." />
            </Helmet>
            <Nav />

            <main className="max-w-7xl mx-auto py-10 px-4">
                {/* Encabezado */}
                <section className="text-center py-10">
                    <h1 className="text-5xl font-bold text-green-700 mb-4">Dieta DASH</h1>
                    <p className="text-xl text-green-800">
                        La dieta DASH está diseñada para ayudar a prevenir y controlar la hipertensión arterial. 
                        Se centra en alimentos saludables y equilibrados, promoviendo un estilo de vida más saludable.
                    </p>
                </section>

                {/* Introducción */}
                <section className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src="/assets/images/dietas/dash.jpg" alt="Dieta DASH" className="w-full h-64 object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-green-700 mb-4">¿Qué es la Dieta DASH?</h2>
                            <p className="text-green-800 text-lg">
                                La dieta DASH se centra en aumentar la ingesta de frutas, verduras, granos enteros, 
                                proteínas magras y productos lácteos bajos en grasa. Se recomienda reducir el consumo 
                                de sodio y alimentos procesados para mejorar la salud cardiovascular.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beneficios de la Dieta DASH */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Beneficios de la Dieta DASH</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Beneficio 1 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Control de la Hipertensión</h3>
                            <p className="text-green-800">
                                La dieta DASH ha demostrado ser eficaz para reducir la presión arterial y mejorar 
                                la salud cardiovascular.
                            </p>
                        </div>

                        {/* Beneficio 2 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Pérdida de Peso</h3>
                            <p className="text-green-800">
                                Al centrarse en alimentos ricos en nutrientes y bajos en calorías, la dieta puede 
                                ayudar en la pérdida de peso y el mantenimiento de un peso saludable.
                            </p>
                        </div>

                        {/* Beneficio 3 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Mejora de la Salud General</h3>
                            <p className="text-green-800">
                                Promover una dieta rica en frutas y verduras puede reducir el riesgo de enfermedades 
                                crónicas como diabetes y enfermedades cardíacas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Alimentos recomendados */}
                <section className="py-16">
                    <h2 className="text-4xl font-bold text-green-700 text-center mb-8">Alimentos Recomendados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Alimentos recomendados */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Alimentos Recomendados</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Frutas (manzanas, plátanos, fresas)</li>
                                <li>Verduras (espinacas, brócoli, zanahorias)</li>
                                <li>Granos enteros (quinoa, avena, arroz integral)</li>
                                <li>Proteínas magras (pollo, pavo, pescado)</li>
                                <li>Productos lácteos bajos en grasa (yogur, leche)</li>
                                <li>Frutos secos y semillas (almendras, nueces, chía)</li>
                            </ul>
                        </div>

                        {/* Alimentos a evitar */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Alimentos a Evitar</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Alimentos altos en sodio (snacks salados, comidas enlatadas)</li>
                                <li>Azúcares añadidos (bebidas azucaradas, dulces)</li>
                                <li>Grasas saturadas y trans (comida rápida, frituras)</li>
                                <li>Alcohol en exceso</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Consejos para seguir la dieta */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Consejos para Seguir la Dieta DASH</h2>
                    <ul className="list-disc list-inside max-w-4xl mx-auto text-left text-green-800 text-lg">
                        <li className="mb-4">
                            <strong>Controla tu ingesta de sodio:</strong> Intenta mantener tu consumo diario de sodio 
                            por debajo de 2300 mg o 1500 mg si tienes hipertensión.
                        </li>
                        <li className="mb-4">
                            <strong>Incorpora más frutas y verduras:</strong> Asegúrate de llenar la mitad de tu plato 
                            con estos alimentos en cada comida.
                        </li>
                        <li className="mb-4">
                            <strong>Elige granos enteros:</strong> Opta por productos integrales en lugar de refinados 
                            para obtener más nutrientes y fibra.
                        </li>
                        <li className="mb-4">
                            <strong>Haz ejercicio regularmente:</strong> Complementa tu dieta con actividad física 
                            para mejorar tu salud en general.
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Dash;
