class food{
    constructor(x,y,width,height,foodStock,lastFed){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("Milk.png");
    }
    
    getFoodStock(){
        var getFoodStock1 = database.ref("Food");
        getFoodStock1.on("value".function(data));
        getFoodStock1 = data.val();
        }  
    
    updateFoodStock(Food){
        database("/").update({
        foodStock: food
        })
        }
    
    deductFood(){
        foodStock = foodStock -1;
    }
    display(){
        imageMode(CENTER);
        var pos = this.body.position
        image(this.image,pos.x,pos.y,50,50);
    }
    }