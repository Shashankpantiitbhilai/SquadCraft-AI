import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const MatchCard = ({ match }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <motion.img 
              src={match.team1.flag} 
              alt={match.team1.name} 
              className="w-12 h-12 rounded-full"
              whileHover={{ scale: 1.1 }}
            />
            <span className="font-semibold">{match.team1.name}</span>
          </div>
          <span className="text-2xl font-bold text-blue-600">VS</span>
          <div className="flex items-center space-x-4">
            <span className="font-semibold">{match.team2.name}</span>
            <motion.img 
              src={match.team2.flag} 
              alt={match.team2.name} 
              className="w-12 h-12 rounded-full"
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{match.timeLeft} left</span>
          </div>
          <span>{match.venue}</span>
        </div>

        <motion.button 
          className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Make Prediction
        </motion.button>
      </div>
    </motion.div>
  );
};

MatchCard.propTypes = {
  match: PropTypes.shape({
    team1: PropTypes.shape({
      name: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired
    }).isRequired,
    team2: PropTypes.shape({
      name: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired
    }).isRequired,
    timeLeft: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired
  }).isRequired
};

export default MatchCard;