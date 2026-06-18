import { Mail, Phone, Clock, FileText, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-24 bg-background">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal as="div" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Have a project in mind? Let's discuss how we can help automate and scale your business.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <Reveal className="space-y-8">
            {/* Phone */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow-primary">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">Phone</h3>
                <a href="tel:+919450935939" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9450935939
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow-primary">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">Email</h3>
                <a href="mailto:consultantskillyug@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  consultantskillyug@gmail.com
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow-primary">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Sunday<br />
                  9:00 AM - 7:00 PM IST
                </p>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={100} className="flex flex-col justify-center">
            <div className="rounded-2xl bg-card border border-border p-8 shadow-card">
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">Send us a message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <Button size="lg" className="w-full gap-2 bg-gradient-primary hover:opacity-90 transition-opacity" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEQ2YLNjB5N9exUh16Izbw3D8PrzXMps1JiA8-OTgodks3uA/viewform" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-5 w-5" />
                  Open Contact Form
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-6">
                We typically respond within 24 business hours.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Social Media Links */}
        <Reveal as="div" className="mt-16 text-center">
          <h3 className="font-display font-semibold text-lg text-foreground mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/company/smartcore-software/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-primary hover:scale-110 transition-transform shadow-glow-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-primary-foreground" />
            </a>
            <a
              href="https://www.instagram.com/skillyug/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gradient-primary hover:scale-110 transition-transform shadow-glow-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-primary-foreground" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
