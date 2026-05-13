import React from 'react';
import { ExternalLink, Github, Code, Zap, Globe, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    
    {
      title: 'MunaFlix - Video Streaming Platform',
      description: 'Scalable Next.js + Mux powered video streaming service for educational content. Built with microservice architecture and CI/CD pipelines for high-availability deployments.',
      image: '/images/mtv.jpg',
      technologies: ['Next.js', 'Mux', 'React', 'Node.js', 'AWS'],
      category: 'Web Development',
      icon: Zap,
      demo: 'https://munaflix.com/'
    },
    {
      title: 'Muna App - Learning Platform',
      description: 'Rich media learning platform featuring animated content, eBooks, and audiobooks. Built with React and integrated with Cloudinary, AWS, and Firebase for content management.',
      image: '/images/app.png',
      technologies: ['React', 'Firebase', 'Cloudinary', 'AWS', 'Prisma'],
      category: 'EdTech Platform',
      icon: Smartphone,
      demo: 'https://app.muna-world.org/'
    },
    {
    title: "Ignivex Solutions",
    description:
      " Built the current platform for Ignivex Solutions. Ignivex  Solutions design, build, and scale modern software solutions  help  businesses grow, innovate, and compete globally. Since our founding,  we’ve been focused on transforming ideas into reliable digital products using cutting-edge technology.",
    image: "/images/ignivex.png",
          demo: 'https://ignivexsolutions.org/',

      icon: Zap,
            category: 'Web Development',
      technologies: ['Vite', 'React', 'Node.js', 'Firebase'],


  },
    {
      title: 'Kabod Group Website Revamp',
      description: 'Led full-scale revamp of corporate website with modern responsive UI/UX, optimized performance, accessibility, and SEO structure using WordPress.',
      image: '/images/kabod.png',
      technologies: ['WordPress', 'Responsive Design', 'SEO', 'Performance Optimization'],
      category: 'Web Development',
      icon: Globe,
      demo: 'https://kabodgroup.com'
    },
     {
    title: "MUNA KALATI",
    description:
      "A creative publishing and media platform centered on storytelling, visual culture, and curated content. The project emphasized clean information architecture, expressive design systems, and flexibility to support evolving creative narratives.",
    image: "/images/mk.png",
          icon: Globe,
      technologies: ['WIX', 'Responsive Design', 'SEO', 'Performance Optimization'],

      category: 'Web Development - WIX',

    demo: "https://munakalati.org",
  },
    {
      title: 'MyHealthCop Backend System',
      description: 'Developed complex backend services using Django and GraphQL, resulting in 35% increase in user engagement and 40% increase in revenue with comprehensive QA testing.',
      image: '/images/myhealthcop.png',
      technologies: ['Django', 'Python', 'GraphQL', 'PostgreSQL', 'QA Testing'],
      category: 'Backend Development',
      icon: Code,
      demo: 'https://myhealthcop.com/'
    }
  ];

  return (
    <section id="projects" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A showcase of innovative solutions and technical excellence across 
            various domains and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-contain group-hover:scale-105 transition-transform duration-300 items-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                
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
            href="https://github.com/ob-star"
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
