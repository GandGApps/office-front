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
      "@shared": "/src/shared",
      "@styles": "/src/shared/styles",
      "@hooks": "/src/shared/hooks",
      "@enums": "/src/shared/enums",
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
