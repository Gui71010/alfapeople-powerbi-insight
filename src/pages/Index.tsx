
import React from 'react';
import { Zap, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { Breadcrumb } from '@/components/Breadcrumb';
import { HeroSection } from '@/components/HeroSection';
import { FloatingWidgets } from '@/components/FloatingWidgets';
import { BenefitsSection } from '@/components/BenefitsSection';
import { PowerPlatformSection } from '@/components/PowerPlatformSection';
import { FAQSection } from '@/components/FAQSection';
import { SuccessStoriesSection } from '@/components/SuccessStoriesSection';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  // Contact information - Update these with your actual contact details
  const contactInfo = {
    phone: "+55 11 99999-9999", // Substitua pelo seu número
    email: "contato@dashvision.com", // Substitua pelo seu email
    whatsapp: "+5511999999999" // Substitua pelo seu WhatsApp (sem espaços ou caracteres especiais)
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingWidgets contactInfo={contactInfo} />
      <Header contactInfo={contactInfo} />
      <Breadcrumb />
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Empresas que utilizam Business Intelligence crescem 5x mais que as que não utilizam. 
              O Microsoft Power BI é uma ferramenta low-code e no-code que permite criar dashboards 
              automatizados e obter insights estratégicos para tomada de decisões mais assertivas.
            </p>
            
            {/* Partner Logos */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                  Microsoft Solutions Partner
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
                  Inner Circle 24 25
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BenefitsSection />

      {/* Visual Presentation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Power BI em Múltiplos Dispositivos</h2>
            <p className="text-lg text-gray-700 mb-12">
              Acesse seus dashboards em qualquer lugar, a qualquer momento. O Power BI funciona 
              perfeitamente em desktop, laptop, tablet e celular, garantindo mobilidade total 
              para suas análises.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Power BI em múltiplos dispositivos"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Recursos Avançados</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-slate-600 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Low-code/No-code</h3>
                    <p className="text-gray-600">Crie dashboards sem necessidade de programação</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-slate-600 p-2 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Inteligência Artificial</h3>
                    <p className="text-gray-600">IA integrada para insights automáticos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-slate-600 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Dashboards Intuitivos</h3>
                    <p className="text-gray-600">Interface amigável e fácil compreensão</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Recursos Power BI"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Globo conectado"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Power BI para todas as indústrias</h2>
              <p className="text-lg text-gray-700">
                Seja qual for seu setor - manufatura, varejo, serviços financeiros, saúde ou 
                qualquer outro - o Power BI adapta-se às necessidades específicas do seu negócio, 
                oferecendo soluções customizadas que geram valor real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Invista em Business Intelligence e transforme seus dados em vantagem competitiva
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Não fique para trás. Comece sua jornada de transformação digital hoje mesmo.
          </p>
          <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
            Fale com um de nossos especialistas!
          </Button>
        </div>
      </section>

      <PowerPlatformSection />
      <FAQSection />
      <SuccessStoriesSection />
      <BlogSection />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default Index;
