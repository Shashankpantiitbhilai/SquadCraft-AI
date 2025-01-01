import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

function PredictionCard ({ prediction }) {
  const statusConfig = {
    pending: { icon: Clock, color: 'text-yellow-500' },
    correct: { icon: CheckCircle, color: 'text-green-500' },
    incorrect: { icon: XCircle, color: 'text-red-500' }
  };

  const StatusIcon = statusConfig[prediction.status].icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm text-gray-600 mb-1">Your prediction</div>
          <div className="font-semibold text-lg">{prediction.predictedWinner}</div>
        </div>
        <StatusIcon className={`w-6 h-6 ${statusConfig[prediction.status].color}`} />
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="text-sm text-gray-600 mb-2">Confidence</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${prediction.confidence}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};
 export default PredictionCard;