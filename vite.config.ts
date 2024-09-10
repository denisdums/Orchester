import {vitePlugin as remix} from "@remix-run/dev";
import {defineConfig} from "vite";
import {installGlobals} from '@remix-run/node'
import {RemixVitePWA} from '@vite-pwa/remix'
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals()
const {RemixVitePWAPlugin, RemixPWAPreset} = RemixVitePWA()


export default defineConfig({
  plugins: [
    remix({
      presets: [RemixPWAPreset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    RemixVitePWAPlugin({
      // PWA options
    }),
    tsconfigPaths(),
  ],
});
