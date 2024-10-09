import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const Paleo = () => {
    return (
        <div className="bg-gray-100">
            <Nav />

            <main className="max-w-7xl mx-auto py-10 px-4">
                {/* Encabezado */}
                <section className="text-center py-10">
                    <h1 className="text-5xl font-bold text-green-700 mb-4">Dieta Paleo</h1>
                    <p className="text-xl text-green-800">
                        También conocida como la "dieta del hombre de las cavernas", la dieta paleo se basa en los alimentos que 
                        nuestros ancestros cazadores-recolectores consumían. Este enfoque busca volver a lo básico para mejorar la salud.
                    </p>
                </section>

                {/* Introducción */}
                <section className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src="/assets/images/dietas/paleo.jpg" alt="Dieta Paleo" className="w-full h-64 object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-green-700 mb-4">¿Qué es la Dieta Paleo?</h2>
                            <p className="text-green-800 text-lg">
                                La dieta paleo se basa en consumir alimentos que estaban disponibles durante el período paleolítico, 
                                lo que significa que se centra en carnes magras, pescado, frutas, verduras, nueces y semillas, y evita 
                                los alimentos procesados, granos, lácteos y azúcares añadidos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beneficios de la Dieta Paleo */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Beneficios de la Dieta Paleo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Beneficio 1 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Pérdida de Peso</h3>
                            <p className="text-green-800">
                                Al eliminar los alimentos procesados y azúcares, muchas personas experimentan una pérdida de peso 
                                efectiva y sostenible.
                            </p>
                        </div>

                        {/* Beneficio 2 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Mejora de la Salud Metabólica</h3>
                            <p className="text-green-800">
                                La dieta paleo puede ayudar a mejorar los niveles de glucosa en sangre, reducir la inflamación y mejorar 
                                el perfil lipídico.
                            </p>
                        </div>

                        {/* Beneficio 3 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Aumento de Energía</h3>
                            <p className="text-green-800">
                                Al consumir alimentos ricos en nutrientes y evitar los procesados, muchas personas experimentan un aumento 
                                en sus niveles de energía y bienestar general.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Alimentos permitidos */}
                <section className="py-16">
                    <h2 className="text-4xl font-bold text-green-700 text-center mb-8">Alimentos Permitidos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Alimentos recomendados */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Alimentos Recomendados</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Carne magra (res, cerdo, cordero)</li>
                                <li>Pescado (salmón, atún, sardinas)</li>
                                <li>Frutas y verduras frescas</li>
                                <li>Nueces y semillas</li>
                                <li>Huevos</li>
                                <li>Grasas saludables (aceite de oliva, aceite de coco)</li>
                            </ul>
                        </div>

                        {/* Alimentos a evitar */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Alimentos a Evitar</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Alimentos procesados</li>
                                <li>Granos (trigo, arroz, maíz)</li>
                                <li>Lácteos</li>
                                <li>Azúcares añadidos</li>
                                <li>Legumbres (frijoles, lentejas)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Consejos para seguir la dieta */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Consejos para Seguir la Dieta Paleo</h2>
                    <ul className="list-disc list-inside max-w-4xl mx-auto text-left text-green-800 text-lg">
                        <li className="mb-4">
                            <strong>Planifica tus comidas:</strong> Organiza tus comidas con anticipación para asegurarte de 
                            cumplir con los principios de la dieta.
                        </li>
                        <li className="mb-4">
                            <strong>Lee las etiquetas:</strong> Asegúrate de que los productos que compres no contengan 
                            ingredientes no permitidos.
                        </li>
                        <li className="mb-4">
                            <strong>Haz ejercicio regularmente:</strong> Complementa tu dieta con actividad física para 
                            mejorar tu salud en general.
                        </li>
                        <li className="mb-4">
                            <strong>Escucha a tu cuerpo:</strong> Presta atención a cómo te sientes y ajusta tu dieta según 
                            tus necesidades personales.
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Paleo;
