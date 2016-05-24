$(document).on("click",function(){

  var random = Math.round(getRandom(1,6));
  var rotation = getRandom(0,180) + " " + getRandom(0,180) + " " + getRandom(0,180);

  if(random == 1) {
    var box = $('<a-entity scale=".5 .5 .5" obj-model="obj: #sketch-obj; mtl: #sketch-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 2) {
    var box = $('<a-entity scale=".5 .5 .5" obj-model="obj: #pointer-obj; mtl: #pointer-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 3) {
    var box = $('<a-entity scale=".5 .5 .5" obj-model="obj: #phone-obj; mtl: #phone-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 4) {
    var box = $('<a-entity scale=".25 .25 .25" obj-model="obj: #oar-obj; mtl: #oar-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 5) {
    var box = $('<a-entity scale=".5 .5 .5" obj-model="obj: #oreo-obj; mtl: #oreo-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 6) {
    var box = $('<a-entity scale=".3 .3 .3" obj-model="obj: #heart-obj; mtl: #heart-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  }


  var camera = $("[camera]");
  var cameraPos = camera.attr("position");
  var x = cameraPos.x;
  var y = cameraPos.y;
  var z = cameraPos.z;

  var cameraAngle = camera.attr("rotation");
  var rX = cameraAngle.x;  // left right
  var rY = cameraAngle.y; // up down
  var distance = 3;
  var angle = rY;

  var opposite = Math.sin(toRadians(rY)) * distance;
  var adjacent = Math.cos(toRadians(rY)) * distance;

  var newX = x - opposite;
  var newZ = z - adjacent;

  box.attr("position", newX + " "  + y + " " + newZ);

  adjacent = -1 * adjacent;

  box.attr("velocity", -1 * opposite + " 4 " + adjacent);
  $("a-scene").append(box);


});

function toRadians (angle) {
  return angle * (Math.PI / 180);
}



function getRandom(min,max){
  return min + Math.random() * (max - min);
}
