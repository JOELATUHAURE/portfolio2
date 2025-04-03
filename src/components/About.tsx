import React from 'react';

const About = () => {
  const skills = [
    { category: 'Web Development', items: ['React', 'Node.js', 'TypeScript', 'PHP', 'MySQL'] },
    { category: 'Graphics Design', items: ['Adobe Photoshop', 'Illustrator', 'Figma', 'UI/UX Design'] },
    { category: 'IT Support', items: ['System Administration', 'Network Security', 'Hardware Troubleshooting', 'Cloud Services'] },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Bachelor\'s Degree in Computer Science',
      description: 'Graduated with honors, specialized in software development and system administration.',
    },
    {
      year: '2022',
      title: 'IT Support Specialist',
      description: 'Provided technical support and system administration services for various organizations.',
    },
    {
      year: '2021',
      title: 'Freelance Web Developer',
      description: 'Started freelancing, delivering custom web solutions for clients worldwide.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills & Expertise</h3>
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-xl font-medium text-indigo-600 dark:text-indigo-400 mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Career Journey</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-indigo-600 dark:border-indigo-400">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">{item.year}</div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;