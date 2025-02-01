import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Tokenomics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="tokenomics" className="py-20 px-4 relative bg-legion-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel text-legion-gold mb-6">
            Tokenomics
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join the LEGION and be part of the next XRP movement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-legion-gray/20 p-8 rounded-lg border border-legion-gold/20"
          >
            <h3 className="text-2xl font-cinzel text-legion-gold mb-4">Token Details</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex justify-between">
                <span>Symbol:</span>
                <span className="text-legion-gold">$LEGION</span>
              </li>
              <li className="flex justify-between">
                <span>Network:</span>
                <span className="text-legion-gold">XRP Ledger</span>
              </li>
              <li className="flex justify-between">
                <span>Total Supply:</span>
                <span className="text-legion-gold">100,000</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-legion-gray/20 p-8 rounded-lg border border-legion-gold/20"
          >
            <h3 className="text-2xl font-cinzel text-legion-gold mb-4">Community Links</h3>
            <div className="space-y-4">
              <a
                href="https://t.me/LEGIONonXRP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-legion-gold"
              >
                <span>Telegram:</span>
                <span>@LEGIONonXRP</span>
              </a>
              <a
                href="https://x.com/LEGlONXRP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-legion-gold"
              >
                <span>Twitter:</span>
                <span>@LEGlONXRP</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics; 