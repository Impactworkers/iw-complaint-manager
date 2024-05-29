import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";
import path from "path";

const keyPath = path.resolve(__dirname, ".cert", "localhost-key.pem");
const certPath = path.resolve(__dirname, ".cert", "localhost.pem");

const useHttps = fs.existsSync(keyPath) && fs.existsSync(certPath);

const httpsConfig = useHttps
    ? {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath)
      }
    : undefined;

export default defineConfig({
    plugins: [remix(), tsconfigPaths()],
    server: {
        proxy: {},
        https: httpsConfig,
        host: true
    }
});
