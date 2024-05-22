import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import fs from "fs";
import path from "path";
installGlobals();

const key = fs.readFileSync(path.resolve(__dirname, ".cert/localhost-key.pem"));
const cert = fs.readFileSync(path.resolve(__dirname, ".cert/localhost.pem"));
export default defineConfig({
    plugins: [remix(), tsconfigPaths()],
    server: {
        https: {
            key,
            cert
        },
        host: true // This allows the server to be accessed externally
    }
});
