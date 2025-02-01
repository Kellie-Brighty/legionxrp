import { motion } from "framer-motion";

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

const SocialIcon = ({ href, children }: SocialIconProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#5BA4FC]/20 p-4 rounded-full hover:bg-[#5BA4FC]/30 transition-colors"
  >
    {children}
  </motion.a>
);

export default SocialIcon; 