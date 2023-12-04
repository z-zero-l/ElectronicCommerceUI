import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 配置别名
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [vue()],
});
