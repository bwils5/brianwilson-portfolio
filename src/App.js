import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import CustomCursor from './components/CustomCursor';
import PageTransition from './components/PageTransition';
import BackgroundWrapper from './BackgroundWrapper';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
  </div>
);

function AppContent() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Router>
      <BackgroundWrapper>
        <CustomCursor />
        <div
          className="min-h-screen relative bg-cover bg-center transition-all duration-300"
          style={{
            backgroundImage: `url('/brianwilsondevbackground2.webp')`,
          }}
        >
          {/* Top Navigation */}
          <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 glass z-50">
            {/* Left Side - Brian Wilson */}
            <h1 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200">
              Brian Wilson
            </h1>

            {/* Right Side - Navigation Links and Theme Toggle */}
            <div className="flex items-center space-x-6">
              <div className="space-x-6 text-lg">
                <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Home
                </Link>
                <Link to="/projects" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Projects
                </Link>
                <Link to="/about" className="text-white hover:text-gray-300 transition-colors duration-200">
                  About
                </Link>
                <Link to="/contact" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Contact
                </Link>
                <a
                  href="/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Page Content */}
          <div className="pt-20">
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </PageTransition>
              </Suspense>
            </ErrorBoundary>
          </div>
        </div>
      </BackgroundWrapper>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
