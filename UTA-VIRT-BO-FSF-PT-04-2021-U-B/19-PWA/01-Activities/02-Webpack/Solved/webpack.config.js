module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};
