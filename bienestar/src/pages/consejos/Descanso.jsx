import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Descanso = () => {
    return (
        <div className="bg-gray-100">
            <Nav />
            <main className="max-w-screen-lg mx-auto p-6">
                <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">Descanso: El Pilar de una Vida Saludable</h1>
                <p className="text-gray-800 mb-8 text-center">
                    Dormir bien es fundamental para nuestra salud física y mental. Aquí descubrirás la importancia del descanso adecuado y cómo mejorar la calidad de tu sueño.
                </p>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Beneficios de un Buen Descanso</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li className="text-gray-800 mb-2">Mejora la función cognitiva y la concentración.</li>
                        <li className="text-gray-800 mb-2">Fortalece el sistema inmunológico.</li>
                        <li className="text-gray-800 mb-2">Regula el metabolismo y ayuda a mantener un peso saludable.</li>
                        <li className="text-gray-800 mb-2">Reduce el riesgo de enfermedades cardíacas y otras condiciones crónicas.</li>
                        <li className="text-gray-800 mb-2">Mejora el estado de ánimo y reduce el estrés.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Consejos para Mejorar la Calidad del Sueño</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">1. Establece un horario regular</h3>
                            <p className="text-gray-600">Acuéstate y despiértate a la misma hora todos los días, incluso los fines de semana.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">2. Crea un ambiente propicio para dormir</h3>
                            <p className="text-gray-600">Mantén tu dormitorio oscuro, tranquilo y fresco. Utiliza cortinas gruesas y asegúrate de tener un colchón y almohadas cómodos.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">3. Evita las pantallas antes de dormir</h3>
                            <p className="text-gray-600">La luz azul emitida por teléfonos, computadoras y televisores puede interferir con tu ciclo de sueño.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">4. Relájate antes de acostarte</h3>
                            <p className="text-gray-600">Realiza actividades relajantes como leer, meditar o tomar un baño caliente antes de dormir.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Preguntas Frecuentes</h2>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿Cuántas horas de sueño son recomendables?</h3>
                        <p className="text-gray-600">Se recomienda que los adultos duerman entre 7 y 9 horas por noche.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿Qué debo hacer si tengo problemas para dormir?</h3>
                        <p className="text-gray-600">Si tienes dificultades para conciliar el sueño, intenta relajarte antes de acostarte, evita la cafeína por la tarde y considera consultar a un profesional de salud si el problema persiste.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿Cómo afecta la falta de sueño a la salud?</h3>
                        <p className="text-gray-600">La falta de sueño puede causar problemas de concentración, aumentar el riesgo de enfermedades y afectar tu estado de ánimo y bienestar general.</p>
                    </div>
                </section>

                <p className="text-gray-800 mb-4 text-center">
                    Para más consejos sobre un estilo de vida saludable, explora nuestras secciones de <Link to="/consejos" className="text-green-600 underline">Consejos</Link> e <Link to="/hidratate" className="text-green-600 underline">Hidratación</Link>.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Descanso;