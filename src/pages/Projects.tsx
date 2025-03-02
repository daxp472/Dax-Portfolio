import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/projects/ProjectCard';
import FeaturedProject from '@/components/projects/FeaturedProject';
import TechStackChart from '@/components/projects/TechStackChart';
import { VolumeX, Volume2 } from 'lucide-react';

const projects = [
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates.',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://task-sync-1.netlify.app/',
    githubUrl: 'https://github.com/daxp472/TaskSync',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather updates with interactive maps.',
    techStack: ['React', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://weather-sphere-1.netlify.app/',
    githubUrl: 'https://github.com/daxp472/WeatherSphere',
  },
  {
    title: "Ultimate Explore",
    description: "A React-based project utilizing external APIs for dynamic data fetching and exploration.",
    techStack: ["React", "External APIs"],
    liveUrl: "https://api-project-by-dax.netlify.app/",
    githubUrl: "https://github.com/daxp472/React-API"
  },  
  {
    title: 'PrimePlay',
    description: 'A movie search app with ratings and trailer view.',
    techStack: ['React', 'TMDb API', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/daxp472/primeplay',
  }
];

const figmaProjects = [
  {
    title: 'GameZone UI Design',
    description: 'A modern and immersive gaming platform interface designed with user experience in mind. Features include game discovery, user profiles, and social integration.',
    techStack: ['Figma', 'UI/UX', 'Design System'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
    liveUrl: 'https://www.figma.com/design/G132E1ohYFA7hwn16abR8p/Game?node-id=0-1&t=T0KlfvNo3UuwTwD7-1',
    challenges: [
      'Creating an intuitive navigation system',
      'Designing responsive layouts for multiple devices',
      'Implementing a cohesive design system'
    ]
  },
  {
    title: 'Health Bot Interface',
    description: 'An AI-powered healthcare assistant interface designed to provide accessible medical information and symptom checking.',
    techStack: ['Figma', 'UI/UX', 'Healthcare'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070',
    liveUrl: 'https://www.figma.com/',
    challenges: [
      'Ensuring accessibility for all users',
      'Simplifying complex medical information',
      'Creating a trustworthy and professional appearance'
    ]
  },
  {
    title: 'Smart Home Dashboard',
    description: 'A comprehensive smart home control interface that allows users to manage all their connected devices from one place.',
    techStack: ['Figma', 'IoT', 'Dashboard'],
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070',
    liveUrl: 'https://www.figma.com/',
    challenges: [
      'Organizing complex device controls intuitively',
      'Creating a responsive and adaptive layout',
      'Implementing real-time status indicators'
    ]
  }
];

const featuredProject = {
  title: 'GameZone - Ultimate Gaming Hub',
  description: 'A dynamic gaming platform that provides game details, ratings, and trailers in one place.',
  techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  challenges: [
    'Optimizing API calls for seamless game data fetching',
    'Enhancing UI/UX for better user engagement',
    'Implementing efficient state management for performance',
  ],
  imageUrl: 'https://images.unsplash.com/photo-1555617981-3b41c2f84b29?q=80&w=2070',
  liveUrl: 'https://gamezoneofficial.netlify.app',
  githubUrl: 'https://github.com/daxp472/game_zone',
};

const allTechStacks = Array.from(
  new Set(projects.flatMap((project) => project.techStack))
);

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const filteredProjects = selectedTech
    ? projects.filter((project) => project.techStack.includes(selectedTech))
    : projects;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* GameZone Video Showcase */}
      <section className="relative py-16 bg-gradient-to-r from-[#5E65EF]/20 via-primary/10 to-[#5E65EF]/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5E65EF] to-primary">
              GameZone Project Showcase
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch my detailed walkthrough of the GameZone project, explaining key features and implementation details
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(94,101,239,0.3)]"
          >
            <div className="relative aspect-video">
              <iframe 
                src={`https://www.youtube.com/embed/GdH-gLpMqZY?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=GdH-gLpMqZY`}
                title="GameZone Project Walkthrough by Dax Patel" 
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              
              <Button 
                variant="outline" 
                size="icon" 
                className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/90 z-10"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
            </div>
            
            <motion.div 
              className="absolute inset-0 border-4 border-[#5E65EF]/30 rounded-xl pointer-events-none"
              animate={{ 
                boxShadow: ['0 0 10px rgba(94,101,239,0.3)', '0 0 30px rgba(94,101,239,0.6)', '0 0 10px rgba(94,101,239,0.3)'] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button asChild className="bg-[#5E65EF] hover:bg-[#5E65EF]/90">
              <a href="https://gamezoneofficial.netlify.app" target="_blank" rel="noopener noreferrer">
                Visit Live Site
              </a>
            </Button>
            <Button variant="outline" asChild className="border-[#5E65EF] text-[#5E65EF] hover:bg-[#5E65EF]/10">
              <a href="https://github.com/daxp472/game_zone" target="_blank" rel="noopener noreferrer">
                View Source Code
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Showcasing My Best Work
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A collection of projects built with passion, skill, and innovation.
            </p>
            <Button asChild>
              <a href="/contact">Let's Build One Together!</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Project
          </motion.h2>
          <FeaturedProject {...featuredProject} />
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="development" className="w-full">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2 mx-auto mb-12">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="design">UI/UX Design</TabsTrigger>
            </TabsList>

            {/* Development Projects */}
            <TabsContent value="development">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-8"
              >
                Development Projects
              </motion.h2>

              {/* Tech Stack Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-12">
                <Button
                  variant={selectedTech === null ? 'default' : 'outline'}
                  onClick={() => setSelectedTech(null)}
                  size="sm"
                >
                  All
                </Button>
                {allTechStacks.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTech === tech ? 'default' : 'outline'}
                    onClick={() => setSelectedTech(tech)}
                    size="sm"
                    className={selectedTech === tech ? 
                      "bg-[#FAFAFA] hover:bg-[#FAFAFA]/90" : 
                      "border-[#5E65EF]/30 hover:border-[#4952ff] hover:bg-[#5E65EF]/10"
                    }
                  >
                    {tech}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title} {...project} delay={index * 0.1} />
                ))}
              </div>
            </TabsContent>

            {/* Figma Designs */}
            <TabsContent value="design">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-center mb-12"
              >
                UI/UX Design Projects
              </motion.h2>
              
              <div className="space-y-12">
                {figmaProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <FeaturedProject {...project} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Tech Stack Breakdown
          </motion.h2>
          <TechStackChart />
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;