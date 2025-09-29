import React from 'react';
import { Globe, TestTube, Brain, Smartphone, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      icon: Globe,
      title: 'Website Building',
      description: 'Creating responsive, modern websites with cutting-edge technologies',
      technologies: ['React', 'Next.js', 'Django', 'TypeScript', 'Tailwind CSS', 'Express.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TestTube,
      title: 'QA Testing',
      description: 'Comprehensive testing strategies ensuring quality and reliability',
      technologies: ['Jest', 'Cypress', 'Selenium', 'Playwright', 'API Testing', 'Performance Testing','Automated Testing', 'Test Plans', 'Bug Tracking', 'Performance Testing', 'Code Reviews', 'CI/CD'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Intelligent systems and machine learning implementations',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Langchain', 'Vector Databases','Machine Learning', 'IoT Research', 'Python', 'Data Analysis', 'AI Integration', 'Research'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance',
      technologies: ['React Native', 'Mobile UI/UX', 'Cross-platform', 'App Store Deployment', 'Firebase', 'Performance'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Settings,
      title: 'Web Management',
      description: 'Full-stack web management and infrastructure optimization',
            technologies: ['WordPress', 'Wix Platforms', 'Domain Management', 'SEO Optimization', 'AWS', 'PostgreSQL'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expertise & Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging a diverse tech stack to deliver comprehensive solutions 
            across multiple domains and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="p-8 relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${skill.color} rounded-lg mb-6 text-white`}>
                  <skill.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {skill.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-gray-200 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;