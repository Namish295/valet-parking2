canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="parkingLot.jpg"

cars_image_array=["car1.jpg","car3.png","car2.png","car4.jpg"];
random_number=Math.floor(Math.random()*4);
console.log (random_number);

car_width=100;
car_height=110;

car_image=cars_image_array[random_number];
console.log ("car_image="+car_image);

car_x=10;
car_y=10;

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    
    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}

function uploadcar()
{
    ctx.drawImage(car_imgTag,car_x,car_y,car_width, car_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    
    if(keyPressed=='37')
    {
        console.log("left");
        left();
    }
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
}

function up()
 {
     if(car_y>=0)
     {
         car_y=car_y-10;
         console.log ("When up is pressed,x="+car_x+"| y="+car_y);
         uploadBackground();
         uploadcar();
     }
 }

 function down()
 {
     if(car_y<=500)
     {
         car_y=car_y+10;
         console.log ("When down is pressed,x="+car_x+"| y="+car_y);
         uploadBackground();
         uploadcar();
     }
 }

 function right()
 {
     if(car_x<=700)
     {
         car_x=car_x+10;
         console.log ("When right is pressed,x="+car_x+"| y="+car_y);
         uploadBackground();
         uploadcar();
     }
 }

 function left()
 {
     if(car_x>=0)
     {
         car_x=car_x-10;
         console.log ("When left is pressed,x="+car_x+"| y="+car_y);
         uploadBackground();
         uploadcar();
     }
 }