import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Mail, ExternalLink } from "lucide-react"

const ContactSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/soham-gandhi-57b856266/",
      color: "primary",
      handle: "@soham-gandhi-57b856266"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/soham-0-0-7",
      color: "secondary",
      handle: "@soham-0-0-7"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/soham___007?igsh=Ym1mOWUzb2t4eG1m&utm_source=qr",
      color: "accent",
      handle: "@soham___007"
    },
    {
      name: "Docker Hub",
      icon: ExternalLink,
      url: "https://hub.docker.com/u/soham794",
      color: "primary",
      handle: "@soham794"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-secondary opacity-10 rounded-full blur-3xl animate-bounce-slow"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on exciting projects? Let's build something amazing together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Email Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Card className="inline-block hover-lift border-2 border-primary/30 bg-card/50 backdrop-blur-sm shadow-primary">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                    <a 
                      href="mailto:sohamgandhi001@gmail.com"
                      className="text-2xl font-orbitron font-bold text-gradient-primary hover:scale-105 transition-transform inline-block"
                    >
                      sohamgandhi001@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className={`
                  h-full hover-lift cursor-pointer border-2 bg-card/50 backdrop-blur-sm transition-all duration-300
                  ${social.color === 'primary' ? 'border-primary/20 hover:border-primary shadow-primary' : 
                    social.color === 'secondary' ? 'border-secondary/20 hover:border-secondary shadow-secondary' : 
                    'border-accent/20 hover:border-accent shadow-accent'}
                `}>
                  <CardContent 
                    className="p-6 text-center"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <div className={`
                      inline-flex p-4 rounded-full mb-4 transition-all duration-300 group-hover:scale-110
                      ${social.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' : 
                        social.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' : 
                        'bg-accent/10 group-hover:bg-accent/20'}
                    `}>
                      <social.icon className={`
                        h-8 w-8 transition-colors duration-300
                        ${social.color === 'primary' ? 'text-primary' : 
                          social.color === 'secondary' ? 'text-secondary' : 
                          'text-accent'}
                      `} />
                    </div>
                    <h3 className={`
                      font-orbitron font-bold text-lg mb-2
                      ${social.color === 'primary' ? 'text-gradient-primary' : 
                        social.color === 'secondary' ? 'text-gradient-secondary' : 
                        'text-gradient-accent'}
                    `}>
                      {social.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-orbitron font-bold">
                Ready to start a project together?
              </h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="gradient-primary shadow-primary hover-lift font-semibold px-8 py-6 text-lg"
                  onClick={() => window.open('mailto:sohamgandhi001@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection