import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setLoading, setUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import "../styles/Signup.css";

const Signup = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  // const signupHandler = async (event) => {
  //   event.preventDefault();

  //   if (!username || !password) {
  //     alert("Enter the details properly");
  //     console.log("Details have been entered incorrectly");
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://127.0.0.1:5000/api/v1/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //     });

  //     if (response.status === 200) {
  //       const data = await response.json();
  //       if (data.status) {
  //         alert(data.message);
  //         // dispatch(setUser(data.user));
  //         // navigate("/copy-selection");
  //         navigate("/login");
  //       }
  //     } else if (response.status === 201) {
  //       alert("Details are missing");
  //     } else if (response.status === 202) {
  //       alert("User is already present in the database");
  //       navigate("/login");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //     <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
  //       <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

  //       <form onSubmit={signupHandler}>
  //         <div className="mb-4">
  //           <label className="block text-gray-700">Username</label>
  //           <input
  //             type="text"
  //             name="username"
  //             value={username}
  //             onChange={(event) => setUsername(event.target.value)}
  //             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             placeholder="Enter your username"
  //           />
  //         </div>
  //         <div className="mb-4">
  //           <label className="block text-gray-700">Password</label>
  //           <input
  //             type="password"
  //             name="password"
  //             value={password}
  //             onChange={(event) => setPassword(event.target.value)}
  //             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             placeholder="Enter your password"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
  //           // disabled={loading}
  //         >
  //           {/* {loading ? "Signing up..." : "Signup"} */}
  //           Signup
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );

  const [text, setText] = useState("");
  const words = ["Join Us Today!", "Start Your Journey", "Create Account"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    let currentLetterIndex = 0;
    let isAdding = true;

    const typeWriter = () => {
      const currentWord = words[currentWordIndex];

      if (isAdding) {
        if (currentLetterIndex <= currentWord.length) {
          setText(currentWord.slice(0, currentLetterIndex));
          currentLetterIndex++;
        } else {
          setTimeout(() => {
            isAdding = false;
            currentLetterIndex--;
          }, 1000);
        }
      } else {
        if (currentLetterIndex >= 0) {
          setText(currentWord.slice(0, currentLetterIndex));
          currentLetterIndex--;
        } else {
          isAdding = true;
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          currentLetterIndex = 0;
        }
      }
    };

    const interval = setInterval(typeWriter, 200);
    return () => clearInterval(interval);
  }, [currentWordIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp Submitted:", formData);
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="typewriter-section">
          <h1 className="main-text">
            {text}
            <span className="cursor">|</span>
          </h1>
        </div>

        <div className="login-box">
          <h2 className="login-title">Sign Up</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="form-input"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Choose a username"
                className="form-input"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                className="form-input"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> I agree to the Terms & Conditions
              </label>
            </div>

            <button type="submit" className="login-button">
              Sign Up
            </button>
          </form>

          <div className="social-divider">
            <span>or</span>
          </div>

          <button className="guest-button">Continue as Guest</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
