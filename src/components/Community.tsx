import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface IconProps {
  className?: string;
}

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="community" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel text-primary-light mb-6">
            Join Our Community
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow enthusiasts and stay updated on our latest
            developments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background/50 p-6 rounded-lg border border-primary-light/20 flex items-center justify-center"
            >
              <link.icon className="h-8 w-8 text-primary-light mr-3" />
              <span className="text-xl font-cinzel text-primary-light">
                {link.platform}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const socialLinks = [
  {
    platform: "Twitter",
    url: "#",
    icon: ({ className }: IconProps) => (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    platform: "Telegram",
    url: "https://t.me/LEGIONonXRP",
    icon: ({ className }: IconProps) => (
      <svg className={className} /* rest of svg props */></svg>
    ),
  },
  // Add more social links...
];

export default Community;
