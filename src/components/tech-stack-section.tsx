import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cloud, Wrench } from "lucide-react"

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "primary",
      techs: [
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "React", color: "#61DAFB" },
        { name: "Next.js", color: "#000000" },
        { name: "Redux", color: "#764ABC" },
        { name: "TailwindCSS", color: "#06B6D4" },
        { name: "HTML5", color: "#E34F26" },
        { name: "CSS3", color: "#1572B6" },
        { name: "Vite", color: "#646CFF" }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "secondary",
      techs: [
        { name: "Node.js", color: "#339933" },
        { name: "Express", color: "#000000" },
        { name: "MongoDB", color: "#47A248" },
        { name: "PostgreSQL", color: "#4169E1" },
        { name: "MySQL", color: "#4479A1" },
        { name: "Prisma", color: "#2D3748" },
        { name: "PHP", color: "#777BB4" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "accent",
      techs: [
        { name: "AWS", color: "#232F3E" },
        { name: "Docker", color: "#2496ED" }
      ]
    },
    {
      title: "Programming Languages",
      icon: Wrench,
      color: "primary",
      techs: [
        { name: "C", color: "#A8B9CC" },
        { name: "C++", color: "#00599C" },
        { name: "Java", color: "#007396" }
      ]
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-accent opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Tech <span className="text-gradient-primary">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Arsenal of cutting-edge technologies I use to build amazing digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`
                hover-lift h-full border-2 bg-card/50 backdrop-blur-sm
                ${category.color === 'primary' ? 'border-primary/20 shadow-primary' : 
                  category.color === 'secondary' ? 'border-secondary/20 shadow-secondary' : 
                  'border-accent/20 shadow-accent'}
              `}>
                <CardContent className="p-6 h-full">
                  <div className="flex items-center mb-6">
                    <div className={`
                      p-3 rounded-lg mr-3
                      ${category.color === 'primary' ? 'bg-primary/10' : 
                        category.color === 'secondary' ? 'bg-secondary/10' : 
                        'bg-accent/10'}
                    `}>
                      <category.icon className={`
                        h-6 w-6
                        ${category.color === 'primary' ? 'text-primary' : 
                          category.color === 'secondary' ? 'text-secondary' : 
                          'text-accent'}
                      `} />
                    </div>
                    <h3 className={`
                      font-orbitron font-bold text-lg
                      ${category.color === 'primary' ? 'text-gradient-primary' : 
                        category.color === 'secondary' ? 'text-gradient-secondary' : 
                        'text-gradient-accent'}
                    `}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.techs.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (techIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        <Badge 
                          variant="outline" 
                          className={`
                            w-full justify-start py-2 px-3 font-medium border-2 hover-lift
                            ${category.color === 'primary' ? 'border-primary/30 hover:border-primary hover:bg-primary/5' : 
                              category.color === 'secondary' ? 'border-secondary/30 hover:border-secondary hover:bg-secondary/5' : 
                              'border-accent/30 hover:border-accent hover:bg-accent/5'}
                          `}
                        >
                          <div 
                            className="w-3 h-3 rounded-full mr-2 border border-white/20"
                            style={{ backgroundColor: tech.color }}
                          />
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
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

export default TechStackSection