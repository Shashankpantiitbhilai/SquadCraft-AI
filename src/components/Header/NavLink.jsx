import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const NavLink = ({ href, children }) => {
  return (
    <motion.a
      href={href}
      className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group"
      whileHover={{ scale: 1.05 }}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
    </motion.a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default NavLink;