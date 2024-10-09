import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Consejos = () => {
    return (
        <div className="bg-gray-100">
            <Nav />
            <main className="max-w-screen-lg mx-auto p-6">
                <h1 className="md:text-4xl text-3xl font-bold text-green-600 mb-6 text-center">Consejos de Salud</h1>
                <p className="text-gray-800 mb-8 text-center">
                    Mantener un estilo de vida saludable es clave para tu bienestar. Aquí te ofrecemos consejos prácticos para mejorar tu salud.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Consejo 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/assets/images/consejos/equilibrada.jpg" alt="Dieta equilibrada" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-green-700">1. Mantén una dieta equilibrada</h2>
                            <p className="text-gray-600 mb-4">
                                Incluye una variedad de alimentos en tu dieta, como frutas, verduras, proteínas y granos enteros. 
                            </p>
                            <Link to="/dietas" className="inline-block text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">Descubre Nuestras Dietas</Link>
                        </div>
                    </div>

                    {/* Consejo 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/assets/images/consejos/agua.jpg" alt="Hidratación" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-green-700">2. Hidrátate adecuadamente</h2>
                            <p className="text-gray-600 mb-4">
                                Bebe al menos 2 litros de agua al día para mantener tu cuerpo hidratado y funcionando correctamente.
                            </p>
                            <Link to="/consejos/hidratacion" className="inline-block text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">Aprende Más</Link>
                        </div>
                    </div>

                    {/* Consejo 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/assets/images/consejos/ejercicio.jpg" alt="Ejercicio" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-green-700">3. Haz ejercicio regularmente</h2>
                            <p className="text-gray-600 mb-4">
                                Realiza al menos 150 minutos de actividad física moderada cada semana. ¡El ejercicio es esencial!
                            </p>
                            <Link to="/consejos/ejercicio" className="inline-block text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">Ver Ejercicios Sugeridos</Link>
                        </div>
                    </div>

                    {/* Consejo 4 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="/assets/images/consejos/sueno.jpg" alt="Sueño" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-semibold text-green-700">4. Duerme lo suficiente</h2>
                            <p className="text-gray-600 mb-4">
                                Apunta a dormir entre 7 y 9 horas cada noche para que tu cuerpo se recupere y funcione óptimamente.
                            </p>
                            <Link to="/consejos/descanso" className="inline-block text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700">Consejos de Sueño</Link>
                        </div>
                    </div>
                </div>

                <h3 className="md:text-3xl text-2xl font-bold text-green-600 mb-4">Consejos Adicionales</h3>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-gray-800 mb-2">Controla tu estrés mediante técnicas de relajación como meditación y respiración profunda.</li>
                    <li className="text-gray-800 mb-2">Realiza chequeos médicos anuales para estar al tanto de tu salud.</li>
                    <li className="text-gray-800 mb-2">Limita el consumo de alcohol y evita el tabaco.</li>
                </ul>
                
                <p className="text-gray-800 mb-4 text-center">
                    Para más información sobre dietas y salud, consulta nuestras secciones de <Link to="/dietas" className="text-green-600 underline">Dietas</Link> y <Link to="/contacto" className="text-green-600 underline">Contacto</Link>.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Consejos;
