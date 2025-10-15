import React from 'react';
import { Experience as ExperienceType } from '../types';
import ExperienceCard from './ExperienceCard';

const experiences: ExperienceType[] = [
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
      'Built and deployed an automated chaos testing framework using AWS FIS, reducing failure detection time by 40% and improving disaster recovery posture by simulating network faults across cloud replication system.',
      'Integrated automated validation tools into CI/CD pipelines leveraging S3, CloudWatch, and ECS, reducing manual effort for 5+ internal teams and improving replication latency validation accuracy by 30%.',
    ],
    technologies: ['AWS (FIS, S3, CloudWatch)', 'CI/CD', 'Python'],
  },
  {
    role: 'Mobile Software Engineer',
    company: 'Google Developers Student Club',
    period: 'Oct. 2024 - Present',
    location: 'Ann Arbor, MI',
    description: [
        'Led a 4-person team to design and ship front-end for All Helps mobile app in collaboration with non-profit organization, deployed on iOS/Android, expanding access to shelter, food, and healthcare for homeless individuals.',
        'Built a dynamic, widget-based user interface leveraging Flutter framework and Dart for rapid feature expansion.',
    ],
    technologies: ['Flutter', 'Dart', 'iOS', 'Android', 'Firebase'],
  },
  {
    role: 'Web Developer',
    company: 'The Michigan Daily Publication',
    period: 'Sep. 2024 - Present',
    location: 'Ann Arbor, MI',
    description: [
      'Spearheaded design and implementation of a full-stack web application showcasing the Daily photography section, leveraging React.js for dynamic front-end user interface and AWS for scalable and reliable hosting.',
      'Implemented performance optimizations for the website, contributing to its sustained attraction of 5 million annual visits and ensuring accessibility for 350,000+ local residents.',
    ],
    technologies: ['React.js', 'AWS', 'JavaScript', 'HTML/CSS'],
  },
  {
    role: 'Discrete Math Instructional Assistant',
    company: 'University of Michigan College of Engineering',
    period: 'Aug. 2023 - Present',
    location: 'Ann Arbor, MI',
    description: [
      'Taught and mentored 700+ students through weekly discussions, office hours, and development of exams.',
      'Led a 5-person subcommittee on exam logistics, streamlining LaTeX typesetting and internal grading workflows.',
    ],
    technologies: ['Teaching', 'Mentoring', 'LaTeX'],
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">Work Experience</h2>
      <div className="relative border-l-2 border-gray-200 ml-4">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;