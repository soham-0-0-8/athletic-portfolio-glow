import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Activity } from "lucide-react"

const ProjectsSection = () => {
  const projects = [
    {
      title: "Robofly Technology Website",
      description: "Summer internship 2025 project, working for Robofly. Upgrading their website's structure, backend as well as hosting structure to make it more attractive, perform better and attract greater audience, in order to promote growth and reach.",
      status: "🔥 Ongoing",
      tech: ["Next.js", "TypeScript", "AWS", "Docker"],
      github: "https://github.com/soham-0-0-7/Robofly-website",
      company: "https://www.linkedin.com/company/robofly-technology/posts/?feedView=all",
      featured: true
    },
    {
      title: "Penny Wise",
      description: "An expense tracker which enables you to keep a perfect track on your savings, investments and expenses, even according to your income range. Built with AWS DynamoDB and hosted on EC2 instance.",
      tech: ["Next.js", "AWS", "TypeScript", "Docker", "Tailwind", "DynamoDB"],
      github: "https://github.com/soham-0-0-7/penny-wise",
      featured: true
    },
    {
      title: "n0tepad",
      description: "A simple notes app with CRUD operations, paired with easy MongoDB setup using Docker Compose - no need for hectic setups, just a couple of commands.",
      tech: ["Next.js", "TypeScript", "Docker", "Tailwind", "MongoDB"],
      github: "https://github.com/soham-0-0-7/n0tepad"
    },
    {
      title: "inkWell",
      description: "A lightweight Library Management Console built using AWS Lambda, DynamoDB, and API Gateway for seamless book management.",
      tech: ["Next.js", "AWS", "TypeScript", "Tailwind", "DynamoDB"],
      github: "https://github.com/soham-0-0-7/inkWell"
    },
    {
      title: "KanbanBoard",
      description: "Full Stack Task Collaboration Dashboard built for Creative Upaay internship — features real-time updates via Socket.IO, JWT authentication, drag & drop task management, due date alerts, and a sleek React + Tailwind UI.",
      tech: ["React.js", "Prisma", "PostgreSQL", "Tailwind"],
      github: "https://github.com/soham-0-0-7/KanbanBoardFrontend",
      githubBackend: "https://github.com/soham-0-0-7/KanbanBoardBackend"
    },
    {
      title: "CoTasker",
      description: "A collaborative event handler where you can work in teams, assigning and distributing work and tasks between team members.",
      tech: ["React", "MongoDB"],
      github: "https://github.com/soham-0-0-7/CoTasker"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Featured <span className="text-gradient-secondary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of innovative projects showcasing full-stack development expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className={`
                h-full hover-lift border-2 bg-card/50 backdrop-blur-sm transition-all duration-300
                ${project.featured 
                  ? 'border-secondary/30 shadow-secondary bg-gradient-to-br from-secondary/5 to-transparent' 
                  : 'border-primary/20 hover:border-primary/40'
                }
              `}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-orbitron font-bold text-xl mb-2 text-gradient-primary">
                        {project.title}
                      </h3>
                      {project.status && (
                        <Badge className="gradient-secondary text-white font-semibold mb-3">
                          <Activity className="mr-1 h-3 w-3" />
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    {project.featured && (
                      <Star className="h-6 w-6 text-secondary fill-secondary/20" />
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-accent/30 text-accent hover:border-accent hover:bg-accent/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className="gradient-primary hover-lift font-semibold"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Frontend
                      </Button>
                    </motion.div>

                    {project.githubBackend && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-primary/40 hover:border-primary hover:bg-primary/10"
                          onClick={() => window.open(project.githubBackend, '_blank')}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Backend
                        </Button>
                      </motion.div>
                    )}

                    {project.company && (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-2 border-secondary/40 hover:border-secondary hover:bg-secondary/10"
                          onClick={() => window.open(project.company, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Company
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection