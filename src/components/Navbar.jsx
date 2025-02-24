import { useState } from 'react';
import LoginForm from './LoginForm';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleLogin = () => {
    setIsLoginVisible(true);
  };

  const handleCloseLogin = () => {
    setIsLoginVisible(false);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-white via-gray-100 to-white shadow-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 text-3xl font-bold">R</span>
                  <span className="text-xl font-semibold tracking-wider bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                    ReferralHub
                  </span>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Contact
                </a>
                <button
                  onClick={handleLogin}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Login
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-200 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <button
                onClick={handleLogin}
                className="w-full text-left text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {isLoginVisible && <LoginForm onClose={handleCloseLogin} />}
    </>
  );
}

