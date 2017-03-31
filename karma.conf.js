module.exports = (config) => {
  const tests = 'src/**/*.js'

  config.set({
    frameworks: ['mocha'],
    webpack: require('./webpack.config')('development'),
    files: [
      {
        pattern: tests
      }
    ],

    // Preprocess through webpack
    preprocessors: {
      [tests]: ['webpack']
    },
    browsers: ["Chrome"],

    singleRun: true
  })
}
