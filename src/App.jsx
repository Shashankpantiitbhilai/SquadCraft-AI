import LandingPage from "../src/LandingPageNew.jsx";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MakeYourTeam from "./pages/MakeYourTeam";
import PlayerJustification from "./pages/PlayerJustification";
import PlayerProfile from "./components/playerProfile/PlayerProfile";
import AllPlayers from "./pages/AllPlayers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { MatchDetails } from "./pages/TeamPage";
import TutorialPage from "./pages/Tutorial";
import AboutPage from "./pages/About";
import Match from "./pages/Match";
import Model1 from "./pages/Model1";
import Model2 from "./pages/Model2";
import Profile from "./pages/Profile";
import AuthLayout from "./components/auth/AuthLayout";
import AllMatches from "./pages/AllMatches";
import LandingPageNew from "./LandingPageNew.jsx";
import MatchesPage from "./MatchesPage.jsx";
import MatchStats from "./pages/MatchStats"
import Predicted from "./Predicted.jsx"
import { InfoPanel } from './components/InfoPanel';  // Import the InfoPanel component
import { useSelector } from 'react-redux'; // Assuming you use Redux for user context
import CornerHelp from "./CornerHelp.jsx"
function App() {
  //  const userContext = useSelector((state) => state.user); // Assuming you have user context in Redux

  const routes = [
    {
      path: "/landing",
      element: <LandingPage />,
    },
    {
      path: "/make-your-team",
      element: <MakeYourTeam />,
    },
    {
      path: "/player-justification",
      element: <PlayerJustification />,
    },
    {
      path: "/player-profile",
      element: <PlayerProfile />,
    },
    {
      path: "/all-players",
      element: <Predicted />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/team-page",
      element: <MatchDetails />,
    },
    {
      path: "/tutorial",
      element: <TutorialPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/match",
      element: <Match />,
    },
    {
      path: "/model1",
      element: <Model1 />,
    },
    {
      path: "/model2",
      element: <Model2 />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/all-matches",
      element: <AllMatches />,
    },
    {
      path:"/predicted",
      element:<Predicted/>
    }
  ];

  return (
    <Router>
       <CornerHelp />
      <Routes>
        
        <Route path="/" element={<Navigate to="/landing" replace />} />
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/login/" element={<AuthLayout />} />
         {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/landing2/" element={<LandingPageNew />} />
         {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/matchespage" element={<MatchStats/>}/>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
