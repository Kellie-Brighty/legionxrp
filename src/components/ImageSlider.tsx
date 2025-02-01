import { motion } from "framer-motion";

const ImageSlider = () => {
  const topImages = [
    "/image 1.jpg",
    "/image 2.jpg",
    "/image 3.jpg",
    "/image 4.jpg",
  ];

  const bottomImages = [
    "/image 5.jpg",
    "/image 6.jpg",
    "/image 7.jpg",
    "/image 8.jpg",
  ];

  return (
    <section className="py-20 overflow-hidden bg-legion-black/50">
      <div className="relative">
        {/* Top row - sliding right */}
        <motion.div
          className="flex gap-4 mb-4"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Double the images for seamless loop */}
          {[...topImages, ...topImages].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[200px] rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Bottom row - sliding left */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Double the images for seamless loop */}
          {[...bottomImages, ...bottomImages].map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] h-[200px] rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-legion-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-legion-black to-transparent z-10" />
      </div>
    </section>
  );
};

export default ImageSlider;
