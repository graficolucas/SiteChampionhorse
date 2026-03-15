import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/**
 * Standalone fallback plugin for `figma:asset/HASH.png` imports.
 *
 * - Inside Figma Make: Figma's own plugin (enforce:'pre') resolves these first,
 *   so this plugin is never called.
 * - In a standalone Vite build (GitHub CI / Vercel): this plugin resolves every
 *   `figma:asset/HASH.png` import to the string `/images/HASH.png`, which maps
 *   to the file at `public/images/HASH.png`.
 *
 * Run `npm run export-assets` once inside Figma Make to populate public/images/.
 */
function figmaAssetFallbackPlugin(): Plugin {
  return {
    name: 'figma-asset-fallback',
    // enforce:'post' so Figma Make's pre-plugin always wins when present
    enforce: 'post',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        return '\0figma-asset:' + id.slice('figma:asset/'.length)
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma-asset:')) {
        const filename = id.slice('\0figma-asset:'.length)
        return `export default "/images/${filename}"`
      }
    },
  }
}

/**
 * Stub for `figma:foundry-client-api` so standalone builds don't crash.
 */
function figmaFoundryStubPlugin(): Plugin {
  return {
    name: 'figma-foundry-stub',
    enforce: 'post',
    resolveId(id: string) {
      if (id === 'figma:foundry-client-api') {
        return '\0figma-foundry-stub'
      }
    },
    load(id: string) {
      if (id === '\0figma-foundry-stub') {
        return `export default {}`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaFoundryStubPlugin(),
    figmaAssetFallbackPlugin(),
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
