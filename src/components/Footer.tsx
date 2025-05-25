import { Terminal } from 'lucide-react';
import Container from './ui/Container';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 text-slate-800 font-semibold mb-4">
              <Terminal className="h-6 w-6" />
              <span className="text-xl tracking-tight">Localhost Labs</span>
            </div>
            <p className="text-slate-600 mb-6">
              Building open source solutions for digital sovereignty and privacy.
            </p>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} localhost labs Ltd. Registered in the UK.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
