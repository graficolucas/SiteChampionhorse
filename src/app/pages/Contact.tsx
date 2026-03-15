import { motion } from "motion/react";
import { Mail, Instagram, MapPin, Phone } from "lucide-react";
const contactBanner = "/images/5e6b0147ee6a125da23b65bcb4cdae09d5e16a4d.png";
const horsePhoto = "/images/d78e6b84dc4b8f12dcd6fc10e7fb3c0a10e34fa5.png";

export function Contact() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Banner */}
      <div className="relative h-[85vh] overflow-hidden">
        <img
          src={contactBanner}
          alt="Entre em contato"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white tracking-tighter uppercase"
          >
            Contato
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            Estamos aqui para ajudar! Entre em contato conosco
            através de qualquer um dos canais abaixo. Nossa
            equipe responde rapidamente e está sempre pronta
            para auxiliar com dúvidas sobre produtos, pedidos ou
            qualquer outra informação que você precisar.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gray-200 p-8 hover:border-black transition-colors"
          >
            <Phone className="mb-4" size={24} />
            <h3 className="text-lg mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Segunda a sexta, 9h às 18h
            </p>
            <a
              href="https://wa.me/5541995027032"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:no-underline"
            >
              (41) 99502-7032
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-gray-200 p-8 hover:border-black transition-colors"
          >
            <Mail className="mb-4" size={24} />
            <h3 className="text-lg mb-2">E-mail</h3>
            <p className="text-gray-600 mb-4">
              Respondemos em até 24h
            </p>
            <a
              href="mailto:contato@localbrand26.com"
              className="text-sm underline hover:no-underline"
            >
              championhorse.brand@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-gray-200 p-8 hover:border-black transition-colors"
          >
            <Instagram className="mb-4" size={24} />
            <h3 className="text-lg mb-2">Instagram</h3>
            <p className="text-gray-600 mb-4">
              Siga para novidades e lançamentos
            </p>
            <a
              href="https://instagram.com/championhorse_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:no-underline"
            >
              @championhorse_
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border border-gray-200 p-8 hover:border-black transition-colors"
          >
            <MapPin className="mb-4" size={24} />
            <h3 className="text-lg mb-2">Endereço</h3>
            <p className="text-gray-600 mb-4">
              Showroom (com agendamento)
            </p>
            <p className="text-sm">
              martim afonso 3003
              <br />
              Curitiba - PR-BR
            </p>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="aspect-[21/9] overflow-hidden"
        >
          <img
            src={horsePhoto}
            alt="Champion Horse"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}