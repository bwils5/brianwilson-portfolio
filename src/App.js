import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div
        className="min-h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: `url('/brianwilsondevbackground2.jpg')`,
        }}
      >
        {/* Top Navigation */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6">
          {/* Left Side - Brian Wilson */}
          <h1 className="text-2xl font-bold text-white">Brian Wilson</h1>

          {/* Right Side - Navigation Links */}
          <div className="space-x-6 text-lg">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/projects" className="text-white hover:text-gray-300">
              Projects
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
