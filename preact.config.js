const tailwind = require('preact-cli-tailwind');
const preactCliSvgLoader = require('preact-cli-svg-loader');
const preactCliPostCSS = require('preact-cli-postcss');
const netlifyPlugin = require('preact-cli-plugin-netlify');
const notFoundError = name => `Please pass the ${name} parameter to plugin`;

const defaultParams = {
  regex: /[\w-/:]+(?<!:)/g,
};
// derived from https://github.com/agneym/preact-cli-tailwind
// I got an issue with font so I modify the source and also I added whitelist

module.exports = (config, env, helpers, params = defaultParams) => {
  if (!config) throw new Error(notFoundError('config'));
  if (!env) throw new Error(notFoundError('env'));
  if (!helpers) throw new Error(notFoundError('helpers'));
  const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: ['./build/**/*.js', './build/**/*.html'],
    css: ['./build/**/*.css'],
    whitelist: ['body'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  });

  const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader', 'postcss-scss');
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.plugins;

    // Add tailwind css at the top.
    plugins.unshift(require('tailwindcss'));
    // Add PurgeCSS only in production.
    if (env.production) {
      plugins.push(purgecss);
    }
  });
  return config;
};

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  return config;
};


export default function(config, env, helpers) {
  // Use postcss.config.js instead of default postCSS config
  preactCliPostCSS(config, helpers);
  preactCliSvgLoader(config, helpers);
  netlifyPlugin(config);
}
