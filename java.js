
let items = [
   "pineapple",
   "cherry",
   "iceCream",
   "carrot",
   "cola",
];

let slots = [];


let balance = 50;

function rnd(){
  return items[random(items.length)]

}

function random(x){

   return Math.floor(Math.random()*x);

}

let coins = document.getElementById("coins");


for(let i = 0; i < 3; i++) {
	console.log('slot' + i);
	slots[i] = document.getElementById('slot' + i);
}
coins.innerHTML = balance

console.log(rnd())

function rotate() {
    slots[0].className = rnd();
    slots[1].className = rnd();
	slots[2].className = rnd();
	coins.innerHTML = balance
}

rotate();

function superRotate() {
	if (balance <= 0)
	return alert('У вас недостаточно денег на балансе!')
	balance--;
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
