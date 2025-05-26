
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-lg font-semibold">
                O que é o Microsoft Power BI?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  O Microsoft Power BI é uma plataforma de business intelligence que permite 
                  conectar, analisar e visualizar dados de diversas fontes. Com ele, você pode 
                  criar dashboards interativos, relatórios dinâmicos e obter insights valiosos 
                  para tomada de decisões estratégicas.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-lg font-semibold">
                O Power BI é seguro para análise de dados?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Sim, o Power BI oferece segurança de nível empresarial com criptografia 
                  de dados, controles de acesso granulares, autenticação multifator e 
                  conformidade com padrões internacionais como ISO 27001, SOC 1 e SOC 2.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-lg font-semibold">
                O Power BI é fácil de aprender?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Sim! O Power BI foi projetado para ser intuitivo e fácil de usar. Com 
                  interface drag-and-drop e recursos no-code/low-code, usuários de negócio 
                  podem criar visualizações sem conhecimento técnico avançado. Oferecemos 
                  também treinamentos especializados para acelerar a curva de aprendizado.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
