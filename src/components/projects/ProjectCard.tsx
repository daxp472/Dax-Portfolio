import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  delay: number;
}

const ProjectCard = ({ title, description, techStack, liveUrl, githubUrl, delay }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col relative overflow-hidden group">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#5E65EF]/10 via-primary/5 to-[#5E65EF]/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <CardHeader>
          <CardTitle className="text-xl mb-2">
            <motion.span
              initial={{ backgroundPosition: "200% 0" }}
              whileHover={{ backgroundPosition: "0 0" }}
              className="bg-gradient-to-r from-[#5E65EF] to-primary bg-[length:200%_100%] bg-clip-text text-transparent transition-all duration-500"
            >
              {title}
            </motion.span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: delay + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="border-[#5E65EF]/30 hover:border-[#5E65EF] transition-colors duration-300"
                  style={{
                    borderWidth: '1px',
                    backgroundColor: 'transparent'
                  }}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          {liveUrl && (
            <Button variant="default" size="sm" asChild className="glow-on-hover relative z-10">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="relative inline-block transition duration-300 transform">
                <motion.span
                  className="hover:rotate-180 inline-block transition duration-100"
                  whileHover={{ rotate: 180 }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                </motion.span>
                Live Preview
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="glow-on-hover relative z-10 text-[#5E65EF] hover:text-[#5E65EF] hover:border-[#5E65EF] transition-colors duration-300"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="relative inline-block transition duration-300 transform">
                <motion.span
                  className="inline-block transition-transform duration-200 ease-in-out"
                  whileHover={{ rotate: 180 }}
                >
                  <Github className="w-4 h-4 mr-2 align-middle" />
                </motion.span>
                Source Code
              </a>
            </Button>
          )}
        </CardFooter>

      </Card>
    </motion.div>
  );
};

export default ProjectCard;