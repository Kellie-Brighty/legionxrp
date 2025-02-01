import { motion } from "framer-motion";

const Platforms = () => {
  const platforms = [
    "Mexc",
    "CoinEx",
    "HiBT",
    "Magnetic",
    "FirstLedger",
  ];

  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-cinzel text-gray-400 mb-16 text-center tracking-wider"
        >
          AVAILABLE IN
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-full text-center"
            >
              <span className="text-2xl md:text-3xl text-gray-500 font-cinzel hover:text-legion-gold transition-colors duration-300">
                {platform}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Platforms; 