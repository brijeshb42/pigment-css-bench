import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pigment } from "@pigment-css/vite-plugin";

export default defineConfig({
  plugins: [
    react({
      include: /\.(mdx|js|jsx|ts|tsx)$/,
      presets: [
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
      ],
      babel: {
        plugins: [["styled-jsx/babel", { optimizeForSpeed: true }]],
      },
    }),
    pigment({
      displayName: true,
    }),
  ],
  define: {
    __VERSION__: JSON.stringify("benchmark"),
  },
  build: {
    minify: false,
  },
});
