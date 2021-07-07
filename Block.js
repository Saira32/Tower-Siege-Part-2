// In block project saira there is one image that is present and 
// other image is of polygon for which you have created the constraint 
// between point and the polgyon and there should not be any other image 
// present when polygon is hitting the block they should get disappear 
// check your display function of block again and specially that visibility 
// part and when you have added the image when speed is less than 3 check in 
// console if there will be any bug it will show you than try to fix it 
// If its done than very good otherwise we will discuss tomorrow 
// join 10 mins before for next class.



class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png");
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      //rect(pos.x,pos.y,this.width, this.height);
     
      if (this.body.speed < 3){
  
        console.log(this.body.speed)
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)

      }
      else{
        World.remove(world, this.body);
        push();
        this.visibility=this.visibility-5;
        tint(255, this.visibility);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        //tint(255, this.visibility);
        //image(, this.body.position.x, this.body.position.y, 50, 50)
        pop();
      }
      }
    }
