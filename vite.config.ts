import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": "/src/app",
      "@entities": "/sr/entities",
      "@features": "/src/features",
      "@pages": "/src/pages",
      "@widgets": "/src/widgets",
      "@assets": "/src/shared/assets",
      "@configs": "/src/shared/configs",
      "@utils": "/src/shared/utils",
      "@components": "/src/shared/components",
      "@styles": "/src/shared/styles"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/shared/styles/vars.scss";`
      }
    }
  }
})
