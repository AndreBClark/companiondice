const preactCliSvgLoader = require('preact-cli-svg-loader');
const preactCliPostCSS = require("preact-cli-postcss");
const netlifyPlugin = require('preact-cli-plugin-netlify');
export default function (config, env, helpers) {
  preactCliSvgLoader(config, helpers);
  preactCliPostCSS(config, helpers);
  netlifyPlugin(config);
}
