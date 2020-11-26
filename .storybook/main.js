module.exports = {
  stories: ['../stories/**/*.stories.tsx', '../src/**/*.scss'],// 配置编译文件的入口
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],// 配置使用的官方提供的插件
  webpackFinal:config => {

    console.log("-------config-----", config.module.rules)
    // 支持scss文件，其他样式文件，在加入
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'node-sass'],
    });
    return config;
  },
};
