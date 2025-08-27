
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/home/ServicesSection";
import ContactCTA from "@/components/home/ContactCTA";
import { ArrowUpRight, Network, ShieldAlert, Database, Server, Monitor, Lock } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-cyber-bg-dark text-white">
      <Navbar />
      
      <div className="pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/69930066-f606-40e7-ae57-4e2441adab50.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-bg-dark/80 to-cyber-bg-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
            <p className="text-gray-400">Soluciones integrales de ciberseguridad para su empresa</p>
          </div>
        </div>
      </div>
      
      <ServicesSection />
      
      <section className="py-16 bg-cyber-bg-darker">
        <div className="container mx-auto px-4">
          <div className="flex flex-col">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-6">
                <span className="cyber-gradient-text">¿Protección</span>{" "}
                <span className="text-white">Para Usted?</span>
              </h2>
              
              <p className="text-gray-400 mb-8">
                Nuestros servicios integrales de seguridad están diseñados para proteger su empresa de amenazas cibernéticas en evolución.
                Nuestro equipo de expertos utiliza las últimas tecnologías y metodologías para garantizar la máxima protección.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Network className="h-6 w-6 text-cyber-purple mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Seguridad de Red</h3>
                    <p className="text-gray-400">Proteja su infraestructura de red de accesos y ataques no autorizados.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ShieldAlert className="h-6 w-6 text-cyber-purple mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Inteligencia de Amenazas</h3>
                    <p className="text-gray-400">Identificación proactiva de posibles amenazas para su organización.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Monitor className="h-6 w-6 text-cyber-purple mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Seguridad de Endpoints</h3>
                    <p className="text-gray-400">Proteja todos los dispositivos conectados a su red con soluciones avanzadas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Database className="h-6 w-6 text-cyber-purple mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Protección de Datos</h3>
                    <p className="text-gray-400">Salvaguarde su información sensible y mantenga el cumplimiento normativo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Services;
