import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Resolves `figma:asset/HASH.png` virtual imports to `/images/HASH.png`.
 * Place all asset PNG/JPG files in /public/images/ before building.
 */
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return '\0' + id
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma:asset/')) {
        const filename = id.replace('\0figma:asset/', '')
        return `export default "/images/${filename}"`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
