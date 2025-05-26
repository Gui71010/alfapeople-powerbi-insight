
import React from 'react';
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
import { IntroductionSection } from '@/components/IntroductionSection';
import { VisualPresentationSection } from '@/components/VisualPresentationSection';
import { AdditionalResourcesSection } from '@/components/AdditionalResourcesSection';
import { AllIndustriesSection } from '@/components/AllIndustriesSection';
import { SecondCTASection } from '@/components/SecondCTASection';

const Index = () => {
  // EDITE AQUI: Substitua pelos seus dados de contato reais
  const contactInfo = {
    phone: "+55 11 99999-9999", // SUBSTITUA pelo seu número de telefone
    email: "contato@dashvision.com", // SUBSTITUA pelo seu email
    whatsapp: "+5511999999999" // SUBSTITUA pelo seu WhatsApp (sem espaços ou caracteres especiais)
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingWidgets contactInfo={contactInfo} />
      <Header contactInfo={contactInfo} />
      <Breadcrumb />
      <HeroSection />
      <IntroductionSection />
      <BenefitsSection />
      <VisualPresentationSection />
      <AdditionalResourcesSection />
      <AllIndustriesSection />
      <SecondCTASection />
      <PowerPlatformSection />
      <FAQSection />
      <SuccessStoriesSection />
      <BlogSection />
      <Footer contactInfo={contactInfo} />
    </div>
  );
};

export default Index;
