var inventory = [];

function level1() {
  document.getElementById('button1').style.display="block";
  document.getElementById('button2').style.display="none";
  document.body.style.background="url('../IMG/house.png')";
  document.body.style.backgroundSize='cover';
  document.getElementById('button1').style.display="none";
  document.getElementById('button2').style.display="block";
  document.getElementById('button3').style.display="block";
}

function level2() {
  document.body.style.background="url('../IMG/inside.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="none";
 document.getElementById('button2').style.display="block";
 document.getElementById('button3').style.display="block";
 document.getElementById('button2').innerHTML="Go upstairs";
  document.getElementById('button3').innerHTML="Enter the living room";
  document.getElementById("button2").addEventListener("click", level3);
  document.getElementById("button3").addEventListener("click", leveldead2);
}
function level3() {
  document.body.style.background="url('../IMG/hallway.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="none";
 document.getElementById('button2').style.display="block";
 document.getElementById('button3').style.display="block";
 document.getElementById('button2').innerHTML="Look out the window";
  document.getElementById('button3').innerHTML="Enter the bedroom";
document.getElementById("button2").addEventListener("click", leveldead3);
document.getElementById("button3").addEventListener("click", level4);
}

function level4() {
  document.body.style.background="url('../IMG/slaapkamer.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="none";
 document.getElementById('button2').style.display="block";
 document.getElementById('button3').style.display="block";
 document.getElementById('keys').style.display="block";
 keys.onclick=function(){
   keys.style.display="none"
   inventory.push("keys");
 };
 document.getElementById('button2').innerHTML="you got what you need now leave";
  document.getElementById('button3').innerHTML="Leave right now";
  document.getElementById("button2").addEventListener("click", level5);
  document.getElementById("button3").addEventListener("click", leveldead4);
}

function level5() {
  document.body.style.background="url('../IMG/hallway.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="none";
 document.getElementById('button2').style.display="block";
 document.getElementById('button3').style.display="block";
 document.getElementById('button2').innerHTML="Go down the stairs";
  document.getElementById('button3').innerHTML="go to the end of the hallway";
  document.getElementById("button2").addEventListener("click", leveldead2);
  document.getElementById("button3").addEventListener("click", level6);
 document.getElementById('keys').style.display="none";
}

function level6() {
  document.body.style.background="url('../IMG/piano.jpg')";
  document.body.style.backgroundSize='cover';
  document.getElementById('button1').style.display="none";
  document.getElementById('button2').style.display="block";
  document.getElementById('button3').style.display="block";
  document.getElementById('button2').innerHTML="play the piano";
  document.getElementById('button3').innerHTML="run to the garage";
  document.getElementById("button2").addEventListener("click", level7);
  document.getElementById("button3").addEventListener("click", leveldead5);
 document.getElementById('keys').style.display="none";
}

function level7() {
  document.body.style.background="url('../IMG/piano.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="none";
 document.getElementById('button2').style.display="block";
 document.getElementById('button3').style.display="block";
 document.getElementById('button2').innerHTML="climb out the window";
  document.getElementById('button3').innerHTML="walk to the front door";
  document.getElementById("button2").addEventListener("click", leveldead6);
  document.getElementById("button3").addEventListener("click", level8);
 document.getElementById('keys').style.display="none";
}

function level8() {
  document.body.style.background="url('../IMG/inside.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="none";
 document.getElementById('button2').style.display="block";
 document.getElementById('button3').style.display="block";
 document.getElementById('button2').innerHTML="open the front door";
  document.getElementById('button3').innerHTML="go trough the kitchen door";
  document.getElementById("button2").addEventListener("click", level9);
  document.getElementById("button3").addEventListener("click", leveldead6);
 document.getElementById('keys').style.display="none";
}

function level9() {
  document.body.style.background="url('../IMG/house.png')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="none";
 document.getElementById('button2').style.display="block";
 document.getElementById('button3').style.display="block";
 document.getElementById('button2').innerHTML="Run to the car in the garage";
  document.getElementById('button3').innerHTML="Run to the car at the road";
  document.getElementById("button2").addEventListener("click", leveldead7);
  document.getElementById("button3").addEventListener("click", level10);
 document.getElementById('keys').style.display="none";
}

function level10() {
  document.body.style.background="url('../IMG/car.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="none";
 document.getElementById('button2').style.display="block";
 document.getElementById('button3').style.display="none";
 document.getElementById('button2').innerHTML="use the keys to escape";
 button1.onclick=function(){
        if (inventory.includes("keys")){
            levelfinsish();
        } else {
              leveldeadfinsih();
        }
    };
  document.getElementById("button2").addEventListener("click", levelfinish);
 document.getElementById('keys').style.display="none";
}
function levelfinish() {
  document.body.style.background="url('../IMG/win.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
 document.getElementById('button1').innerHTML="Restart";
 document.getElementById('button1').addEventListener("click", restart);
 document.getElementById('keys').style.display="none";
}

function leveldead1() {
  document.body.style.background="url('../IMG/dead.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
 document.getElementById('button1').innerHTML="Restart";
 document.getElementById('button1').addEventListener("click", restart);
}
function leveldead2() {
  document.body.style.background="url('../IMG/dead1.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
  document.getElementById('button1').innerHTML="Restart";
  document.getElementById('button1').addEventListener("click", restart);
}
function leveldead3() {
  document.body.style.background="url('../IMG/dead2.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
  document.getElementById('button1').innerHTML="Restart";
  document.getElementById('button1').addEventListener("click", restart);
}
function leveldead4() {
  document.body.style.background="url('../IMG/dead3.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
  document.getElementById('button1').innerHTML="Restart";
  document.getElementById('button1').addEventListener("click", restart);
}
function leveldead5() {
  document.body.style.background="url('../IMG/garage.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
  document.getElementById('button1').innerHTML="Restart";
  document.getElementById('button1').addEventListener("click", restart);
}

function leveldead6() {
  document.body.style.background="url('../IMG/raam1.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
  document.getElementById('button1').innerHTML="Restart";
  document.getElementById('button1').addEventListener("click", restart);
}

function leveldead7() {
  document.body.style.background="url('../IMG/cardead.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
  document.getElementById('button1').innerHTML="Restart";
  document.getElementById('button1').addEventListener("click", restart);
}
function leveldeadfinsih() {
  document.body.style.background="url('../IMG/end.jpg')";
 document.body.style.backgroundSize='cover';
 document.getElementById('button1').style.display="block";
 document.getElementById('button2').style.display="none";
 document.getElementById('button3').style.display="none";
  document.getElementById('button1').innerHTML="Restart";
  document.getElementById('button1').addEventListener("click", restart);
}

function restart (){
location.reload();
}
