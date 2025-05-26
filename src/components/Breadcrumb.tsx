
import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Breadcrumb = () => {
  return (
    <div className="bg-gray-50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Início</span>
          <ChevronRight className="h-4 w-4" />
          <span>Power BI para Microsoft Dynamics 365</span>
        </div>
      </div>
    </div>
  );
};
