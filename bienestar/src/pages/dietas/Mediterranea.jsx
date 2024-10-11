import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet-async';

const Mediterranea = () => {
    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>Dietas Balance - Dieta Mediterránea (salud cardiovascular).</title>
                <meta name="description" content="Con la dieta Mediterránea podrás reducir el riesgo de enfermedades que afectan al corazón y aumentar la circulación sanguínea." />
            </Helmet>
            <Nav />

            <main className="max-w-7xl mx-auto py-10 px-4">
                {/* Encabezado */}
                <section className="text-center py-10">
                    <h1 className="text-5xl font-bold text-green-700 mb-4">Dieta Mediterránea</h1>
                    <p className="text-xl text-green-800">
                        Un estilo de vida saludable basado en alimentos frescos, naturales y sabrosos. Conocida por sus beneficios para el corazón y longevidad.
                    </p>
                </section>

                {/* Introducción */}
                <section className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src="/assets/images/dietas/mediterranea.jpg" alt="Dieta Mediterránea" className="w-full h-64 object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-green-700 mb-4">¿Qué es la Dieta Mediterránea?</h2>
                            <p className="text-green-800 text-lg">
                                La dieta mediterránea es un patrón alimentario basado en los hábitos tradicionales de los países que bordean el mar Mediterráneo, como Grecia, Italia y España.
                                Se enfoca en alimentos frescos y no procesados, incluyendo una abundancia de frutas, verduras, cereales integrales, legumbres, pescado y grasas saludables como el aceite de oliva.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beneficios de la Dieta Mediterránea */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Beneficios de la Dieta Mediterránea</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Beneficio 1 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Salud Cardiovascular</h3>
                            <p className="text-green-800">
                                El consumo regular de aceite de oliva, pescado y frutos secos ayuda a reducir el riesgo de enfermedades del corazón y mejora la circulación sanguínea.
                            </p>
                        </div>

                        {/* Beneficio 2 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Control de Peso</h3>
                            <p className="text-green-800">
                                Esta dieta es rica en alimentos saciantes, como frutas, verduras y granos integrales, que ayudan a mantener un peso saludable a largo plazo.
                            </p>
                        </div>

                        {/* Beneficio 3 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Prevención de Enfermedades</h3>
                            <p className="text-green-800">
                                Las antioxidantes y nutrientes presentes en los alimentos mediterráneos ayudan a prevenir enfermedades crónicas como la diabetes tipo 2 y el cáncer.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Alimentos recomendados */}
                <section className="py-16">
                    <h2 className="text-4xl font-bold text-green-700 text-center mb-8">Alimentos Recomendados</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Alimentos principales */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Principales Alimentos</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Frutas y verduras frescas</li>
                                <li>Granos integrales (pan, pasta, arroz integral)</li>
                                <li>Legumbres (lentejas, garbanzos, frijoles)</li>
                                <li>Pescado y mariscos</li>
                                <li>Frutos secos (almendras, nueces)</li>
                                <li>Aceite de oliva virgen extra</li>
                                <li>Lácteos en moderación (queso, yogur)</li>
                            </ul>
                        </div>

                        {/* Alimentos a evitar */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Alimentos a Evitar</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Alimentos ultraprocesados</li>
                                <li>Azúcares refinados</li>
                                <li>Carnes rojas en exceso</li>
                                <li>Grasas trans o saturadas</li>
                                <li>Bebidas azucaradas</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Consejos para Seguir la Dieta */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Consejos para Adoptar la Dieta Mediterránea</h2>
                    <ul className="list-disc list-inside max-w-4xl mx-auto text-left text-green-800 text-lg">
                        <li className="mb-4">
                            <strong>Usa aceite de oliva virgen extra:</strong> Este debe ser tu fuente principal de grasa. Úsalo para cocinar y aliñar ensaladas.
                        </li>
                        <li className="mb-4">
                            <strong>Incluye pescado en tu dieta:</strong> Trata de consumir pescado al menos dos veces por semana, especialmente pescado azul rico en omega-3.
                        </li>
                        <li className="mb-4">
                            <strong>Come muchas frutas y verduras:</strong> Asegúrate de que la mayor parte de tu plato esté compuesta por estos alimentos en cada comida.
                        </li>
                        <li className="mb-4">
                            <strong>Disfruta las comidas con moderación:</strong> La dieta mediterránea no es solo lo que comes, sino cómo lo comes. Disfruta las comidas en compañía y come lentamente.
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Mediterranea;
