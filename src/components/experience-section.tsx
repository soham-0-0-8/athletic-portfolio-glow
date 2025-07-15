import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const ExperienceSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-secondary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Professional <span className="text-gradient-secondary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions and gaining valuable industry experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="hover-lift border-2 border-secondary/30 bg-card/50 backdrop-blur-sm shadow-secondary">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                {/* Company Logo */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="flex-shrink-0"
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-secondary p-4 rounded-2xl shadow-secondary">
                    <img
                      src="/lovable-uploads/e3fe9b31-3e16-4783-a79b-7b35b726dd61.png"
                      alt="Robofly Technology"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>

                {/* Experience Details */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold text-gradient-secondary">
                        Robofly Technology
                      </h3>
                      <p className="text-lg font-semibold text-primary">
                        Summer Internship - Project Based
                      </p>
                    </div>
                    <Badge className="gradient-secondary text-white font-semibold px-4 py-2 text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      2025
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Building className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        Working on upgrading Robofly Technology's website structure, backend, and hosting 
                        infrastructure to create a more attractive platform that performs better and attracts 
                        a greater audience.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <ExternalLink className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        Focused on promoting growth and reach through improved user experience, 
                        performance optimization, and modern web technologies.
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="border-2 border-secondary/40 hover:border-secondary hover:bg-secondary/10 font-semibold"
                      onClick={() => window.open('https://www.linkedin.com/company/robofly-technology/posts/?feedView=all', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Company
                    </Button>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection