var health=100;
var name="Jake";
var hits=0;

function slap(){
	health-=1;
	hits++;
	update();
	}
function punch(){
	health-=5;
	hits++;
	update();
	}
function kick(){
	health-=10;
	hits++;
	update();
	}
function reset() {
	hits=0;
	health=100;
	update();
}
function update(){
var hp = document.getElementById("health");
hp.innerText = health;
var name1 = document.getElementById("name");
name1.innerText = name;
var hits1 = document.getElementById("hits");
hits1.innerText = hits;
}

