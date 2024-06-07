import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./"
});

// Add any custom config to be passed to Jest
const config: Config = {
    preset: 'ts-jest',
    coverageProvider: "v8",
    testEnvironment: "node",
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['./jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
