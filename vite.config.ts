import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

// https://vite.dev/config/
// GitHub Pages:
// - With a custom domain (CNAME present), the site is served at '/'
// - Without a custom domain, project pages are served at '/<repo>/'
export default defineConfig(({ mode }) => {
  const hasCname = existsSync(resolve(__dirname, 'CNAME'))

  return {
    base: mode === 'production' ? (hasCname ? '/' : '/AWS-WebApp01/') : '/',
    plugins: [react(), tailwindcss()],
  }
})
