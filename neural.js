/**
* NeuralNetwork
* @Author: Paulo A. Teixeira
* Here you can calculate if params width and height represent an horizontal or vertical format
* To run you need call neuralExecute([{w:10,h:100},{w:39,h:5},{w:985,h:205}])
**/

var brain = require("./node_modules/brain/lib/brain");
var network = new brain.NeuralNetwork();
var training = [];

module.exports = {
  neuralTraining: function (obj) {
    console.log("*************************** Treinos ********************************");
      var cnt = 0;
  	  for( var i=0; i<5000; i++ ) {
          	var width  = Math.floor(Math.random() * 10000);
        	  var height = Math.floor(Math.random() * 10000);

  	        training[cnt++] = (width > height) ?
              {input: {w:width,h:height}, output: {horizontal: 1}} :
              {input: {w:width,h:height}, output: {vertical: 1}};
  	  }

      console.log("Params:", obj);

      network.train(training);
      var re = network.run(obj);

      var W = re.horizontal;
      var H = re.vertical;
      console.log("Resultado:", { 'w': W, 'h': H });
      console.log( "O formato é", (W > H) ? 'Horizontal' : 'Vertical');
  },

  neuralExecute: function(arrObj) {
    for (var i=0; i<arrObj.length; i++) {
      this.neuralTraining( arrObj[i] );
    }
  }
}
