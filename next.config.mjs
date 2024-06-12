/** @type {import('next').NextConfig} */

import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const nextConfig = {
    env: {
        NEXT_PUBLIC_OKTA_CLIENT_ID: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
        NEXT_PUBLIC_OKTA_DOMAIN: process.env.NEXT_PUBLIC_OKTA_DOMAIN,
        NEXT_PUBLIC_OKTA_REDIRECT_URI: process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI
    }
};

export default nextConfig;
