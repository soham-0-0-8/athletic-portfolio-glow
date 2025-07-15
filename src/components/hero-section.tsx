import { motion } from "framer-motion"
import { ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-pulse-glow"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-bounce-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="mx-auto w-40 h-40 md:w-48 md:h-48 relative"
          >
            <div className="absolute inset-0 bg-gradient-hero rounded-full animate-pulse-glow"></div>
            <img
              src="/lovable-uploads/99f7684c-3dcd-43ad-a190-d6bb93dd9ea2.png"
              alt="Soham Gandhi"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary shadow-glow hover-lift"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-orbitron font-black">
              <span className="hero-text">SOHAM</span>
              <br />
              <span className="text-gradient-primary">GANDHI</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground">
              Full Stack Developer & Computer Engineering Student
            </p>
          </motion.div>

          {/* Funny Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl glow-on-hover">
              <p className="text-lg italic text-foreground/90">
                "I don't always test my code, but when I do, I do it in production. 
                Also, my sleep schedule has a better uptime than most servers! 💤"
              </p>
              <div className="absolute -top-2 -left-2 text-4xl text-primary/60">❝</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="gradient-primary shadow-primary hover-lift font-semibold px-8 py-6 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="border-2 border-primary/40 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg font-semibold hover-lift"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={scrollToAbout}
          >
            <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection