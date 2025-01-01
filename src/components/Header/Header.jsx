import { motion } from 'framer-motion';
import { Menu, User } from 'lucide-react';
import { useState } from 'react';
import { NAVIGATION_LINKS } from '../../utils/constants';
import NavLink from './NavLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md py-4 px-6 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">TP</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Team Predictor
          </h1>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION_LINKS.map(link => (
            <NavLink key={link.name} href={link.path}>
              {link.name}
            </NavLink>
          ))}
          
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6 text-blue-600" />
        </button>
      </div>

      <motion.div 
        className={`md:hidden fixed inset-x-0 bg-white shadow-lg`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-4">
          {NAVIGATION_LINKS.map(link => (
            <NavLink key={link.name} href={link.path}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;