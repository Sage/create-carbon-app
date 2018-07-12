module.exports = {
  preset: "./node_modules/carbon-factory/jest.conf.json",
  testMatch: [
    '**/__spec__.js',
    '**/*.spec.js'
  ],
  setupFiles: [
    './src/__spec_helper__/index.js'
  ]
};
