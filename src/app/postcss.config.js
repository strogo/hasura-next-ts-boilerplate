const commonPlugins = [
  "tailwindcss",
  "postcss-nested"
];

module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? [
        "@fullhuman/postcss-purgecss",
        [
          'postcss-preset-env',
          {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
            features: {
              'custom-properties': false,
            },
          },
        ],
        ...commonPlugins
      ]
      : commonPlugins
};
