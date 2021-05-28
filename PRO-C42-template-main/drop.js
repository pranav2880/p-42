class Drop{
	constructor(x,y)
	{var options={
		restitution:0.1,
		friction:0.02,
		density:0.5,
	}
		
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=5;
		this.body=Bodies.circle(this.x, this.y,5, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			//stroke("black");
			fill("lightblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r)
			pop()
	}

    update(){
        if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

}