import React from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Ejercicio = () => {
    return (
        <div className="bg-gray-100">
            <Nav />
            <main className="max-w-screen-lg mx-auto p-6">
                <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">Ejercicio: ¡Actívate para una Vida Saludable!</h1>
                <p className="text-gray-800 mb-8 text-center">
                    La actividad física es fundamental para mantener un estilo de vida saludable. Aquí descubrirás por qué es importante el ejercicio y cómo puedes incorporarlo en tu día a día.
                </p>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Beneficios del Ejercicio Regular</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li className="text-gray-800 mb-2">Mejora la salud cardiovascular.</li>
                        <li className="text-gray-800 mb-2">Ayuda a controlar el peso corporal.</li>
                        <li className="text-gray-800 mb-2">Fortalece los músculos y los huesos.</li>
                        <li className="text-gray-800 mb-2">Aumenta la energía y la resistencia.</li>
                        <li className="text-gray-800 mb-2">Reduce el estrés y mejora el estado de ánimo.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Consejos para Mantenerte Activo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">1. Establece una rutina</h3>
                            <p className="text-gray-600">Dedica un tiempo específico cada día para hacer ejercicio, ya sea por la mañana, durante el almuerzo o por la tarde.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">2. Encuentra una actividad que disfrutes</h3>
                            <p className="text-gray-600">Ya sea caminar, nadar, bailar o levantar pesas, elige actividades que te motiven.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">3. Mantente hidratado</h3>
                            <p className="text-gray-600">Bebe suficiente agua antes, durante y después de hacer ejercicio para mantenerte hidratado.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-4">
                            <h3 className="text-xl font-semibold text-green-600">4. Escucha a tu cuerpo</h3>
                            <p className="text-gray-600">No te sobrecargues. Si sientes dolor o malestar, descansa y consulta a un profesional.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-green-700 mb-4">Preguntas Frecuentes</h2>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿Cuánto ejercicio debo hacer a la semana?</h3>
                        <p className="text-gray-600">Se recomienda al menos 150 minutos de actividad moderada o 75 minutos de actividad intensa a la semana.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿Puedo hacer ejercicio todos los días?</h3>
                        <p className="text-gray-600">Sí, pero es importante alternar entre diferentes tipos de ejercicios y permitir tiempo de recuperación.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h3 className="text-xl font-semibold text-green-600">¿El ejercicio ayuda a perder peso?</h3>
                        <p className="text-gray-600">Sí, el ejercicio regular, combinado con una alimentación equilibrada, puede ayudar a perder peso y mantener un peso saludable.</p>
                    </div>
                </section>

                <p className="text-gray-800 mb-4 text-center">
                    Para más consejos sobre salud y bienestar, visita nuestras secciones de <Link to="/consejos" className="text-green-600 underline">Consejos</Link> e <Link to="/hidratate" className="text-green-600 underline">Hidratación</Link>.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Ejercicio;
