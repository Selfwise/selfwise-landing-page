import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/myComponent.vue"),
      name: "myComponent",
      fileName: (format) => `myComponent.${format}.js`,
    },
    rollupOptions: {
      external: [
        "vue",
        // "@/components/ui/button",
        /*
        "@/components/ui/card",
        "@/components/ui/dialog",
        "@/components/ui/input",
        "@/components/ui/switch",
        */
      ],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
