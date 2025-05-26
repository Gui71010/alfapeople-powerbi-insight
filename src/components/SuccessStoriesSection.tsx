
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const SuccessStoriesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const successStories = [
    {
      company: "Ourofino",
      description: "Transformação digital com Power BI resultou em 40% de aumento na eficiência operacional",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      company: "TechCorp",
      description: "Implementação de dashboards automatizados reduziu tempo de análise em 60%",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      company: "InnovaGroup",
      description: "Cultura de dados disseminada em toda organização com Power BI",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
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
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {successStories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-4">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div>
                          <img 
                            src={story.image}
                            alt={story.company}
                            className="w-full h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-4">{story.company}</h3>
                          <p className="text-gray-700">{story.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center space-x-2 mt-6">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-orange-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">Ver mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
