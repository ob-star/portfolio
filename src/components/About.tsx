import React from 'react';
import { Code2, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Engineering graduate from Ashesi University and MasterCard Foundation Scholar, 
            currently working as a Full Stack Engineer at Muna Kalati Ltd and Webmaster at Kabod Group. 
            I specialize in building scalable web applications, comprehensive QA testing, and delivering 
            enterprise-grade solutions that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Code2 className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Full-Stack Excellence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Experienced in React, Next.js, Django, and Python with a track record of building 
                enterprise platforms like Muna TV and Muna App. I architect scalable solutions 
                using microservice architecture and CI/CD pipelines for high-availability deployments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Quality Assurance</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Developed comprehensive test plans achieving 100% coverage of critical features, 
                resulting in 30% reduction in defects and 25% increase in testing efficiency. 
                Created automated test scripts increasing testing speed by 300%.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-teal-600" />
                <h3 className="text-2xl font-bold text-gray-900">AI Innovation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Currently researching machine learning and Internet of Things technologies. 
                I integrate AI-powered features into web applications and develop intelligent 
                solutions that enhance user experiences and business operations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Professional Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Years of Experience</span>
                    <span className="font-bold text-2xl">3+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Projects Completed</span>
                    <span className="font-bold text-2xl">15+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Testing Efficiency Increase</span>
                    <span className="font-bold text-2xl">300%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Performance Optimization</span>
                    <span className="font-bold text-2xl">40%</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;