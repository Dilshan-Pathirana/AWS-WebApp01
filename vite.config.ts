import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
// GitHub Pages:
// - With a custom domain (CNAME present), the site is served at '/'
// - Without a custom domain, project pages are served at '/<repo>/'
export default defineConfig(({ mode }) => {
  const rootDir = dirname(fileURLToPath(import.meta.url))
  const hasCname = existsSync(resolve(rootDir, 'CNAME'))
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'My-Portfolio'

  return {
    base: mode === 'production' ? (hasCname ? '/' : `/${repoName}/`) : '/',
    plugins: [react(), tailwindcss()],
  }
})
