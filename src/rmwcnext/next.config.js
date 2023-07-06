module.exports = {
  webpack: (config, { isServer }) => {
    // Add support for TypeScript files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel']
        }
      }
    });

    // Add support for other file types if necessary

    return config;
  }
};
