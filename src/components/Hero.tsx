import { motion } from "framer-motion";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { TelegramIcon, TwitterIcon } from "./icons";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/legion-hero-bg.jpg"
          alt="Legion Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#171616]/80 via-[#171616]/50 to-[#171616] z-10" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        <Logo className="w-28 h-28 mx-auto mb-12 mt-12" />


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-6xl font-cinzel text-legion-gold mb-6 tracking-wider"
        >
          A NEW ERA
          <br />
          BEGINS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-2xl text-gray-300 mb-6 tracking-wide"
        >
          FOLLOWING THE RISE OF ARMY
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-1xl text-gray-400 mb-4 max-w-3xl mx-auto"
        >
          A new LEGION emerges to unite the XRP community and reach the millions
          of past Armies
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-6 mb-2"
        >
          <SocialIcon href="https://t.me/LEGIONonXRP">
            <TelegramIcon />
          </SocialIcon>
          <SocialIcon href="https://x.com/LEGlONXRP">
            <TwitterIcon />
          </SocialIcon>
        </motion.div>

        {/* Token Issuer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <span className="text-gray-400">TOKEN ISSUER</span>
          <code className="text-gray-300 bg-[#171616]/50 px-3 py-1 rounded">
            000000000000000000000
          </code>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              navigator.clipboard.writeText("000000000000000000000")
            }
            className="bg-legion-gold/20 hover:bg-legion-gold/30 text-legion-gold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            Copy address
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
