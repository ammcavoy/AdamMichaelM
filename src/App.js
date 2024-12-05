import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Adam Michael McAvoy</h1>
      <AboutRouteButton/>
      <PicturesRouteButton/>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>Now Listen to Adam rant about how cool he is.</h1>
      <HomeRouteButton/>
      <PicturesRouteButton/>
    </div>
  );
}

function PicturePage() {
  return (
    <div>
      Look at all these cool pictures Adam took
      <HomeRouteButton/>
      <AboutRouteButton/>
    </div>
    
  );
}


function AboutRouteButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/about")}>
      About Adam
    </button>
  );
}

function HomeRouteButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")}>
      Home
    </button>
  );
}

function PicturesRouteButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/pictures")}>
      Pictures Adam Has Taken
    </button>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pictures" element={<PicturePage />} />
      </Routes>
    </Router>
  );
}

export default App;
