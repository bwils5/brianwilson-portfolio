import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => {
      document.body.style.opacity = '0';
    };

    const handleEnd = () => {
      document.body.style.opacity = '1';
    };

    handleStart();
    const timer = setTimeout(handleEnd, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="transition-opacity duration-300 ease-in-out">
      {children}
    </div>
  );
};

export default PageTransition; 