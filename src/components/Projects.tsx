import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping platform with real-time inventory and secure payments.",
      longDescription: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, product catalog, shopping cart, order management, and integrated payment processing with Stripe.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates.",
      longDescription: "A comprehensive project management application featuring real-time collaboration, task assignment, progress tracking, and team communication. Built with modern web technologies for optimal performance.",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Express"],
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with detailed forecasts and location search.",
      longDescription: "An elegant weather application providing detailed forecasts, weather maps, and location-based services. Features responsive design and smooth animations for an exceptional user experience.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts.",
      longDescription: "A comprehensive social media management platform that aggregates data from multiple platforms, provides detailed analytics, and helps schedule content across various social networks.",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis", "D3.js"],
      imageUrl: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Recipe Sharing Platform",
      description: "Community-driven platform for sharing and discovering recipes.",
      longDescription: "A vibrant community platform where users can share recipes, rate dishes, create meal plans, and discover new cuisines. Features user profiles, advanced search, and social interactions.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Tailwind CSS"],
      imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Personal fitness companion with workout plans and progress tracking.",
      longDescription: "A comprehensive fitness application that helps users track workouts, monitor progress, set goals, and maintain healthy habits. Includes workout plans, nutrition tracking, and motivational features.",
      technologies: ["React Native", "Firebase", "Node.js", "Chart.js"],
      imageUrl: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
            Hover over the cards to see more details!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              longDescription={project.longDescription}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;