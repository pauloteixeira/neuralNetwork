var brain = require("./node_modules/brain/lib/brain");
var network = new brain.NeuralNetwork();
var training = [];

module.exports = {
  neuralTraining: function (obj) {
      for( i=0; i<100; i++ ) {
          var width = Math.floor(Math.random() * 10000);
          var height = Math.floor(Math.random() * 10000);
          training[i] = (width > height) ?
            {input: {w:width,h:height}, output: {horizontal: 1}} :
            {input: {w:width,h:height}, output: {vertical: 1}};
      }

      network.train(training);
      console.log( network.run(obj) );
  }
}
