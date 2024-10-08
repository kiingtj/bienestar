import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Inicio = () => {
    return (
        <div className='bg-gray-100'>
            <Nav />
            <main className="flex flex-col items-center justify-center text-center py-20">
                <section className="w-full h-64 flex flex-col items-center justify-center">
                    <h2 className="text-5xl font-bold text-green-700 mb-4">Bienvenido a DietasBalance</h2>
                    <p className="text-xl text-green-800 max-w-2xl mb-8">
                        Tu guía para llevar una vida saludable y equilibrada. Encuentra la dieta perfecta para ti,
                        descubre recetas deliciosas y consejos prácticos para mantenerte en forma.
                    </p>

                    <div className="space-x-4">
                        <a href="#dietas" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-800">Ver Dietas</a>
                        <a href="#consejos" className="px-6 py-3 bg-white border border-green-600 text-green-600 rounded-lg shadow-md hover:bg-green-100">Consejos de Salud</a>
                    </div>
                </section>

                <section className="w-full py-16">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-lg border border-green-300">
                            <img src="/images/inicio/dieta.jpg" alt="Dieta saludable" className="h-48 w-full object-cover rounded-md mb-4" />
                            <h3 className="text-2xl font-semibold text-green-700 mb-2">Dieta Personalizada</h3>
                            <p className="text-green-800">
                                Encuentra un plan de alimentación diseñado para tus necesidades específicas y objetivos de salud.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-lg border border-green-300">
                            <img src="/images/inicio/receta.jpg" alt="Recetas saludables" className="h-48 w-full object-cover rounded-md mb-4" />
                            <h3 className="text-2xl font-semibold text-green-700 mb-2">Recetas Deliciosas</h3>
                            <p className="text-green-800">
                                Descubre recetas que no solo son saludables, sino también deliciosas y fáciles de preparar.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-lg border border-green-300">
                            <img src="/images/inicio/salud.jpg" alt="Consejos de salud" className="h-48 w-full object-cover rounded-md mb-4" />
                            <h3 className="text-2xl font-semibold text-green-700 mb-2">Consejos de Salud</h3>
                            <p className="text-green-800">
                                Sigue nuestros consejos prácticos para mejorar tu bienestar general y alcanzar tus metas de salud.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Testimonios */}
                <section className="w-full py-16">
                    <h3 className="text-3xl font-bold text-green-700 mb-8">Testimonios de nuestros usuarios</h3>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Testimonio 1 */}
                        <div className="p-6 bg-white rounded-lg shadow-md border border-green-300">
                            <p className="text-lg text-green-800 mb-4">
                                "Gracias a DietasBalance logré bajar 10 kg en solo 3 meses de una forma saludable. ¡Me siento con más energía que nunca!"
                            </p>
                            <h4 className="text-green-600 font-semibold">- María González</h4>
                        </div>

                        {/* Testimonio 2 */}
                        <div className="p-6 bg-white rounded-lg shadow-md border border-green-300">
                            <p className="text-lg text-green-800 mb-4">
                                "Las recetas son deliciosas y fáciles de hacer. He mejorado mis hábitos alimenticios y ahora sigo un estilo de vida más equilibrado."
                            </p>
                            <h4 className="text-green-600 font-semibold">- Carlos Pérez</h4>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Inicio;
