/**
 * export-assets.mjs
 *
 * Run this script ONCE inside the Figma Make environment to copy all
 * figma:asset images into /public/images/ so they are available for
 * a standalone Vite build (GitHub → Vercel).
 *
 * Usage (inside Figma Make terminal):
 *   npm run export-assets
 *
 * What it does:
 *  1. Starts a temporary Vite dev server so figma:asset modules are resolvable.
 *  2. For each known asset hash, loads the module and reads the resolved URL.
 *  3. If the URL is a data-URI it decodes + saves it; if it's an HTTP URL it
 *     fetches + saves it; if it's a local file path it copies it.
 *  4. Writes every file to /public/images/<hash>.png.
 */

import { createServer } from 'vite'
import { mkdir, writeFile, copyFile, access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT = join(__dirname, '..')
const OUT  = join(ROOT, 'public', 'images')

// ─── Complete list of all figma:asset hashes used in this project ────────────
const ASSETS = [
  // Header
  '19348a14bf021d934e45f132a5882c151f5efed0.png',   // logo
  // Home
  '4f19d597a4d0a5b20b23e09d14966920a2a7b153.png',   // hero banner
  // Products
  '7a46e079894e3f86c5e604b2a9fffb01c8ebd53e.png',   // white tee
  '58b974939afa5b74ac27a1da164104038919e2f0.png',   // black tee
  'f0a0a98243ed2a795333b9c165c987466dfd4f81.png',   // orange tee
  'e579d7010e0b6697b2e9f88d3257a9c2515195d3.png',   // mystery tee
  'a67dc446fe898a2c22b4d04550f55129a7ecd1fa.png',   // not today tee
  '2102ab3046489c9007eab7dc7e59c7a63c5f1acb.png',   // hoodie blue
  'ac4d74acb8666f8ca78ebc75ac090ef8552e5fd6.png',   // motor tee
  '9df6f3c5f5fa09a45cf699833420369e1c47fb77.png',   // ecobag
  'ac103307e734728ae62d3b6176274b677ea78a41.png',   // trucker black
  '62bf08dc43a22f51962c98442f1dd66ee73f3c38.png',   // trucker red
  '42254b26764fbbed259b6f0bbbdf21e4df3803c6.png',   // trucker green
  '78eb323cf7c7f11155fc888cb432c6cdc367af60.png',   // trucker model
  'dc12551952ce2e003251c978ba0611a9c3c345c7.png',   // hoodie gray back
  '230974ec7d03e7c2bb5800583765a3d3bc0b7b69.png',   // hoodie gray front
  // About
  '1629d1ad709b65d19a5288947d13c5d58a591f11.png',   // about banner
  '84cbe3d67cfc568a50e98354e485357b060dbcc1.png',   // fabric rolls
  '24811128012c90b063db458185a6ebebe4d6b505.png',   // tape measure
  // Contact
  '5e6b0147ee6a125da23b65bcb4cdae09d5e16a4d.png',   // contact banner
  'd78e6b84dc4b8f12dcd6fc10e7fb3c0a10e34fa5.png',   // horse photo
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function exists(p) {
  try { await access(p); return true } catch { return false }
}

async function saveBuffer(filename, buf) {
  await writeFile(join(OUT, filename), buf)
}

async function handleResolved(filename, resolved) {
  if (!resolved || resolved === '') {
    console.warn(`  ⚠  no resolved value for ${filename}`)
    return false
  }

  // data URI  (e.g. "data:image/png;base64,iVBOR...")
  if (resolved.startsWith('data:')) {
    const comma = resolved.indexOf(',')
    if (comma === -1) { console.warn(`  ⚠  malformed data URI for ${filename}`); return false }
    const b64 = resolved.slice(comma + 1)
    await saveBuffer(filename, Buffer.from(b64, 'base64'))
    return true
  }

  // HTTP / HTTPS URL
  if (resolved.startsWith('http://') || resolved.startsWith('https://')) {
    const res = await fetch(resolved)
    if (!res.ok) { console.warn(`  ⚠  HTTP ${res.status} for ${filename}`); return false }
    await saveBuffer(filename, Buffer.from(await res.arrayBuffer()))
    return true
  }

  // Absolute local file path
  if (resolved.startsWith('/') && !resolved.startsWith('/@')) {
    if (await exists(resolved)) {
      await copyFile(resolved, join(OUT, filename))
      return true
    }
  }

  // Vite dev-server relative URL  (e.g. "/@fs/..." or "/figma-assets/...")
  if (resolved.startsWith('/')) {
    const url = `http://localhost:${PORT}${resolved}`
    try {
      const res = await fetch(url)
      if (!res.ok) { console.warn(`  ⚠  dev-server ${res.status} for ${filename}`); return false }
      await saveBuffer(filename, Buffer.from(await res.arrayBuffer()))
      return true
    } catch (e) {
      console.warn(`  ⚠  fetch failed for ${filename}: ${e.message}`)
      return false
    }
  }

  console.warn(`  ⚠  unknown resolved format for ${filename}: ${String(resolved).slice(0, 80)}`)
  return false
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const PORT = 5299

console.log('\n🐴  Champion Horse — asset exporter\n')
console.log(`Output directory: ${OUT}\n`)

await mkdir(OUT, { recursive: true })

let server
try {
  server = await createServer({
    root: ROOT,
    server: { port: PORT, strictPort: true },
    logLevel: 'silent',
  })
  await server.listen()
  console.log(`Vite dev server started on port ${PORT}\n`)
} catch (e) {
  console.error('Failed to start Vite server:', e.message)
  console.error('Make sure nothing else is running on port', PORT)
  process.exit(1)
}

let ok = 0, fail = 0

for (const filename of ASSETS) {
  const alreadyExists = await exists(join(OUT, filename))
  if (alreadyExists) {
    console.log(`  ✓  ${filename}  (already exists, skipped)`)
    ok++
    continue
  }

  try {
    // Use SSR module loading so Figma Make's plugin resolves figma:asset
    const mod = await server.ssrLoadModule(`figma:asset/${filename}`)
    const resolved = mod?.default ?? mod

    const saved = await handleResolved(filename, resolved)
    if (saved) {
      console.log(`  ✓  ${filename}`)
      ok++
    } else {
      fail++
    }
  } catch (e) {
    console.error(`  ✗  ${filename}: ${e.message}`)
    fail++
  }
}

await server.close()

console.log(`\n─────────────────────────────────────────`)
console.log(`  Exported: ${ok}/${ASSETS.length}   Failed: ${fail}`)
console.log(`─────────────────────────────────────────`)

if (fail === 0) {
  console.log('\n✅  All assets exported successfully!')
  console.log('   Commit /public/images/ to your repo and deploy to Vercel.\n')
} else {
  console.log(`\n⚠️  ${fail} asset(s) failed. See warnings above.`)
  console.log('   You may need to export those manually from Figma.\n')
}
