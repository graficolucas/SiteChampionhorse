import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { motion } from "motion/react";
const banner = "/images/4f19d597a4d0a5b20b23e09d14966920a2a7b153.png";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Banner */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${banner})`,
            filter: 'brightness(0.9)'
          }}
        />
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-2xl px-6"
        >
          <h1 className="text-5xl md:text-7xl tracking-tighter text-white mb-6 drop-shadow-md">
            ESSENCIAIS PARA SEU GUARDA ROUPA
          </h1>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              document.getElementById("produtos")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-10 py-4 bg-white text-black text-xs font-medium tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300"
          >
            VER COLEÇÃO
          </motion.button>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section id="produtos" className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-gray-100 pb-8"
        >
          <h2 className="text-2xl tracking-[0.1em] mb-2 uppercase">Produtos</h2>
          <p className="text-sm text-gray-500 uppercase tracking-widest font-light">Ecobag, Camisetas, Moletons & Trucker Hats</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}