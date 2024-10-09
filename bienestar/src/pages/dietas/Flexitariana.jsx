import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const Flexitariana = () => {
    return (
        <div className="bg-gray-100">
            <Nav />

            <main className="max-w-7xl mx-auto py-10 px-4">
                {/* Encabezado */}
                <section className="text-center py-10">
                    <h1 className="text-5xl font-bold text-green-700 mb-4">Dieta Flexitariana</h1>
                    <p className="text-xl text-green-800">
                        La dieta flexitariana es un enfoque flexible hacia la alimentación que fomenta 
                        el consumo de alimentos vegetales, al mismo tiempo que permite la inclusión ocasional 
                        de carne y pescado.
                    </p>
                </section>

                {/* Introducción */}
                <section className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src="/assets/images/dietas/flexitariana.jpg" alt="Dieta Flexitariana" className="w-full h-64 object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-green-700 mb-4">¿Qué es la Dieta Flexitariana?</h2>
                            <p className="text-green-800 text-lg">
                                La dieta flexitariana se centra en una alimentación basada en plantas, 
                                pero permite el consumo ocasional de carne y pescado. Esta dieta es ideal 
                                para quienes desean reducir su consumo de carne sin eliminarla por completo.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beneficios de la Dieta Flexitariana */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Beneficios de la Dieta Flexitariana</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Beneficio 1 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Mayor Consumo de Nutrientes</h3>
                            <p className="text-green-800">
                                Al centrarse en alimentos vegetales, se incrementa la ingesta de vitaminas, minerales 
                                y antioxidantes.
                            </p>
                        </div>

                        {/* Beneficio 2 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Flexibilidad Alimentaria</h3>
                            <p className="text-green-800">
                                Permite disfrutar de una variedad de alimentos, lo que hace que sea más fácil 
                                de seguir a largo plazo.
                            </p>
                        </div>

                        {/* Beneficio 3 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Beneficios para la Salud</h3>
                            <p className="text-green-800">
                                Puede ayudar a reducir el riesgo de enfermedades crónicas, mejorar la salud cardiovascular 
                                y facilitar el control del peso.
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
                                <li>Frutas y verduras frescas</li>
                                <li>Granos enteros (quinoa, arroz integral, avena)</li>
                                <li>Legumbres (lentejas, garbanzos, frijoles)</li>
                                <li>Nueces y semillas</li>
                                <li>Productos lácteos bajos en grasa</li>
                                <li>Carne magra y pescado en moderación</li>
                            </ul>
                        </div>

                        {/* Alimentos a evitar */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Alimentos a Moderar</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Alimentos procesados y ultraprocesados</li>
                                <li>Azúcares añadidos y refrescos</li>
                                <li>Grasas saturadas y trans</li>
                                <li>Carne roja y procesada en exceso</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Consejos para seguir la dieta */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Consejos para Seguir la Dieta Flexitariana</h2>
                    <ul className="list-disc list-inside max-w-4xl mx-auto text-left text-green-800 text-lg">
                        <li className="mb-4">
                            <strong>Incrementa el consumo de vegetales:</strong> Haz de las verduras la base de cada comida.
                        </li>
                        <li className="mb-4">
                            <strong>Opta por fuentes de proteínas vegetales:</strong> Incluye legumbres, tofu y tempeh en tu dieta.
                        </li>
                        <li className="mb-4">
                            <strong>Planifica tus comidas:</strong> Organiza tus comidas para incluir opciones vegetales y reducir el consumo de carne.
                        </li>
                        <li className="mb-4">
                            <strong>Escucha a tu cuerpo:</strong> Adapta tu dieta a tus necesidades personales y preferencias.
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Flexitariana;
