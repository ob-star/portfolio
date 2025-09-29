import React from 'react';
import { ExternalLink, Github, Code, Zap, Globe, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Muna TV - Video Streaming Platform',
      description: 'Scalable Next.js + Mux powered video streaming service for educational content. Built with microservice architecture and CI/CD pipelines for high-availability deployments.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
      technologies: ['Next.js', 'Mux', 'React', 'Node.js', 'AWS'],
      category: 'Web Development',
      icon: Zap,
      github: 'https://github.com/brightokyere',
      demo: 'https://tv.muna-world.org/'
    },
    {
      title: 'Muna App - Learning Platform',
      description: 'Rich media learning platform featuring animated content, eBooks, and audiobooks. Built with React and integrated with Cloudinary, AWS, and Firebase for content management.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      technologies: ['React', 'Firebase', 'Cloudinary', 'AWS', 'Prisma'],
      category: 'EdTech Platform',
      icon: Smartphone,
      github: 'https://github.com/brightokyere',
      demo: 'https://app.muna-world.org/'
    },
    {
      title: 'Kabod Group Website Revamp',
      description: 'Led full-scale revamp of corporate website with modern responsive UI/UX, optimized performance, accessibility, and SEO structure using WordPress.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      technologies: ['WordPress', 'Responsive Design', 'SEO', 'Performance Optimization'],
      category: 'Web Development',
      icon: Globe,
      github: 'https://github.com/brightokyere',
      demo: '#'
    },
    {
      title: 'MyHealthCop Backend System',
      description: 'Developed complex backend services using Django and GraphQL, resulting in 35% increase in user engagement and 40% increase in revenue with comprehensive QA testing.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      technologies: ['Django', 'Python', 'GraphQL', 'PostgreSQL', 'QA Testing'],
      category: 'Backend Development',
      icon: Code,
      github: 'https://github.com/brightokyere',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions and technical excellence across 
            various domains and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 text-gray-900 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <project.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;