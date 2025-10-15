import React from 'react';

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold text-black mt-10 mb-4 pb-2 border-b-2 border-gray-200 uppercase tracking-wider">
        {children}
    </h2>
);

const skills = {
    "Languages": "C++/C, Python, Java, Go, SQL, JavaScript, HTML/CSS",
    "Developer Tools": "VS Code, Visual Studio, Git, Jupyter Notebook, AWS (Cloudwatch, S3, FIS)",
    "Frameworks/Libraries": "React, Node.js, FastAPI, Flask, Pandas, NumPy, TensorFlow"
};

const experiences = [
  {
    role: 'Software Engineer',
    company: 'G2',
    period: 'Jan 2025 - Present',
    location: 'Chicago, IL',
    description: [
      'Designed and launched an AI-powered interviewer chatbot leveraging Groq LLM and dynamic questionnaires, boosting review completion rates by 20% and streamlining customer feedback collection.',
      'Engineered scalable backend with Redis caching, FastAPI microservices, and MongoDB integration; delivered less than 200ms response times while supporting thousands of concurrent review sessions.',
    ],
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
  }
];

const projects = [
    {
        title: "Sharded Paxos Distributed System | Go",
        period: "April 2025 - May 2025",
        description: [
            "Designed and implemented a fault-tolerant sharded key-value store using the Paxos consensus protocol across distributed servers, enabling consistency and dynamic reconfiguration of Join, Leave, Move, and Query operations.",
            "Engineered shard re-balancing algorithms to support scalability and load balancing, leveraging goroutines, channels, and inter-server RPCs for reliable communication under failures."
        ]
    },
    {
        title: "Thread Library | C++",
        period: "Aug. 2024 - Oct. 2024",
        description: [
            "Built a custom thread library at operating system level to support user-level threading, enabling efficient context switches, thread creation, and synchronization to support over 1000 threads concurrently.",
            "Implemented core functionalities including mutexes, condition variables, and interrupt handling, while optimizing scheduling algorithms with FIFO-based queues to enhance performance and concurrency across multiple CPUs."
        ]
    }
];

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-12 bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12 animate-fadeIn">
      <div className="text-center mb-10 pb-6 border-b border-gray-200">
        <h1 className="text-5xl font-extrabold text-black">Madeleine Hong</h1>
        <p className="text-gray-600 mt-2">
          <a href="mailto:madehong@umich.edu" className="text-blue-600 hover:underline">madehong@umich.edu</a> | <a href="https://linkedin.com/in/madeleinehong1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/madeleinehong1</a>
        </p>
         <a
            href="/madeleine-hong-resume.pdf"
            download="MadeleineHong-Resume.pdf"
            className="mt-6 inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
            <DownloadIcon />
            Download Resume
        </a>
      </div>

      <SectionTitle>Education</SectionTitle>
      <div>
        <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold">University of Michigan</h3>
            <span className="text-sm text-gray-600">Ann Arbor, MI</span>
        </div>
        <div className="flex justify-between items-end italic">
            <p>M.S.E in Computer Science</p>
            <span className="text-sm text-gray-600">Jan. 2026 - Dec. 2026</span>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold">University of Michigan</h3>
            <span className="text-sm text-gray-600">Ann Arbor, MI</span>
        </div>
        <div className="flex justify-between items-end italic">
            <p>B.S.E in Computer Science, College of Engineering</p>
            <span className="text-sm text-gray-600">Aug. 2022 - Dec. 2025</span>
        </div>
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li><span className="font-semibold">GPA:</span> 3.92/4.0 | <span className="font-semibold">Awards:</span> William J. Branstorm Freshman Award (top 5%), University Honors, Dean's List</li>
            <li><span className="font-semibold">Course Highlights:</span> Operating Systems, Distributed Systems, Machine Learning, Data Structures, Algorithms, Computer Science Theory</li>
            <li><span className="font-semibold">Activities:</span> Google Developer Club, Michigan Daily Publication, Pops Orchestra, Women in Science Engineering</li>
        </ul>
      </div>

      <SectionTitle>Technical Skills</SectionTitle>
      <div>
        {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="flex flex-col md:flex-row mb-1">
                <p className="font-bold w-full md:w-48 flex-shrink-0">{category}:</p>
                <p className="w-full">{list}</p>
            </div>
        ))}
      </div>
      
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index}>
             <div className="flex justify-between items-end">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <span className="text-sm text-gray-600">{exp.location}</span>
            </div>
            <div className="flex justify-between items-end italic">
                <p>{exp.role}</p>
                <span className="text-sm text-gray-600">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                {exp.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-6">
          {projects.map((proj, index) => (
             <div key={index}>
                <div className="flex justify-between items-end">
                    <h3 className="text-xl font-bold">{proj.title}</h3>
                    <span className="text-sm text-gray-600 italic">{proj.period}</span>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    {proj.description.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
             </div>
          ))}
      </div>
    </section>
  );
};

export default Resume;