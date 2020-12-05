class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX=offsetX;
    this.offsetY=offsetY;
      var options={
          bodyA:bodyA,
          bodyB:bodyB,
          pointB:{x:this.offsetX,y:this.offsetY}
        }
    
       this.rope=Matter.Constraint.create(options);
       World.add(world,this.rope);


    }
   display() {
      
      var pointA=this.rope.bodyA.position;
      var pointB=this.rope.bodyB.position;
      
      strokeWeight(3);
      line (pointA.x,pointA.y,pointB.x,pointB.y);
      
   }

}