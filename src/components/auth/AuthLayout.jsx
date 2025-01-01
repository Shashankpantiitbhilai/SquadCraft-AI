import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket } from 'lucide-react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const AuthLayout = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Panel - Decorative Side */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-600 to-blue-800"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] 
          opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative w-full flex flex-col items-center justify-center text-white p-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <div className="flex justify-center">
              {isLogin ? (
                <Rocket className="w-16 h-16 text-blue-200" />
              ) : (
                <Sparkles className="w-16 h-16 text-blue-200" />
              )}
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              {isLogin ? "Welcome Back!" : "Start Your Journey"}
            </h2>
            <p className="text-lg text-blue-100/90 max-w-md">
              {isLogin
                ? "Sign in to continue your adventure with us"
                : "Join our community and discover amazing possibilities"}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12"
          >
            <button
              onClick={toggleForm}
              className="px-8 py-3 border-2 border-blue-200 rounded-lg text-blue-200 
              hover:bg-blue-200 hover:text-blue-800 transition-all duration-300"
            >
              {isLogin ? "Create Account" : "Sign In"}
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Panel - Form Side */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white"
      >
        <div className="w-full max-w-md">
          <motion.div
            key={isLogin ? "login" : "signup"}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isLogin ? <LoginForm /> : <SignupForm />}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;