import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';
// dotenv.config();

export default defineConfig((env) => ({
  plugins: [react()],
  // define: {
  //   'process.env.KEY': `"${process.env.KEY}"`,
  // },
}));
