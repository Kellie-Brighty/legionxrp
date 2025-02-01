// import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#171616]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Logo className="h-10 w-10 mr-3" />
              <span className="text-2xl font-cinzel text-legion-gold">
                LEGION
              </span>
            </motion.div>
          </div>
          <div className="hidden">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#tokenomics">Tokenomics</NavLink>
              <NavLink href="#community">Community</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-gray-300 hover:text-legion-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
