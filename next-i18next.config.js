module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "nl"],
  },
  defaultNS: 'common',
  localePath: './public/locales',
  react: {useSuspense: false}
};
