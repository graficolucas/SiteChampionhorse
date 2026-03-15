import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/19348a14bf021d934e45f132a5882c151f5efed0.png";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="block" onClick={() => setMobileOpen(false)}>
            <img src={logo} alt="Champion Horse" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav — sem PRODUTOS */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/sobre"
              className="text-sm tracking-wide hover:opacity-60 transition-opacity"
            >
              SOBRE
            </Link>
            <Link
              to="/contato"
              className="text-sm tracking-wide hover:opacity-60 transition-opacity"
            >
              CONTATO
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2 text-black"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-white border-b border-gray-100 md:hidden"
          >
            <nav className="flex flex-col">
              <Link
                to="/sobre"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-5 text-sm tracking-widest uppercase border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                Sobre
              </Link>
              <Link
                to="/contato"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-5 text-sm tracking-widest uppercase hover:bg-gray-50 transition-colors"
              >
                Contato
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
