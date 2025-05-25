import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-slate-800 font-semibold">
          <Terminal className="h-6 w-6" />
          <span className="text-xl tracking-tight">Localhost Labs</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="https://github.com/karakeep-app/karakeep" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2">
            <Github className="h-5 w-5" />
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4">
          <nav className="flex flex-col gap-4">
            <a 
              href="#projects" 
              className="text-slate-700 hover:text-blue-600 py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-700 hover:text-blue-600 py-2 transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
