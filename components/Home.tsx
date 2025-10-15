import React, { useState, useEffect } from 'react';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import { Section, Experience as ExperienceType, Project as ProjectType } from '../types';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';

const featuredExperiences: ExperienceType[] = [
    {
    role: 'Software Engineer',
    company: 'G2',
    period: 'Jan 2025 - Present',
    location: 'Chicago, IL',
    description: [
      'Designed and launched an AI-powered interviewer chatbot leveraging Groq LLM and dynamic questionnaires, boosting review completion rates by 20% and streamlining customer feedback collection.',
      'Engineered scalable backend with Redis caching, FastAPI microservices, and MongoDB integration; delivered less than 200ms response times while supporting thousands of concurrent review sessions.',
    ],
    technologies: ['Groq LLM', 'FastAPI', 'MongoDB', 'Redis'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Amazon Web Services',
    period: 'May 2025 - Aug. 2025',
    location: 'Seattle, WA',
    description: [
      'Built and deployed an automated chaos testing framework using AWS FIS, reducing failure detection time by 40% and improving disaster recovery posture.',
      'Integrated automated validation tools into CI/CD pipelines leveraging S3, CloudWatch, and ECS, reducing manual effort for 5+ internal teams.',
    ],
    technologies: ['AWS (FIS, S3, CloudWatch)', 'CI/CD', 'Python'],
  },
   {
    role: 'Mobile Software Engineer',
    company: 'Google Developers Student Club',
    period: 'Oct. 2024 - Present',
    location: 'Ann Arbor, MI',
    description: [
        'Led a 4-person team to design and ship front-end for All Helps mobile app in collaboration with non-profit organization, deployed on iOS/Android.',
        'Built a dynamic, widget-based user interface leveraging Flutter framework and Dart for rapid feature expansion.',
    ],
    technologies: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase'],
  }
];

const featuredProjects: ProjectType[] = [
  {
    title: 'Sharded Paxos Distributed System',
    imageUrl: 'https://picsum.photos/id/180/367/267',
    description: 'Designed and implemented a fault-tolerant sharded key-value store using the Paxos consensus protocol across distributed servers, enabling consistency and dynamic reconfiguration.',
    technologies: ['Go', 'Distributed Systems', 'Paxos', 'RPC'],
    repoUrl: '#',
  },
  {
    title: 'Thread Library',
    imageUrl: 'https://picsum.photos/id/9/367/267',
    description: 'A custom thread library at the operating system level to support user-level threading, enabling efficient context switches, thread creation, and synchronization for over 1000 threads.',
    technologies: ['C++', 'Operating Systems', 'Threading', 'Mutex'],
    repoUrl: '#',
  },
  {
    title: 'All Helps',
    imageUrl: 'https://picsum.photos/id/93/367/267',
    description: 'Partnered with Nevada Homeless Alliance to develop mobile app to expand access to shelter, food, and healthcare to homeless individuals. ',
    technologies: ['Flutter', 'Firebase'],
    repoUrl: '#',
  },
];

interface HomeProps {
    setActiveSection: (section: Section) => void;
}

const roles = ["software engineer", "web developer", "mobile developer", "CS student"];

const Home: React.FC<HomeProps> = ({ setActiveSection }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;

    // If deleting, type back
    if (isDeleting) {
      if (currentRole.length > 0) {
        timer = window.setTimeout(() => {
          setCurrentRole(role => role.substring(0, role.length - 1));
        }, 75); // Deleting speed
      } else {
        // Finished deleting
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    } 
    // If typing
    else {
      if (currentRole.length < roles[roleIndex].length) {
        timer = window.setTimeout(() => {
          setCurrentRole(role => roles[roleIndex].substring(0, role.length + 1));
        }, 150); // Typing speed
      } else {
        // Finished typing, wait then start deleting
        timer = window.setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause before deleting
      }
    }

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);


  return (
    <section id="home" className="animate-fadeIn">
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 pt-12 pb-20">
        
        <div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-black mb-2 tracking-tight">
              Madeleine Hong
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-6 tracking-wide h-12 md:h-14">
              I am a <span className="underline decoration-blue-300 decoration-4 underline-offset-4">{currentRole}</span>
              <span className="inline-block w-1 border-r-4 border-current animate-blink" />
            </h2>
            <p className="max-w-xl text-xl text-gray-600 mb-8 leading-relaxed">
              Aspiring Software Engineer with a passion for building scalable systems and impactful applications. Currently pursuing a Master's in Computer Science at the University of Michigan.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/madohong" className="text-gray-500 hover:text-blue-600 transition-transform hover:scale-110 duration-300" aria-label="GitHub Profile">
                <GitHubIcon className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com/in/madeleinehong1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-transform hover:scale-110 duration-300" aria-label="LinkedIn Profile">
                <LinkedInIcon className="w-8 h-8" />
              </a>
              <a href="mailto:madehong@umich.edu" className="text-gray-500 hover:text-blue-600 transition-transform hover:scale-110 duration-300" aria-label="Email Me">
                <MailIcon className="w-8 h-8" />
              </a>
            </div>
        </div>
      </div>

      <div className="py-12 border-t border-gray-200 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-3xl font-bold text-black mb-8 text-center">Recent Experience</h3>
        <div className="relative border-l-2 border-gray-200 ml-4">
             <div className="space-y-12">
                {featuredExperiences.map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
        </div>
        <div className="text-center mt-12">
            <button onClick={() => setActiveSection('experience')} className="text-blue-600 hover:underline font-semibold transition-colors">
                View All Experience &rarr;
            </button>
        </div>
      </div>

      <div className="py-12 border-t border-gray-200 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <h3 className="text-3xl font-bold text-black mb-8 text-center">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
        <div className="text-center mt-8">
            <button onClick={() => setActiveSection('projects')} className="text-blue-600 hover:underline font-semibold transition-colors">
                View All Projects &rarr;
            </button>
        </div>
      </div>

    </section>
  );
};

export default Home;