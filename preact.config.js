const preactCliSvgLoader = require('preact-cli-svg-loader');
const preactCliPostCSS = require("preact-cli-postcss");

export default function (config, env, helpers) {
  preactCliSvgLoader(config, helpers);
  preactCliPostCSS(config, helpers);
}
