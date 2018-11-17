
let items = [
   "pineapple",
   "cherry",
   "iceCream",
   "carrot",
   "cola",
];

function rnd(){
  return items[random(items.length)]

}

function random(x){

   return Math.floor(Math.random()*x);

}

let slot1 = document.getElementById('slot1');
let slot2 = document.getElementById('slot2');
let slot3 = document.getElementById('slot3');

console.log(rnd())

function rotate() {
    slot1.className = rnd();
    slot2.className = rnd();
    slot3.className = rnd();
}

rotate();

function superRotate() {
	setTimeout(rotate, 200);
	setTimeout(rotate, 400);
	setTimeout(rotate, 600);
	setTimeout(rotate, 800);
	setTimeout(rotate, 1000);
	setTimeout(rotate, 1200);
	setTimeout(rotate, 1500);
	setTimeout(rotate, 1800);
	setTimeout(rotate, 2200);
	setTimeout(rotate, 2600);
	setTimeout(rotate, 3100);
}

let button = document.getElementById('go');
button.onclick = superRotate;