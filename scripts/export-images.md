# Como exportar as imagens para produção

Antes de fazer o deploy no Vercel, você precisa colocar todas as imagens na pasta `/public/images/`.

## Lista de imagens necessárias

Copie cada arquivo PNG para `/public/images/` mantendo o nome original:

| Arquivo | Uso |
|---|---|
| `19348a14bf021d934e45f132a5882c151f5efed0.png` | Logo (Header) |
| `4f19d597a4d0a5b20b23e09d14966920a2a7b153.png` | Banner Home |
| `7a46e079894e3f86c5e604b2a9fffb01c8ebd53e.png` | Camiseta White |
| `58b974939afa5b74ac27a1da164104038919e2f0.png` | Camiseta Black |
| `f0a0a98243ed2a795333b9c165c987466dfd4f81.png` | Camiseta Orange |
| `e579d7010e0b6697b2e9f88d3257a9c2515195d3.png` | Mystery Tee |
| `a67dc446fe898a2c22b4d04550f55129a7ecd1fa.png` | Not Today Tee |
| `2102ab3046489c9007eab7dc7e59c7a63c5f1acb.png` | Moletom Azul CH |
| `ac4d74acb8666f8ca78ebc75ac090ef8552e5fd6.png` | Motor Championhorse Tee |
| `9df6f3c5f5fa09a45cf699833420369e1c47fb77.png` | Ecobag Not Today |
| `ac103307e734728ae62d3b6176274b677ea78a41.png` | Trucker Hat Black |
| `62bf08dc43a22f51962c98442f1dd66ee73f3c38.png` | Trucker Hat Red |
| `42254b26764fbbed259b6f0bbbdf21e4df3803c6.png` | Trucker Hat Green |
| `78eb323cf7c7f11155fc888cb432c6cdc367af60.png` | Trucker Hat (modelo) |
| `dc12551952ce2e003251c978ba0611a9c3c345c7.png` | Moletom CH (costas) |
| `230974ec7d03e7c2bb5800583765a3d3bc0b7b69.png` | Moletom CH (frente) |
| `1629d1ad709b65d19a5288947d13c5d58a591f11.png` | Banner Sobre |
| `84cbe3d67cfc568a50e98354e485357b060dbcc1.png` | Grid Sobre (esquerda) |
| `24811128012c90b063db458185a6ebebe4d6b505.png` | Grid Sobre (direita) |
| `5e6b0147ee6a125da23b65bcb4cdae09d5e16a4d.png` | Banner Contato |
| `d78e6b84dc4b8f12dcd6fc10e7fb3c0a10e34fa5.png` | Foto grid Contato |

## Como obter os arquivos

No Figma Make, exporte cada imagem pelo painel de assets ou faça download direto via browser (F12 > Network > filtrar por `.png`).

## Deploy

```bash
npm install
npm run build   # gera a pasta dist/
# faça upload da pasta dist/ no Vercel, ou conecte o repositório GitHub
```

O `vercel.json` já está configurado para suportar React Router (SPA routing).
