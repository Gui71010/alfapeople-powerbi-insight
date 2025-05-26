
import React from 'react';
import { MessageCircle, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactInfo {
  whatsapp: string;
}

interface FloatingWidgetsProps {
  contactInfo: ContactInfo;
}

export const FloatingWidgets = ({ contactInfo }: FloatingWidgetsProps) => {
  return (
    <>
      <div className="fixed bottom-4 left-4 z-50">
        <Button size="icon" className="bg-orange-600 hover:bg-orange-700 rounded-full w-12 h-12 shadow-lg">
          <Accessibility className="h-6 w-6 text-white" />
        </Button>
      </div>
      
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          size="icon" 
          className="bg-green-500 hover:bg-green-600 rounded-full w-12 h-12 shadow-lg"
          onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank')}
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    </>
  );
};
