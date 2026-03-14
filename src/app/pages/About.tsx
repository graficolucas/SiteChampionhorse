import { motion } from "motion/react";
import bannerAbout from "figma:asset/1629d1ad709b65d19a5288947d13c5d58a591f11.png";
import fabricRolls from "figma:asset/84cbe3d67cfc568a50e98354e485357b060dbcc1.png";
import tapeMeasure from "figma:asset/24811128012c90b063db458185a6ebebe4d6b505.png";

export function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Banner */}
      <div className="relative h-[85vh] overflow-hidden">
        <img
          src={bannerAbout}
          alt="Champion Horse — Produção"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white tracking-tighter uppercase"
          >
            Sobre
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10 mb-24"
        >
          <p className="text-2xl font-light leading-relaxed text-gray-800 tracking-tight">
            A Champion Horse não é apenas uma marca de roupas; é a intersecção bruta entre a cultura do skate e o universo das motos. Fundada por Jamaica Rider, a marca carrega a bagagem de quem cresceu colecionando vivências nas ruas, traduzindo o movimento e a adrenalina em estética têxtil.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 font-light">
            O nome carrega a força e a resistência. Nossa identidade visual bebe da fonte dark-vintage e do design urbano, trazendo elementos como o cromo, as chamas e a iconografia clássica reimaginada para o streetwear contemporâneo.
          </p>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl tracking-tight uppercase">A Essência do Fundador</h2>
            <p className="text-lg leading-relaxed text-gray-600 font-light">
              Jamaica Rider sempre foi movido pelo interesse genuíno nesse ecossistema underground. O que começou nas pistas de skate e nas estradas se transformou em uma curadoria rigorosa de estilo. A Champion Horse é o resultado dessa trajetória: peças que não apenas vestem, mas contam uma história de liberdade e atitude.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl tracking-tight uppercase">O Que Entregamos</h2>
            <p className="text-lg leading-relaxed text-gray-600 font-light">
              Fugimos do comum. Nossas coleções são pensadas para quem busca exclusividade e peças com personalidade forte.
            </p>
            <div className="space-y-4 pl-4 border-l border-gray-200">
              <div>
                <p className="text-gray-900 tracking-tight mb-1">Design Autoral</p>
                <p className="text-gray-600 font-light">Gráficos exclusivos e tipografias que marcam presença.</p>
              </div>
              <div>
                <p className="text-gray-900 tracking-tight mb-1">Edições Limitadas</p>
                <p className="text-gray-600 font-light">Acreditamos no valor do que é escasso. Nossas tiragens são curtas para garantir que cada peça seja um item de colecionador.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src={fabricRolls}
              alt="Rolos de tecido — atelier Champion Horse"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/5] overflow-hidden"
          >
            <img
              src={tapeMeasure}
              alt="Fita métrica — artesanato têxtil"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}