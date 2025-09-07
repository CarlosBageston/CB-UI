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

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Build da biblioteca
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"), // seu index.ts
      name: "CBUI", // nome global para UMD
      fileName: (format) => `cb-ui.${format}.js`,
      formats: ["es", "cjs", "umd"], // diferentes formatos de módulo
    },
    rollupOptions: {
      external: ["react", "react-dom", "@ionic/react"], // evita bundlar dependências externas
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
