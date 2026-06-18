/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

import tailwindcss from "@tailwindcss/vite";
import visualizer from "rollup-plugin-visualizer";
// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      gzipSize: true,
    }),
  ],
  // Build da biblioteca
  build: {
    lib: {
      entry: {
        "cb-ui": path.resolve(__dirname, "src/index.ts"),
        "datatable": path.resolve(__dirname, "src/datatable.ts"),
        "formikInput": path.resolve(__dirname, "src/formikInput.ts"),
      },
      formats: ["es", "cjs"], // diferentes formatos de módulo (umd não suporta múltiplos pontos de entrada de forma simples)
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@ionic/react",
        "@ionic/core",
        "tailwindcss",
        "clsx",
        "ag-grid-community",
        "ag-grid-react",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@ionic/react": "IonicReact",
        },
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: "playwright",
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
