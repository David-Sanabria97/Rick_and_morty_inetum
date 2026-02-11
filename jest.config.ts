import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/*.test.ts", "**/*.test.tsx"],
  moduleNameMapper: {
    "\\.(scss|css)$": "identity-obj-proxy",
  },
  modulePathIgnorePatterns: ["<rootDir>/.stryker-tmp"],
};

export default config;
