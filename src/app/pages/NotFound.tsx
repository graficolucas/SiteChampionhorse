import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página não encontrada</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors"
        >
          VOLTAR PARA HOME
        </Link>
      </div>
    </div>
  );
}
