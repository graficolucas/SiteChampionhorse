import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
import logo from "figma:asset/19348a14bf021d934e45f132a5882c151f5efed0.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="block">
          <img src={logo} alt="Local Brand 26" className="h-10 w-auto" />
        </Link>
        
        <div className="flex-1 flex justify-end items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              PRODUTOS
            </Link>
            <Link to="/sobre" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              SOBRE
            </Link>
            <Link to="/contato" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
              CONTATO
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}