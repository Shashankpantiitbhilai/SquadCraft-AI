import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function InfoPanel({ userContext }) {
   const [helpContent, setHelpContent] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [isVisible, setIsVisible] = useState(true);

   const location = useLocation();

   useEffect(() => {
     const fetchHelpContent = async () => {
       setLoading(true);
       setError(null);
       console.log("genai", location.pathname)
       try {
         const response = await fetch('http://127.0.0.1:5000/api/v1/get-help', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             route: location.pathname,
             context: userContext,
           }),
         });
          
         const data = await response.json();
         setHelpContent(data.suggestions);
       } catch (error) {
         setError('Failed to fetch help content');
         console.error(error);
       } finally {
         setLoading(false);
       }
     };
      
     fetchHelpContent();
   }, [location.pathname, userContext]);

   // If not visible, show a button to take help from AI
   if (!isVisible) {
     return (
       <div 
         onClick={() => setIsVisible(true)}
         className="fixed bottom-8 left-36 bg-blue-500 text-white rounded-lg shadow-xl p-2 w-64 cursor-pointer hover:bg-blue-600 transition-colors duration-300"
       >
         <div className="flex items-center justify-center space-x-2">
           <span>🤖</span>
           <span className="text-sm">Take Help from AI</span>
         </div>
       </div>
     );
   }

   return (
     <div className="fixed bottom-8 left-36 bg-white rounded-lg shadow-xl p-4 w-64 h-[25vh] transform transition-all duration-300 ease-in-out translate-x-0 opacity-100">
       <div className="h-full flex flex-col">
         <div className="flex justify-between items-center mb-2">
           <h2 className="text-lg font-bold text-gray-800">Need Help? 🤖</h2>
           <button 
             onClick={() => setIsVisible(false)}
             className="text-gray-500 hover:text-gray-700 focus:outline-none"
             aria-label="Close AI helper"
           >
             <svg 
               xmlns="http://www.w3.org/2000/svg" 
               className="h-6 w-6" 
               fill="none" 
               viewBox="0 0 24 24" 
               stroke="currentColor"
             >
               <path 
                 strokeLinecap="round" 
                 strokeLinejoin="round" 
                 strokeWidth={2} 
                 d="M6 18L18 6M6 6l12 12" 
               />
             </svg>
           </button>
         </div>
         <div className="bg-blue-50 p-3 rounded-lg flex-grow overflow-y-auto">
           {loading ? (
             <div className="text-blue-700 text-sm">
               <p>👋 Hi there! I'm your AI Assistant Coach 🏆</p>
               <p className="mt-2">I'm here to guide you through predicting the best team and making winning strategies! 💪</p>
               <p className="mt-2">Loading your personalized insights... 🔮</p>
             </div>
           ) : error ? (
             <p className="text-red-500">{error}</p>
           ) : (
             <ul className="text-blue-700 space-y-2 text-sm">
               {helpContent.split('\n').map((line, index) => (
                 <li key={index}>• {line}</li>
               ))}
             </ul>
           )}
         </div>
       </div>
     </div>
   );
}