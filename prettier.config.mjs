/** @type {import('prettier').Config} */
const config = {
  plugins: ['prettier-plugin-astro'],
  pluginSearchDirs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};

export default config;
