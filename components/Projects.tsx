import React from 'react';
import { Project as ProjectType } from '../types';
import ProjectCard from './ProjectCard';

const projects: ProjectType[] = [
  {
    title: 'Sharded Paxos Distributed System',
    imageUrl: 'https://picsum.photos/id/180/367/267',
    description: 'Designed and implemented a fault-tolerant sharded key-value store using the Paxos consensus protocol across distributed servers, enabling consistency and dynamic reconfiguration of Join, Leave, Move, and Query operations. Engineered shard re-balancing algorithms to support scalability and load balancing.',
    technologies: ['Go', 'Distributed Systems', 'Paxos', 'RPC', 'Scalability'],
    repoUrl: '#',
  },
  {
    title: 'Thread Library',
    imageUrl: 'https://picsum.photos/id/9/367/267',
    description: 'Built a custom thread library at operating system level to support user-level threading, enabling efficient context switches, thread creation, and synchronization to support over 1000 threads concurrently. Implemented core functionalities including mutexes, condition variables, and interrupt handling.',
    technologies: ['C++', 'Operating Systems', 'Threading', 'Concurrency', 'Mutex'],
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

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 animate-fadeIn">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;