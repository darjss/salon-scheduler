// apps/native/metro.config.js

const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

// Expo + monorepo (pnpm) тул файл өргөтгөлүүдийг тохируулна
config.resolver.sourceExts.push("cjs");

module.exports = config;
