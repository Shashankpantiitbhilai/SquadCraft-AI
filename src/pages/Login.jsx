import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Login.css";

const Login = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // //   const { user } = useSelector((store) => store.auth);

  // const loginHandler = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("http://127.0.0.1:5000/api/v1/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include",
  //       body: JSON.stringify({
  //         username: username,
  //         password: password,
  //       }),
  //     });
  //     if (response.status === 200) {
  //       const data = await response.json();
  //       if (data.status) {
  //         //   const user = data.user;
  //         //   dispatch(setUser(user));
  //         //   dispatch(setType(user.copyType));
  //         //   dispatch(setOutlineType(user.postType));
  //         alert(data.message);
  //         navigate("/landing");
  //       }
  //     } else if (response.status === 201) {
  //       alert("details are missing.enter correct details");
  //     } else if (response.status === 202) {
  //       alert("user is not registered. go to signup page");
  //       navigate("/signup");
  //     } else if (response.status === 203) {
  //       alert("incorrect password");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //     <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
  //       <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
  //       <form onSubmit={loginHandler}>
  //         <div className="mb-4">
  //           <label className="block text-gray-700">Username</label>
  //           <input
  //             type="text"
  //             value={username}
  //             onChange={(event) => setUsername(event.target.value)}
  //             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             placeholder="Enter your email"
  //           />
  //         </div>
  //         <div className="mb-4">
  //           <label className="block text-gray-700">Password</label>
  //           <input
  //             type="password"
  //             value={password}
  //             onChange={(event) => setPassword(event.target.value)}
  //             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  //             placeholder="Enter your password"
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
  //         >
  //           Login
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );

  const [text, setText] = useState("");
  const words = ["Welcome Back!", "Secure Login", "Your Journey Starts Here"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [formData, setFormData] = useState({
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
    console.log("Login Submitted:", formData);
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
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
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
                <input type="checkbox" /> Remember me
              </label>
            </div>

            <button type="submit" className="login-button">
              Login
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

export default Login;
