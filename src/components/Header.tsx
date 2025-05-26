
import React, { useState } from 'react';
import { Menu, X, Search, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
}

interface HeaderProps {
  contactInfo: ContactInfo;
}

export const Header = ({ contactInfo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/b39f2dce-37be-482b-afd4-8485eee2244c.png" 
            alt="DashVision Logo" 
            className="h-12 w-12"
          />
          <div>
            <h1 className="text-2xl font-bold text-slate-800">DashVision</h1>
            <p className="text-sm text-slate-600">Transformando números em decisões</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>Sites Internacionais</span>
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
          <Button className="bg-orange-600 hover:bg-orange-700">Contato</Button>
          <Search className="h-5 w-5 cursor-pointer" />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
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
            <Button className="bg-orange-600 hover:bg-orange-700 w-full">Contato</Button>
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
        </div>
      )}
    </header>
  );
};
