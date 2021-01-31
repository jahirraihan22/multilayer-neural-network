let neural_network, x1 = 0, x2 = 0;
let epoch = 1000;
let lr = 0.1;

let training_data = [{
    inputs: [0, 0],
    outputs: [0]
  },
  {
    inputs: [0, 1],
    outputs: [1]
  },
  {
    inputs: [1, 0],
    outputs: [1]
  },
  {
    inputs: [1, 1],
    outputs: [0]
  }
];

function setup() {
  neural_network = new NeuralNetwork(2, 4, 1);
  for (let i = 0; i < epoch; i++) {
    let data = random(training_data);
    neural_network.train(data.inputs, data.outputs);
  }
}
function setEpoch(a) { 
  epoch = a;
  setup();
}
function setValue1(x) { 
  x1 = x;
  setup();
}
function setValue2(x) { 
  x2 = x;
  setup();
}
function draw() {
  neural_network.setLearningRate(lr);
  let inputs = [x1, x2];
  let expected_value = (inputs[0] == inputs[1]) ? 0 : 1;
  document.getElementById("result").innerHTML = "<h3>XOR of ("+x1+" , "+x2+") => " + neural_network.predict(inputs) +"</h3><p>Expected Value : "+ expected_value +"</p><p> Epoch : "+epoch+"</p>";
}