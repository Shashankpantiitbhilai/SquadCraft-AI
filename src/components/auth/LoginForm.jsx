import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Github } from 'lucide-react';
import InputField from './InputField';
import SocialButton from './SocialButton';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-900">Welcome back</h2>
        <p className="mt-2 text-sm text-blue-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          icon={<Mail className="w-5 h-5 text-blue-500" />}
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          icon={<Lock className="w-5 h-5 text-blue-500" />}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg 
          font-semibold transition-all duration-300 hover:shadow-lg"
        >
          Sign In
        </motion.button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-blue-100"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-blue-600">Or continue with</span>
        </div>
      </div>

      <div className="space-y-3">
        <SocialButton
          icon={<Github className="w-5 h-5" />}
          text="Continue with GitHub"
        />
      </div>
    </motion.div>
  );
};

export default LoginForm;