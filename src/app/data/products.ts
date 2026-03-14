import whiteTee from "figma:asset/7a46e079894e3f86c5e604b2a9fffb01c8ebd53e.png";
import orangeTee from "figma:asset/f0a0a98243ed2a795333b9c165c987466dfd4f81.png";
import ecobag from "figma:asset/9df6f3c5f5fa09a45cf699833420369e1c47fb77.png";
import blackTee from "figma:asset/58b974939afa5b74ac27a1da164104038919e2f0.png";
import truckerBlack from "figma:asset/ac103307e734728ae62d3b6176274b677ea78a41.png";
import truckerRed from "figma:asset/62bf08dc43a22f51962c98442f1dd66ee73f3c38.png";
import truckerGreen from "figma:asset/42254b26764fbbed259b6f0bbbdf21e4df3803c6.png";
import truckerModel from "figma:asset/78eb323cf7c7f11155fc888cb432c6cdc367af60.png";
import hoodieGrayBack from "figma:asset/dc12551952ce2e003251c978ba0611a9c3c345c7.png";
import hoodieGrayFront from "figma:asset/230974ec7d03e7c2bb5800583765a3d3bc0b7b69.png";
import mysteryTee from "figma:asset/e579d7010e0b6697b2e9f88d3257a9c2515195d3.png";
import notTodayTee from "figma:asset/a67dc446fe898a2c22b4d04550f55129a7ecd1fa.png";
import hoodieBlue from "figma:asset/2102ab3046489c9007eab7dc7e59c7a63c5f1acb.png";
import motorTee from "figma:asset/ac4d74acb8666f8ca78ebc75ac090ef8552e5fd6.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "camiseta-champion-horse-white",
    name: "Camiseta Champion Horse White",
    price: 139.90,
    description: "Camiseta premium em algodão com estampa exclusiva Champion Horse. Corte clássico e acabamento de alta qualidade.",
    images: [whiteTee],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "camiseta-champion-horse-black",
    name: "Camiseta Champion Horse Black",
    price: 139.90,
    description: "Versão black da nossa camiseta Champion Horse. Estampa em silk screen de alta durabilidade sobre algodão premium.",
    images: [blackTee],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "camiseta-champion-horse-orange",
    name: "Camiseta Champion Horse Orange",
    price: 139.90,
    description: "Destaque-se com a Champion Horse Orange. Cor vibrante e conforto excepcional para o dia a dia.",
    images: [orangeTee],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "mystery-tee",
    name: "Mystery Tee",
    price: 109.90,
    description: "Camiseta surtida — pode ser qualquer uma dos drops. Escolha seu tamanho apenas.",
    images: [mysteryTee],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "not-today-tee",
    name: "Not Today Tee",
    price: 139.90,
    description: "Camiseta premium com estampa 'Not Today' em silk screen. Caveira em azul com detalhes em vermelho sobre algodão off-white de alta qualidade.",
    images: [notTodayTee],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "moletom-azul-ch",
    name: "Moletom Azul CH",
    price: 239.90,
    description: "Moletom azul royal com estampa exclusiva do cavaleiro esqueleto Champion Horse. Tecido pesado premium, gola careca e tag CH bordada na gola.",
    images: [hoodieBlue],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "motor-championhorse-tee",
    name: "Motor Championhorse Tee",
    price: 139.90,
    description: "Camiseta branca com estampa Motor Championhorse Cycles inspirada no universo das motocicletas. Algodão premium com corte oversized.",
    images: [motorTee],
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "ecobag-not-today",
    name: "Ecobag Not Today",
    price: 79.90,
    description: "Ecobag em lona resistente com estampa 'Not Today'. Perfeita para carregar seus itens essenciais com estilo e consciência.",
    images: [ecobag],
    sizes: ["Único"],
  },
  {
    id: "trucker-hat-classic",
    name: "Trucker Hat Champion Horse",
    price: 129.90,
    description: "Boné estilo trucker com tela respirável, estampa Champion Horse e ajuste traseiro. Disponível em múltiplas cores. O acessório perfeito para completar seu look.",
    images: [truckerBlack, truckerRed, truckerGreen, truckerModel],
    sizes: ["Ajustável"],
  },
  {
    id: "moletom-ch",
    name: "Moletom CH",
    price: 269.90,
    description: "Moletom premium em algodão com capuz e bolso canguru. Estampas exclusivas Champion Horse na frente e nas costas. Conforto e estilo para os dias mais frios.",
    images: [hoodieGrayFront, hoodieGrayBack],
    sizes: ["P", "M", "G", "GG"],
  },
];