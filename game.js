
//var health=100;
//var name="Jake";
//var hits=0;

var player =
{
	name:"Steve",
	health:100,
	hits:0,
	
	slap: function (){
		this.health-=1;
		this.hits++;
		update();
	},
	punch: function (){
		this.health-=5;
		this.hits++;
		update();
	},
	kick: function (){
		this.health-=10;
		this.hits++;
		update();
	},
	reset: function (){
		this.hits=0;
		this.health=100;
		update();
}
	
}




function update(){
var hp = document.getElementById("health");
hp.innerText = player.health;
var name1 = document.getElementById("name");
name1.innerText = player.name;
var hits1 = document.getElementById("hits");
hits1.innerText = player.hits;
}

