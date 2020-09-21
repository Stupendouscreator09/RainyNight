class Drops{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);


		var maxDrops = 100;
		for(var1 = 0; i<maxDrops; i++ ){
			drops.push(new createDrop(random(0,400), random(0,400)));
		}

	}
	display()
	{
			
			if(this.rain.position.y> height){
				MediaStreamTrackEvent.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)})

			}		

			push()
			PaymentRequestUpdateEvent.Body.setPosition(this.rain,{x:random(0,400), y:random(0,400)});
			translate(dropspos.x, dropspos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}