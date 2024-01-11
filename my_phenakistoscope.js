const SLICE_COUNT = 10;


function setup_pScope(pScope){
 pScope.output_mode(ANIMATED_DISK);
 pScope.scale_for_screen(true);
 pScope.draw_layer_boundaries(false);
 pScope.set_direction(CCW);
 pScope.set_slice_count(SLICE_COUNT);
 pScope.load_image("canon5" , "png");
}


function setup_layers(pScope){


 new PLayer(null, 22, 20, 28);  //lets us draw the whole circle background, ignoring the boundaries

 var insideBackground = new PLayer(insideCircle);
 insideBackground.mode( RING );
 insideBackground.set_boundary( 0, 650 );

 var outerRing = new PLayer(outsideRing);
 outerRing.mode( RING );
 outerRing.set_boundary( 870, 1000 );

 var layer2 = new PLayer(ship);
 layer2.mode( SWIRL(3) );
 layer2.set_boundary( 750, 800 );

 var layer1 = new PLayer(moon);
 layer1.mode( SWIRL(3) );
 layer1.set_boundary( 200, 600 );


 var layer3 = new PLayer(canon5);
 layer3.mode( RING );
 layer3.set_boundary( 0, 400 );


}
function insideCircle (x, y, animation, pScope){
  pScope.fill_background(45, 9, 87);  
}

function outsideRing (x, y, animation, pScope){
  pScope.fill_background(245, 181, 5);  

}

function ship(x, y, animation, pScope){
  scale(animation.frame*2);

  fill(177, 228, 240)
  rect(-35, 65, 80, 400);

  fill(42, 143, 232)
  ellipse(5, 34, 87, 40);

  fill(250, 5, 29)
  ellipse(5, 50, 180, 28);
}

function moon(x, y, animation, pScope){
  scale(animation.frame*2);
  

 fill(247, 247, 245);
 stroke(0);
 strokeWeight(1);
 ellipse(5, 5, 70, 70);


 fill(100)
 ellipse(1, 1, 10, 8);
 ellipse(15, 20, 20, 14);
 ellipse(-10, 18, 17, 14);



   
}



function canon5(x, y, animation, pScope){
  pScope.draw_image("canon5",x,y);
  scale(0.9);


 // this is how you set up a background for a specific layer
 let angleOffset = (360 / SLICE_COUNT) / 2
 let backgroundArcStart = 270 - angleOffset;
 let backgroundArcEnd = 270 + angleOffset;


 


}








  

  




