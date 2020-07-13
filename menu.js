var FizzyText = function() {
  this.brush = 'dat.gui';
  // this.sound = 'dat.gui';
  this.alpha = 6;
  this.saving = function() {
    save('myCanvas.jpg');
  };
  
};

window.onload = function() {
  var text = new FizzyText();
  var gui = new dat.GUI();

  gui.add(text, 'brush', [ 'squares', 'lines', 'circle1', 'circle2', 'circle3', 'mirrorLine1', 'mirrorLine2', 'mirrorLine3'] ).onChange(function(newValue) {
    selectedBrush = newValue;
    console.log("Value changed to:  ", selectedBrush);
  });

  // gui.add(text, 'sound', [ 'atmos', 'atmos2'] ).onChange(function(newValue) {
  //   player1 = loadSound('assets/'+newValue);
  //   console.log("Value changed to:  ", player1Name);
  // });

  gui.add(text, 'alpha', 0, 50).onChange(function(newValue) {
    alpha = newValue;
    console.log("Value changed to:  ", newValue);
  });

  gui.add(text, 'saving');
};
