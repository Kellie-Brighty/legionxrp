import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Collection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="collection" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel text-primary-light mb-6">
            Our Collection
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our unique digital assets, each with its own story and value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {nfts.map((nft, index) => (
            <motion.div
              key={nft.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-background/50 rounded-lg overflow-hidden border border-primary-light/20"
            >
              <img src={nft.image} alt={nft.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-cinzel text-primary-light mb-2">{nft.title}</h3>
                <p className="text-gray-400 mb-4">{nft.description}</p>
                <button className="bg-primary-light text-background px-4 py-2 rounded-lg font-bold">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const nfts = [
  {
    title: 'Golden Token',
    description: 'A rare digital asset with unique properties.',
    image: '/path-to-image.jpg',
  },
  // Add more NFTs...
];

export default Collection; 