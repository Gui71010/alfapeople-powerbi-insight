
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "Como o Power BI transforma a tomada de decisões",
      excerpt: "Descubra como empresas estão usando BI para obter insights estratégicos",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "15 Jan 2024"
    },
    {
      title: "Inteligência Artificial no Power BI",
      excerpt: "As novas funcionalidades de IA que estão revolucionando a análise de dados",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "10 Jan 2024"
    },
    {
      title: "Power Platform: Integração completa",
      excerpt: "Como integrar Power BI com outras ferramentas da Microsoft",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      date: "05 Jan 2024"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Leia nosso Blog</h2>
          <p className="text-lg text-gray-700 mb-6">Últimas Postagens</p>
          <Button variant="outline">Ver mais</Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div>
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Button variant="outline" size="sm">
                  Ler mais <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
