$(document).on("ready",function(){



  var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"];

  var numLetters = letters.length;
  var angleDelta = 360 / numLetters;

  var angle = 0;

  for(var i = 0; i < letters.length; i++) {
    var letter = letters[i];


    var entity = $("<a-entity></a-entity>");
    entity.attr("rotation","0 "  + angle + " 0");

    console.log(letter);

    var height = getRandom(0,60);
    var distance = getRandom(-55,-90);


    angle = angle + angleDelta;

    var imageRot = 40 * (height/60);

    var image = $('<a-image rotation="'+imageRot+' 0 0"  height="15" width="50" position="0 '+height+' '+distance+'">');

    var start = getRandom(-10, 40);
    var end = start + 20;
    var dur = getRandom(5000,15000)


    entity.append('<a-animation attribute="rotation" dur="40000" easing="linear" from="0 '+angle+' 0" to="0 '+(angle + 360)+' 0" repeat="indefinite"/>');
    entity.append('<a-animation attribute="position" dur="'+dur+'" direction="alternate" from="0 '+start+' 0" to="0 '+end+' 0" repeat="indefinite"/>');

    image.attr("src","thanks/"+letter+".png");


    entity.append(image);

    $("a-scene").append(entity);

    // entity.append(image);

  }


  var head = document.getElementById("head");
  var ricardo = document.getElementById("ricardo");


  head.addEventListener('collide', function (e) {

    if(!e.detail.body.el.getAttribute("hit")) {

      e.detail.body.el.setAttribute("hit","true");

      var size = parseFloat(head.getAttribute("size"));
      size = size * 1.05;
      head.setAttribute("size",size);
      var scalestring = size + " " + size + " " + size;
      head.setAttribute("scale",scalestring);

      head.setAttribute("height",head.getAttribute("height") * 1.05);
      head.setAttribute("depth",head.getAttribute("depth") * 1.05);
      head.setAttribute("width",head.getAttribute("width") * 1.05);
      ricardo.setAttribute("scale",scalestring);

      playSound("boink");

    }



    // e.detail.target.el;  // Original entity (playerEl).
    // e.detail.body.el;    // Other entity, which playerEl touched.
    // e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
    // e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).

  });


});

$(document).on("click",function(){

  playSound("throw");

  var random = Math.round(getRandom(1,8));
  var rotation = getRandom(0,180) + " " + getRandom(0,180) + " " + getRandom(0,180);

  if(random == 1) {
    var box = $('<a-entity scale=".5 .5 .5" obj-model="obj: #sketch-obj; mtl: #sketch-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 2) {
    var box = $('<a-entity scale=".35 .35 .35" obj-model="obj: #pointer-obj; mtl: #pointer-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 3) {
    var box = $('<a-entity scale=".7 .7 .7" obj-model="obj: #phone-obj; mtl: #phone-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 4) {
    var box = $('<a-entity scale=".35 .35 .35" obj-model="obj: #oar-obj; mtl: #oar-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 5) {
    var box = $('<a-entity scale=".5 .5 .5" obj-model="obj: #oreo-obj; mtl: #oreo-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 6) {
    var box = $('<a-entity scale=".3 .3 .3" obj-model="obj: #heart-obj; mtl: #heart-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 7) {
    var box = $('<a-entity scale=".35 .35 .35" obj-model="obj: #guitar-obj; mtl: #guitar-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
  } else if (random == 8) {
    var box = $('<a-entity scale=".35 .35 .35" obj-model="obj: #toucan-obj; mtl: #toucan-mtl" dynamic-body="shape: box; mass: 2"></a-entity>');
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
