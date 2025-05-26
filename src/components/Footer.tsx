
import React from 'react';
import { Phone, Mail, Users, Globe, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
}

interface FooterProps {
  contactInfo: ContactInfo;
}

export const Footer = ({ contactInfo }: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button 
              className="bg-orange-600 hover:bg-orange-700 py-3"
              onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}
            >
              Contate-nos
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-900 py-3"
              onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')}
            >
              Fale com um especialista
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Partners */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/b39f2dce-37be-482b-afd4-8485eee2244c.png" 
                alt="DashVision Logo" 
                className="h-8 w-8"
              />
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
  );
};
