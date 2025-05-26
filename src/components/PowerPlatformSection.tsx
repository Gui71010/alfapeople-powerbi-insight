
import React from 'react';
import { Zap, Globe, BarChart3, MessageCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const PowerPlatformSection = () => {
  return (
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
  );
};
