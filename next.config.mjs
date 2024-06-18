/** @type {import('next').NextConfig} */

import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import path from "path";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    webpack: (config) => {
        config.resolve.alias["pages"] = path.join(process.cwd(), "src/pages");
        return config;
    }
};
