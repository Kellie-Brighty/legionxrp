import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface IconProps {
  className?: string;
}

interface Feature {
  title: string;
  description: string;
  icon: ({ className }: IconProps) => JSX.Element;
}

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel text-primary-light mb-6">
            About Our Vision
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We are building the future of digital assets on the XRP Ledger. Our
            mission is to create a vibrant ecosystem where innovation meets
            community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-background/50 p-6 rounded-lg border border-primary-light/20"
            >
              <feature.icon className="h-12 w-12 text-primary-light mb-4" />
              <h3 className="text-xl font-cinzel text-primary-light mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features: Feature[] = [
  {
    title: "Community",
    description: "Join our growing community of XRP enthusiasts",
    icon: ({ className }: IconProps) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53..." />
      </svg>
    ),
  },
  // Add more features...
];

export default About;
