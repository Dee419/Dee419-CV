/** @type {import('next').NextConfig} */
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const nextI18nextConfig = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: true,
  i18n: nextI18nextConfig.i18n,
};

export default nextConfig;
