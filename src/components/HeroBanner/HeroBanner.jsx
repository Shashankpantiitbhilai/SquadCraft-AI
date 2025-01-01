import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

const HeroBanner = () => {
  return (
    <div className="relative h-[60vh] overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
      </motion.div>
      
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl leading-tight"
          {...fadeInUp}
          transition={{ delay: 0.2 }}
        >
          Predict Cricket Matches & Challenge Your Knowledge
        </motion.h2>
        <motion.p 
          className="text-xl text-blue-100 max-w-xl mb-8"
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Join thousands of cricket fans in predicting match outcomes and climbing the leaderboard
        </motion.p>
        <motion.button
          className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          Start Predicting
        </motion.button>
      </div>
    </div>
  );
};

export default HeroBanner;