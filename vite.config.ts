import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";
import path from "path";

// Paths to the certificate files
const keyPath = path.resolve(__dirname, ".cert", "localhost-key.pem");
const certPath = path.resolve(__dirname, ".cert", "localhost.pem");

// Check if the certificate files exist
const useHttps = fs.existsSync(keyPath) && fs.existsSync(certPath);

// Load SSL certificate and key if they exist
const httpsConfig = useHttps
    ? {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath)
      }
    : undefined;

export default defineConfig({
    plugins: [remix(), tsconfigPaths()],
    server: {
        https: httpsConfig,
        host: true // This allows the server to be accessed externally
    }
});
