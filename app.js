$(document).on("click",function(){


  var random = Math.round(getRandom(1,2));
  var rotation = getRandom(0,180) + " " + getRandom(0,180) + " " + getRandom(0,180);

  // if(random == 1) {
    var box = $('<a-entity obj-model="obj: url(models/sketch.dae)" dynamic-body="shape: box; mass: 2"></a-entity>');
    // var box = $('<a-entity geometry="primitive:box" rotation="'+rotation+'" material="color: pink; opacity: 0"  dynamic-body></a-entity>');
    // var model = $('<a-collada-model scale=".5 .5 .5" position="0 0 0" src="models/sketch.dae"></a-collada-model>');
  // } else if (random == 2) {
    // var box = $('<a-entity geometry="primitive:box" rotation="'+rotation+'" scale="1 1 .2"  material="color: pink; opacity: 0"  dynamic-body></a-entity>');
    // var model = $('<a-collada-model rotation="000" scale=".5 .5 .5" position="0 0 0" src="models/pointer.dae"></a-collada-model>');
  // }

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

    box.attr("velocity", -1 * opposite + " 2 " + adjacent);




  $("a-scene").append(box);
  // box.append(model);

});

function toRadians (angle) {
  return angle * (Math.PI / 180);
}



function getRandom(min,max){
  return min + Math.random() * (max - min);
}
