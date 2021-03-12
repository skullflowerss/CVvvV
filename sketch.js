let movers = [];
let col = ["#45a0e6", "#7fc8f8", "#f9f9f9", "#ffe45e", "#ff6392"];
let num = 10;
let status = true

function setup() {
	createCanvas(windowWidth, windowHeight*1.73);
	rectMode(CENTER);
	background(0);

}

function draw() {
	background(0,5)
	if(status){

		for(let i = 0; i < 1; i++){
			movers.push(new particle(mouseX,mouseY))
		}
	}
	
		for(let i = 0; i < movers.length; i++){
			let m = movers[i]
			m.run()
			if(m.isDead()){
				movers.splice(i,1)
			}
		}
	
}

function mousePressed(){
	status = !status;
}

class particle{
	constructor(x,y){
		this.x = x
		this.y = y
		this.angle = random(-TAU,TAU)
		this.sp = int(random(2, 3))
		this.life = int(random(50,100))
		this.lifeVal = this.life
		this.limit = int(random(20, 100))
		this.size = random(5, 10)
		this.col = col[int(random(col.length))]
	}

	display(){
		stroke(this.col)
		noFill()
		let ss = map(this.life,this.lifeVal,0,this.size,0)
		rect(this.x,this.y,ss,ss)
	}

	update(){
		this.x+=cos(this.angle)*this.sp
		this.y+=sin(this.angle)*this.sp

		if (frameCount % this.limit === 0) {

            this.angle += random(1) < 0.5 ? -TWO_PI / 9 : TWO_PI / 9
            this.limit = int(random(20, 50))

        }
		this.life-=0.5;
	}

	isDead(){
		if(this.life < 0){
			return true
		}
		return false
	}
	run(){
		this.display()
		this.update()
	}
}
