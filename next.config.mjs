/** @type {import('next').NextConfig} */
import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import path from "path";
const nextConfig = {
    output: "export",
    distDir: "out", // Specify the output directory for the exported files
    // any other configuration options you might need
    webpack: (config) => {
        config.resolve.alias["pages"] = path.join(process.cwd(), "src/pages");
        return config;
    }
};

export default nextConfig;
