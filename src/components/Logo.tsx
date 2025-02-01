import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "w-32 h-32" }: LogoProps) => {
  return (
    <motion.img
      src="/legion-logo.png"
      alt="Legion Logo"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Logo;
