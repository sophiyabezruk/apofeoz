module.exports = function override(config, env) {
  config.module.rules[2].oneOf[1].options.plugins.push([
    'emotion',
    {
      // sourceMap is on by default but source maps are dead code eliminated in production
      sourceMap: true,
      autoLabel: env !== 'production',
      labelFormat: '[local]',
      cssPropOptimization: true,
    },
  ]);
  return config;
};
