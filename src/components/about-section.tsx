import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Trophy, Target, Zap } from "lucide-react"

const AboutSection = () => {
  const hobbies = [
    { name: "Sleeping", pr: "18 hours", icon: "😴", color: "primary" },
    { name: "Cricket", pr: "224 runs", icon: "🏏", color: "secondary" },
    { name: "Gym", pr: "Always getting better", icon: "💪", color: "accent" }
  ]

  const education = [
    {
      institution: "Pandit Deendayal Energy University",
      degree: "BTech in Computer Engineering",
      duration: "2022 - 2026",
      grade: "9.79 CGPA",
      icon: GraduationCap
    },
    {
      institution: "Shree Swaminarayan Gyankendra Vidyaveli, Umbergaon",
      degree: "12th Standard",
      duration: "2020 - 2022",
      grade: "94%",
      icon: Trophy
    },
    {
      institution: "Shree Swaminarayan Gurukul, Vapi",
      degree: "10th Standard",
      duration: "2018 - 2020",
      grade: "94.8%",
      icon: Target
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
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
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Full Stack Developer crafting digital experiences with cutting-edge technologies.
            Currently pursuing Computer Engineering while building innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Hobbies Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-8 flex items-center">
              <Zap className="mr-3 h-6 w-6 text-primary" />
              Athletic <span className="text-gradient-secondary ml-2">Achievements</span>
            </h3>
            <div className="space-y-4">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-3xl">{hobby.icon}</span>
                          <div>
                            <h4 className="font-semibold text-lg">{hobby.name}</h4>
                            <p className="text-muted-foreground">Personal Record</p>
                          </div>
                        </div>
                        <Badge 
                          className={`
                            ${hobby.color === 'primary' ? 'gradient-primary' : 
                              hobby.color === 'secondary' ? 'gradient-secondary' : 'gradient-accent'} 
                            text-white font-semibold px-4 py-2
                          `}
                        >
                          {hobby.pr}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-accent" />
              Educational <span className="text-gradient-accent ml-2">Journey</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover-lift border-2 border-accent/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <edu.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{edu.institution}</h4>
                          <p className="text-primary font-medium mb-2">{edu.degree}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">{edu.duration}</span>
                            <Badge variant="secondary" className="font-semibold">
                              {edu.grade}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection