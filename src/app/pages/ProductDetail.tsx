import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { products } from "../data/products";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState<string>("");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Produto não encontrado</h2>
          <Link to="/" className="text-sm underline">
            Voltar para home
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho");
      return;
    }

    const message = `Olá! Gostaria de fazer um pedido:
    
Produto: ${product.name}
Tamanho: ${selectedSize}
Preço: R$ ${product.price.toFixed(2).replace(".", ",")}

Aguardo retorno para finalizar o pedido!`;

    const whatsappNumber = "5511999999999"; // Substitua pelo seu número
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-60 transition-opacity"
        >
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {product.images.map((image, index) => (
              <div key={index} className="aspect-[3/4] bg-gray-100 overflow-hidden">
                <img
                  src={image}
                  alt={`${product.name} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <h1 className="text-3xl tracking-tight mb-4">{product.name}</h1>
            <p className="text-2xl mb-6">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-sm tracking-wide mb-4">TAMANHO</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border transition-colors ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#25D366] text-white py-4 px-8 flex items-center justify-center gap-3 hover:bg-[#20BA5A] transition-colors text-sm tracking-wide"
            >
              <MessageCircle size={20} />
              FINALIZAR PEDIDO NO WHATSAPP
            </motion.button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Você será redirecionado para o WhatsApp para concluir seu pedido
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}