import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const LocationPage = () => {
    return (
        <div className="min-h-screen bg-[#1a1a1a] flex flex-col bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.95), rgba(0,0,0,0.95)), url('/images/bg-texture.jpg')" }}>
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-[#FFC72C] mb-8 text-center uppercase tracking-wider">
                        Nuestra Ubicación
                    </h1>

                    <div className="glass-card rounded-3xl p-8 shadow-2xl backdrop-blur-md">
                        <div className="grid md:grid-cols-2 gap-10 mb-8">
                            <div className="text-white flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-[#DA291C] mb-4 font-oswald">Visítanos</h2>
                                <p className="text-xl mb-2 font-light">Salida Charo, Morelia</p>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    ¡Ven a probar las mejores hamburguesas de la ciudad!
                                    Estamos ubicados en Periférico Paseo de la República S/N.
                                </p>

                                <h3 className="text-2xl font-bold text-[#FFC72C] mb-4 font-oswald">Horario</h3>
                                <ul className="text-gray-300 space-y-2 text-lg">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#FFC72C] rounded-full"></span>
                                        Lunes a Jueves: 12:00 PM - 10:00 PM
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#FFC72C] rounded-full"></span>
                                        Viernes y Sábado: 12:00 PM - 11:00 PM
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-[#FFC72C] rounded-full"></span>
                                        Domingo: 1:00 PM - 9:00 PM
                                    </li>
                                </ul>
                            </div>

                            <div className="h-80 md:h-auto bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.294191319766!2d-101.1718330249791!3d19.700049981636174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842d0e40be8f4c7b%3A0x633519d8021a81c!2sKFC%20Morelia%20Charo!5e0!3m2!1sen!2smx!4v1715631234567!5m2!1sen!2smx"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa de Ubicación"
                                    className="filter grayscale hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>
                        </div>

                        <div className="text-center pt-6 border-t border-white/10">
                            <a
                                href="https://maps.google.com/?q=Morelia,Michoacan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glow-button inline-block bg-[#DA291C] text-white font-bold py-4 px-10 rounded-full hover:bg-[#b91c1c] transition-all duration-300 uppercase tracking-wide text-lg"
                            >
                                Cómo llegar
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
