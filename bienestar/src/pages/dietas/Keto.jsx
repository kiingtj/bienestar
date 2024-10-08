import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const Keto = () => {
    return (
        <div className="bg-gray-100">
            <Nav />

            <main className="max-w-7xl mx-auto py-10 px-4">
                {/* Encabezado */}
                <section className="text-center py-10">
                    <h1 className="text-5xl font-bold text-green-700 mb-4">Dieta Keto</h1>
                    <p className="text-xl text-green-800">
                        Una dieta baja en carbohidratos y alta en grasas que te ayuda a quemar grasa más eficientemente al poner a tu cuerpo en un estado de cetosis.
                    </p>
                </section>

                {/* Introducción */}
                <section className="py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img src="/images/dietas/keto.jpg" alt="Dieta Keto" className="w-full h-64 object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-green-700 mb-4">¿Qué es la Dieta Keto?</h2>
                            <p className="text-green-800 text-lg">
                                La dieta cetogénica (o keto) se basa en reducir drásticamente la ingesta de carbohidratos y aumentar el consumo de grasas saludables. 
                                Al reducir los carbohidratos, el cuerpo entra en un estado metabólico llamado cetosis, donde comienza a quemar grasa como fuente principal de energía.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Beneficios de la Dieta Keto */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Beneficios de la Dieta Keto</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Beneficio 1 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Pérdida de Peso Rápida</h3>
                            <p className="text-green-800">
                                Al utilizar la grasa como principal fuente de energía, la dieta keto puede facilitar la pérdida de peso rápida y sostenida.
                            </p>
                        </div>

                        {/* Beneficio 2 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Control de los Niveles de Azúcar</h3>
                            <p className="text-green-800">
                                La reducción en la ingesta de carbohidratos ayuda a mantener los niveles de azúcar en sangre estables, lo que es beneficioso para personas con diabetes tipo 2.
                            </p>
                        </div>

                        {/* Beneficio 3 */}
                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Mejora de la Energía y la Concentración</h3>
                            <p className="text-green-800">
                                Muchas personas reportan una mayor claridad mental y niveles de energía más estables al seguir la dieta keto debido al uso de las cetonas como fuente de energía.
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
                                <li>Carne (pollo, ternera, cerdo)</li>
                                <li>Pescado y mariscos</li>
                                <li>Huevos</li>
                                <li>Verduras bajas en carbohidratos (espinacas, col rizada, brócoli)</li>
                                <li>Aceite de oliva, aguacate y otros aceites saludables</li>
                                <li>Frutos secos y semillas (almendras, nueces)</li>
                                <li>Quesos y productos lácteos enteros</li>
                            </ul>
                        </div>

                        {/* Alimentos a evitar */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-green-700 mb-4">Alimentos a Evitar</h3>
                            <ul className="list-disc list-inside text-green-800 text-lg">
                                <li>Azúcares y postres</li>
                                <li>Granos y productos a base de harina (pan, pasta)</li>
                                <li>Frutas ricas en carbohidratos (plátanos, uvas)</li>
                                <li>Legumbres (frijoles, garbanzos)</li>
                                <li>Bebidas azucaradas</li>
                                <li>Alcohol (especialmente cerveza y cócteles azucarados)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Consejos para Seguir la Dieta */}
                <section className="py-16 text-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-8">Consejos para Adoptar la Dieta Keto</h2>
                    <ul className="list-disc list-inside max-w-4xl mx-auto text-left text-green-800 text-lg">
                        <li className="mb-4">
                            <strong>Reduce los carbohidratos gradualmente:</strong> Introduce los cambios lentamente para permitir que tu cuerpo se adapte a la cetosis sin efectos secundarios intensos.
                        </li>
                        <li className="mb-4">
                            <strong>Hidrátate adecuadamente:</strong> Bebe mucha agua para ayudar a tu cuerpo a mantenerse en equilibrio mientras sigues la dieta cetogénica.
                        </li>
                        <li className="mb-4">
                            <strong>Consume suficientes electrolitos:</strong> Asegúrate de obtener suficiente sodio, potasio y magnesio, ya que pueden disminuir durante la cetosis.
                        </li>
                        <li className="mb-4">
                            <strong>Monitorea tu progreso:</strong> Utiliza herramientas como tiras reactivas de cetona o aplicaciones de seguimiento para medir tu nivel de cetosis.
                        </li>
                    </ul>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Keto;
