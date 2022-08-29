// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'niftables-dev-collection-bucket.s3.eu-central-1.amazonaws.com',
      'niftables-qa-collection-bucket.s3.eu-central-1.amazonaws.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              {
                name: 'removeViewBox',
                active: false
              }
            ]
          }
        }
      }],
    });

    return config;
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};
