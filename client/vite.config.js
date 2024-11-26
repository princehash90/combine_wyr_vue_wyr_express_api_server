import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as http from "node:http";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      // request to http://localhost5173/wyr to to http://localhost:3000/wyr
      '/wyr':'http://localhost:3000/'
    }
  }
})
