import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Helmet } from 'react-helmet-async';

const Vegana = () => {
    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>Dietas Balance - Dieta Vegana (mejora tú salud).</title>
                <meta name="description" content="Con la dieta Vegana aportarás un impacto positivo con el medio ambiente, mejorarás tu salud y controlarás tu beso eficientemente." />
            </Helmet>
            <Nav />

            <main className="max-w-7xl mx-auto py-10 px-4">
                {/* Encabezado */}
                <section className="text-center py-10">
                    <h1 className="text-5xl font-bold text-green-700 mb-4">Dieta Vegana</h1>
                    <p className="text-xl text-green-800">
                        Un estilo de vida basado en la alimentación sin productos de origen animal. 
                        La dieta vegana no solo promueve la salud, sino que también respeta los derechos de los animales y el medio ambiente.
                    </p>
                </section>

                {/* Introducción */}
                <section className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src="/assets/images/dietas/vegana.jpg" alt="Dieta Vegana" className="w-full h-64 object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-green-700 mb-4">¿Qué es la Dieta Vegana?</h2>
                            <p className="text-green-800 text-lg">
                                La dieta vegana se basa exclusivamente en alimentos de origen vegetal. 
                                Esto significa que los veganos evitan todos los productos animales, incluyendo carne, lácteos, huevos y miel. 
                                Este enfoque puede aportar numerosos beneficios para la salud y el medio ambiente.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beneficios de la Dieta Vegana */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Beneficios de la Dieta Vegana</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Beneficio 1 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Mejora de la Salud</h3>
                            <p className="text-green-800">
                                Una dieta rica en frutas, verduras, granos enteros y legumbres puede reducir el riesgo de enfermedades crónicas, como enfermedades del corazón, diabetes y ciertos tipos de cáncer.
                            </p>
                        </div>

                        {/* Beneficio 2 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Control del Peso</h3>
                            <p className="text-green-800">
                                Las dietas veganas tienden a ser más bajas en calorías y grasas, lo que puede ayudar en la pérdida y el mantenimiento del peso saludable.
                            </p>
                        </div>

                        {/* Beneficio 3 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Impacto Ambiental Positivo</h3>
                            <p className="text-green-800">
                                Reducir el consumo de productos animales ayuda a disminuir la huella de carbono y el uso de recursos naturales, contribuyendo a un planeta más sostenible.
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
                                <li>Legumbres (lentejas, garbanzos, frijoles)</li>
                                <li>Granos enteros (arroz integral, quinoa, avena)</li>
                                <li>Frutos secos y semillas (almendras, nueces, chía)</li>
                                <li>Productos a base de soya (tofu, tempeh)</li>
                                <li>Leches vegetales (almendra, soja, avena)</li>
                                <li>Hierbas y especias</li>
                            </ul>
                        </div>

                        {/* Alimentos a evitar */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Alimentos a Evitar</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Carnes (roja, blanca, pescado)</li>
                                <li>Productos lácteos (leche, queso, yogur)</li>
                                <li>Huevos</li>
                                <li>Miel</li>
                                <li>Algunos productos procesados que contienen ingredientes de origen animal</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Consejos para Seguir la Dieta */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Consejos para Adoptar la Dieta Vegana</h2>
                    <ul className="list-disc list-inside max-w-4xl mx-auto text-left text-green-800 text-lg">
                        <li className="mb-4">
                            <strong>Planifica tus comidas:</strong> Asegúrate de incluir una variedad de alimentos para obtener todos los nutrientes necesarios.
                        </li>
                        <li className="mb-4">
                            <strong>Considera la suplementación:</strong> Algunos nutrientes como la vitamina B12, el hierro y el omega-3 pueden ser más difíciles de obtener en una dieta vegana, así que consulta con un profesional de la salud.
                        </li>
                        <li className="mb-4">
                            <strong>Explora nuevas recetas:</strong> Prueba diferentes platos y cocinas para mantener tu dieta interesante y deliciosa.
                        </li>
                        <li className="mb-4">
                            <strong>Escucha a tu cuerpo:</strong> Presta atención a cómo te sientes y ajusta tu dieta según sea necesario para asegurarte de que estás obteniendo todos los nutrientes que necesitas.
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Vegana;
