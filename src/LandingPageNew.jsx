import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import MatchCard from './components/MatchCard/MatchCard';
import { MOCK_MATCHES } from './utils/constants';
import { staggerChildren } from './utils/animations';
import CornerHelp from './CornerHelp'
import { useNavigate } from 'react-router-dom';
import PredictionCard from './components/PredictionCard';
const mockPredictions = [
  {
    id: '1',
    match: MOCK_MATCHES[0],
    predictedWinner: 'India',
    confidence: 75,
    status: 'pending'
  },
  {
    id: '2',
    match: MOCK_MATCHES[1],
    predictedWinner: 'England',
    confidence: 85,
    status: 'correct'
  },
  {
    id: '3',
    match: MOCK_MATCHES[2],
    predictedWinner: 'Pakistan',
    confidence: 60,
    status: 'incorrect'
  },
  {
    id: '4',
    match: MOCK_MATCHES[0],
    predictedWinner: 'Australia',
    confidence: 70,
    status: 'pending'
  }
];
const LandingPageNew = () => {
  const navigate = useNavigate();

const handleClick = () => {
  navigate('/all-matches');
};
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Header />
      <HeroBanner />
      <CornerHelp/>
      <motion.main 
        className="max-w-7xl mx-auto px-4 py-12 space-y-20"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <section>
          <motion.div  className="flex justify-between items-center mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Upcoming Matches</h2>
              <p className="text-gray-600">Make your predictions for these exciting matchups!</p>
            </div>
            <motion.button 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
            >
              View All
{/* 
              <Link to="/all-matches">View All</Link> */}
            </motion.button>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_MATCHES.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2 mt-10">Your Predictions</h2>
              <p className="text-gray-600">Track your prediction history and accuracy</p>
            </div>
            <button className="text-blue-600 hover:text-blue-800 transition-colors">
              View History
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockPredictions.map((prediction) => (
              <PredictionCard key={prediction.id} prediction={prediction} />
            ))}
          </div>
        </section>
      </motion.main>
    </div>
  );
};

export default LandingPageNew;