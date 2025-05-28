import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight, Phone, Mail, Globe, Users, BarChart3, Zap, Shield, BookOpen, ArrowRight, MessageCircle, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import IntroductionSection from '@/components/IntroductionSection';
import VisualPresentationSection from '@/components/VisualPresentationSection';
import AdditionalResourcesSection from '@/components/AdditionalResourcesSection';
import AllIndustriesSection from '@/components/AllIndustriesSection';
import SecondCTASection from '@/components/SecondCTASection';
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const contactInfo = {
    phone: "+55 38 988690984",
    email: "santiagoguilherme066@gmail.com",
    whatsapp: "https://api.whatsapp.com/send/?phone=5538988690984&text=Iniciar%20conversa%20com%20um%20de%20nossos%20especialistas&app_absent=0"
  };
  const successStories = [{
    company: "Ourofino",
    description: "Transformação digital com Power BI resultou em 40% de aumento na eficiência operacional",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }, {
    company: "TechCorp",
    description: "Implementação de dashboards automatizados reduziu tempo de análise em 60%",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }, {
    company: "InnovaGroup",
    description: "Cultura de dados disseminada em toda organização com Power BI",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }];
  const blogPosts = [{
    title: "Como o Power BI transforma a tomada de decisões",
    excerpt: "Descubra como empresas estão usando BI para obter insights estratégicos",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "15 Jan 2024"
  }, {
    title: "Inteligência Artificial no Power BI",
    excerpt: "As novas funcionalidades de IA que estão revolucionando a análise de dados",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "10 Jan 2024"
  }, {
    title: "Power Platform: Integração completa",
    excerpt: "Como integrar Power BI com outras ferramentas da Microsoft",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    date: "05 Jan 2024"
  }];
  return <div className="min-h-screen bg-white">
      {/* Floating Widgets */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button size="icon" className="bg-orange-600 hover:bg-orange-700 rounded-full w-12 h-12 shadow-lg">
          <Accessibility className="h-6 w-6 text-white" />
        </Button>
      </div>
      
      <div className="fixed bottom-4 right-4 z-50">
        <Button size="icon" className="bg-green-500 hover:bg-green-600 rounded-full w-12 h-12 shadow-lg" asChild>
          <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6 text-white" />
          </a>
        </Button>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img alt="DashVision Logo" className="h-12 w-12" src="https://i.imgur.com/ggdcU3V.png" />
            <div>
              <h1 className="text-2xl font-bold text-slate-800">DashVision</h1>
              <p className="text-sm text-slate-600">Transformando números em decisões</p>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>Entre em contato conosco</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 hover:text-orange-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-orange-600 transition-colors">
              <Mail className="h-4 w-4" />
              <span>{contactInfo.email}</span>
            </a>
            <Button className="bg-orange-600 hover:bg-orange-700" asChild>
              <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                Contato
              </a>
            </Button>
            <Search className="h-5 w-5 cursor-pointer" />
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span>Sites Internacionais</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{contactInfo.email}</span>
              </a>
              <Button className="bg-orange-600 hover:bg-orange-700 w-full" asChild>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  Contato
                </a>
              </Button>
              <div className="border-t pt-4 space-y-3">
                <div>Soluções</div>
                <div>Indústrias</div>
                <div>Serviços</div>
                <div>Clientes</div>
                <div>Eventos</div>
                <div>Conteúdos</div>
                <div>Carreiras</div>
                <div>Sobre</div>
              </div>
            </nav>
          </div>}
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Início</span>
            <ChevronRight className="h-4 w-4" />
            <span>Venha revolucionar seu negócio com Dados estratégicos!</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Microsoft Power BI</h1>
              <p className="text-xl mb-8 text-slate-100">
                Transforme dados em vantagem competitiva! Com a DashVision, Inteligência de Dados e IA trabalham juntas para impulsionar seu negócio com insights estratégicos.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 px-8 py-4 font-thin text-lg" asChild>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  Fale com um de nossos especialistas!
                </a>
              </Button>
            </div>
            <div className="relative">
              <img src="https://i.imgur.com/nloreat.jpeg" alt="Power BI Dashboards" className="rounded-lg shadow-2xl w-full h-auto object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <IntroductionSection />

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios e Diferenciais</h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Resultados a partir de 2 semanas
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Com nossa metodologia ágil e experiência em implementações, você começará a ver 
                    resultados concretos em suas análises de dados em apenas duas semanas. Nosso time 
                    especializado garante uma implementação rápida e eficiente.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Mais visibilidade e controle
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Tenha uma visão 360° do seu negócio com dashboards interativos e relatórios 
                    em tempo real. Monitore KPIs importantes e identifique oportunidades de melhoria 
                    de forma proativa.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Dados automatizados e unificados
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Integre dados de múltiplas fontes automaticamente. Elimine trabalho manual e 
                    reduza erros com pipelines de dados automatizados que mantêm suas informações 
                    sempre atualizadas e confiáveis.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Disseminação da cultura de dados em toda a organização
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">
                    Democratize o acesso aos dados em sua empresa. Com interfaces intuitivas e 
                    treinamentos especializados, toda equipe poderá tomar decisões baseadas em dados, 
                    criando uma verdadeira cultura analítica.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Visual Presentation Section */}
      <VisualPresentationSection />

      {/* Additional Resources */}
      <AdditionalResourcesSection />

      {/* All Industries Section */}
      <AllIndustriesSection />

      {/* Second CTA */}
      <SecondCTASection />

      {/* Power Platform Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conheça toda a Power Platform</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-600 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Power Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Crie aplicativos personalizados rapidamente sem necessidade de código complexo
                </CardDescription>
                <Button variant="outline" size="sm">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-slate-600 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Power Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Construa sites modernos e responsivos de forma rápida e segura
                </CardDescription>
                <Button variant="outline" size="sm">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-600 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Power Automate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Automatize processos de negócio e integre sistemas sem esforço
                </CardDescription>
                <Button variant="outline" size="sm">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-600 w-16 h-16 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Power Virtual Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Desenvolva chatbots inteligentes para melhorar o atendimento
                </CardDescription>
                <Button variant="outline" size="sm">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
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
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
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
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
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

      {/* Success Stories Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Histórias de sucesso de clientes</h2>
            <p className="text-lg text-gray-700">
              Veja como empresas transformaram seus negócios com Power BI
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div className="flex transition-transform duration-500 ease-in-out" style={{
              transform: `translateX(-${currentSlide * 100}%)`
            }}>
                {successStories.map((story, index) => <div key={index} className="w-full flex-shrink-0">
                    <Card className="mx-4">
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                          <div>
                            <img src={story.image} alt={story.company} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-4">{story.company}</h3>
                            <p className="text-gray-700">{story.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>)}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center space-x-2 mt-6">
              {successStories.map((_, index) => <button key={index} aria-label={`Ir para slide ${index + 1}`} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-orange-600' : 'bg-gray-300'}`} />)}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline">Ver mais</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leia nosso Blog</h2>
            <p className="text-lg text-gray-700 mb-6">Últimas Postagens</p>
            <Button variant="outline">Ver mais</Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <div>
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-lg" loading="lazy" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <Button variant="outline" size="sm">
                    Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          {/* CTA Section */}
          <div className="text-center mb-12">
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Button className="bg-orange-600 hover:bg-orange-700 py-3" asChild>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  Contate-nos
                </a>
              </Button>
              <Button variant="outline" className="border-white py-3 text-stone-950 bg-slate-50" asChild>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  Fale com um especialista
                </a>
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo and Partners */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img alt="DashVision Logo" className="h-8 w-8" loading="lazy" src="https://i.imgur.com/mOg8yGo.png" />
                <div>
                  <h3 className="text-xl font-bold text-white">DashVision</h3>
                  <p className="text-sm text-slate-300">Transformando números em decisões</p>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-600 px-4 py-2 rounded text-sm text-center">
                  Microsoft Solutions Partner
                </div>
                <div className="bg-orange-500 px-4 py-2 rounded text-sm text-center">
                  Inner Circle 24 25
                </div>
              </div>
              {/* Contact Information */}
              <div className="space-y-2">
                <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>{contactInfo.phone}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>{contactInfo.email}</span>
                </a>
              </div>
            </div>

            {/* Solutions Menu */}
            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Microsoft IA</li>
                <li>Microsoft Dynamics 365</li>
                <li>Power Platform</li>
                <li>Azure</li>
                <li>Metodologias</li>
              </ul>
            </div>

            {/* Additional Links */}
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Eventos</li>
                <li>Blog</li>
                <li>Clientes</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded">
                  <Users className="h-5 w-5" />
                </div>
                <div className="bg-orange-600 p-2 rounded">
                  <Globe className="h-5 w-5" />
                </div>
                <div className="bg-green-600 p-2 rounded">
                  <BookOpen className="h-5 w-5" />
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">LinkedIn | YouTube | Spotify</p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 DashVision. Todos os direitos reservados. | dashvision.com</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;