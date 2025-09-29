import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="text-blue-600" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <Palette className="text-purple-600" size={24} />,
      title: "Design Focus",
      description: "Creating intuitive interfaces that users love to interact with"
    },
    {
      icon: <Zap className="text-orange-600" size={24} />,
      title: "Performance",
      description: "Optimizing every detail for lightning-fast user experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital experiences that matter
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello! I'm Alex, a full-stack developer based in San Francisco. I discovered my passion for 
              web development during college and have been hooked ever since. I love the challenge of 
              turning complex problems into simple, elegant solutions.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me hiking in the Bay Area, experimenting with new 
              recipes, or contributing to open-source projects. I believe that the best software 
              comes from diverse perspectives and collaborative effort.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">React</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;