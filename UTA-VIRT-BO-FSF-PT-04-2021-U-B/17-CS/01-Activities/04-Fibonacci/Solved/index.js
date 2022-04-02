const Benchmark = require('benchmark');
const { recursive, linear } = require('./fibonacci');

const num = Math.floor(Math.random() * 10 + 1);
console.log(`Using the number ${num}`);

const suite = new Benchmark.Suite();

suite
  .add('recursive approach', function() {
    recursive(num);
  })
  .add('linear approach', function() {
    linear(num);
  })
  .on('complete', function() {
    this.forEach(result =>
      console.log(
        `${result.name} averaged ${result.stats.mean * 1000} milliseconds.`
      )
    );
  })
  .run();
