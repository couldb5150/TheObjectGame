var health=100;
function slap(){
	health-=1;
	update();
	}
function update(){
var hp = document.getElementById("health");
hp.innerText = health;
}