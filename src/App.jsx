import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, GraduationCap, Code, Briefcase, Award, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  
  
  const projects = [
    {
      title: "Interactive Shortest Path Visualizer",
      date: "July 2025",
      tags: ["React", "TypeScript", "Algorithms"],
      description: "Interactive web app teaching Dijkstra, Bellman-Ford, and Floyd-Warshall with real-time graph updates and step-by-step execution.",
      highlights: ["Real-time visualization", "Negative-edge support", "Educational guides"]
    },
    {
      title: "Melody Hub – SaaS Music Platform",
      date: "April 2025",
      tags: ["Full-Stack", "APIs", "SaaS"],
      description: "Full-stack platform with user registration, event booking, feedback systems, and organizer tools for real-time event management.",
      highlights: ["Event booking system", "External API integration", "Real-time management"]
    },
    {
      title: "PC Monitoring Digital Twin",
      date: "March 2023",
      tags: ["Unreal Engine", "3D", "IoT"],
      description: "3D digital twin of university computer labs for remote PC visualization, selection, and energy-efficient shutdown management.",
      highlights: ["Unreal Engine 3D", "Remote management", "Energy optimization"]
    },
    {
      title: "Emotion-Based Music Recommender",
      date: "August 2023",
      tags: ["ML", "Computer Vision", "Python"],
      description: "ML system recommending songs based on facial expression analysis with automated personalized music selection pipeline.",
      highlights: ["Emotion detection", "Image processing", "Personalized recommendations"]
    },
    {
      title: "Multilingual NER System",
      date: "December 2024",
      tags: ["NLP", "PyTorch", "HuggingFace"],
      description: "Cross-lingual Named Entity Recognition system comparing BERT models with multilingual encoders (mBERT, XLM-R) for English-to-Japanese transfer learning.",
      highlights: ["Zero-shot transfer", "0.54 F1 with 1k samples", "WikiAnn dataset (40k samples)"]
    }
  ];

  const skills = {
    "Languages": ["Java", "Python", "C/C++", "JavaScript", "SQL"],
    "Web & Tools": ["React.js", "TypeScript", "Prisma", "HTML/CSS", "Git"],
    "ML & AI": ["Machine Learning", "NLP", "Computer Vision"],
    "Core CS": ["Data Structures", "Algorithms", "OOP", "System Design"]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <header id="about" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-slate-950" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">RT</span>
          <div className="flex gap-8 text-sm">
            {['About', 'Projects', 'Skills', 'Contact'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        <div className="relative z-10 max-w-6xl mx-auto px-8 py-24 text-center">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-4xl font-bold mb-6 shadow-lg shadow-indigo-500/25">
              RS
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Rahul Sushanth Tera
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-6">Computer Science Graduate Student</p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            Building innovative solutions at the intersection of full-stack development, 
            machine learning, and interactive visualization.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:tera.r@northeastern.edu" className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors">
              <Mail size={18} /> Contact Me
            </a>
            <a href="#projects" className="flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-slate-500 rounded-lg transition-colors">
              View Work <ChevronDown size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Education */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap className="text-indigo-400" />
          <h2 className="text-2xl font-bold">Education</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
            <div className="text-indigo-400 text-sm mb-2">Expected May 2027</div>
            <h3 className="text-lg font-semibold mb-1">Master of Science in Computer Science</h3>
            <p className="text-slate-400">Northeastern University - Khoury College</p>
            <p className="text-slate-500 text-sm mt-2">GPA: 3.556/4.0</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
            <div className="text-indigo-400 text-sm mb-2">May 2024</div>
            <h3 className="text-lg font-semibold mb-1">B.Tech in Computer Science</h3>
            <p className="text-slate-400">Keshav Memorial Institute of Technology</p>
            <p className="text-slate-500 text-sm mt-2">GPA: 7.89/10</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Code className="text-indigo-400" />
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>
        <div className="grid gap-6">
          {projects.map((project, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all hover:shadow-lg hover:shadow-indigo-500/5">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-sm">{project.date}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map(h => (
                  <span key={h} className="text-xs text-slate-500">• {h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="text-indigo-400" />
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-indigo-400 font-medium mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-slate-800 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Award className="text-indigo-400" />
          <h2 className="text-2xl font-bold">Leadership & Certifications</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <h3 className="font-semibold mb-2">Martian Summer Internship</h3>
            <p className="text-slate-400 text-sm">Selected participant in competitive internship program</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <h3 className="font-semibold mb-2">AALAP Music Club Lead</h3>
            <p className="text-slate-400 text-sm">Led institute-level events, managing teams and logistics</p>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
            <h3 className="font-semibold mb-2">Event Organizer</h3>
            <p className="text-slate-400 text-sm">Hosted multiple inter and intra-college technical & cultural events</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 max-w-6xl mx-auto">
        <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-slate-900 border border-indigo-500/20">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:tera.r@northeastern.edu" className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Mail size={18} /> tera.r@northeastern.edu
            </a>
            <a href="tel:857-264-6680" className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Phone size={18} /> 857-264-6680
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2025 Rahul Sushanth Tera. Built with passion in Boston.</p>
        </div>
      </footer>
    </div>
  );
}