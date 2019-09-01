module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0];
      const terserOptions = terserWebpackPlugin.options.terserOptions;
      terserOptions.compress['keep_fnames'] = true;
      terserOptions.compress['keep_classnames'] = true;
      terserOptions.mangle['keep_fnames'] = true;
      terserOptions.mangle['keep_classnames'] = true;
    }
  },
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .tap(options => {
        return {
          vue: {
            root: 'markdown-body'
          }
        };
      });
  }
};
