import { motion } from "framer-motion";

const Values = () => {
  return (
    <section className="py-20 bg-[#C0A080]/10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-cinzel text-[#C0A080] mb-8">About</h2>
          
          <p className="text-xl text-[#C0A080]/90 leading-relaxed">
            In a new era, following the unstoppable rise of ARMY, which was founded almost 
            two years ago and accumulated millions in capital, a new LEGION is formed to 
            bring new XRP community to reach the Millions of past Armies.
          </p>

          <p className="text-xl text-[#C0A080]/90 leading-relaxed">
            Did you miss out on $ARMY? This is your second chance!
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-square">
            <img
              src="/image 8.jpg"
              alt="Legion Soldier"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Diamond overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#C0A080]/10 to-transparent" />
          </div>
          {/* Border frame effect */}
          <div className="absolute inset-4 border border-[#C0A080]/20 rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
