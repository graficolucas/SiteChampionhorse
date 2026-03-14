import { Link } from "react-router";
import { motion } from "motion/react";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/produto/${product.id}`} className="group block">
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="space-y-1">
          <h3 className="text-sm tracking-wide">{product.name}</h3>
          <p className="text-sm text-gray-600">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
