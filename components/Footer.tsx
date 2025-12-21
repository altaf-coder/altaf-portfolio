import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const socialLinks = [
    { icon: Github, href: "https://github.com/codewithkashi", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/codewithkashif/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/majestic.kashif/",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:codewithkashif318@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative py-16 px-4 lg:px-8 mt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-3 mb-6 cursor-pointer hover:opacity-80 transition-opacity text-left"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/logo.jpg"
                  alt="Muhammad Kashif Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Muhammad Kashif</h3>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </button>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Passionate about creating innovative digital solutions that bridge
              the gap between cutting-edge technology and real-world problems.
              Let's build the future together.
            </p>

            <Dock
              direction="middle"
              iconSize={40}
              iconMagnification={60}
              className="mt-0 mx-0"
            >
              {socialLinks.map((social) => (
                <DockIcon key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </DockIcon>
              ))}
            </Dock>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // Check if we're on the home page
                      const isHomePage = pathname === "/";
                      const sectionId = link.href.slice(2); // Remove /#
                      const element = document.querySelector(`#${sectionId}`);

                      if (element && isHomePage) {
                        // If element exists and we're on home page, scroll to it
                        element.scrollIntoView({ behavior: "smooth" });
                      } else {
                        // Navigate to home page with hash using router
                        router.push(link.href);
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group text-left w-full"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="font-semibold mb-6 text-primary">Get in Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:codewithkashif318@gmail.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  codewithkashif318@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-sm">Lahore, Pakistan</p>
              </div>
              <div>
                <Badge variant="secondary" className="glass">
                  <div className="w-2 h-2 bg-accent-subtle rounded-full mr-2 animate-pulse" />
                  Available for hire
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Copyright © 2025. All rights reserved by Muhammad Kashif.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
