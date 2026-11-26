function setup() {
  createCanvas(600, 600);
     // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  
}

function draw() {
  background(67, 190, 217);
 let canvisinus= sin(frameCount*0.1)*4;//genera números de 20 a -20 sense parar i ordenats
   let c= sin(frameCount*0.05)*10;//
   let c2= cos(frameCount*0.05)*10;//
  text("sinus:+s",20,20);
  let canvimitja= cos(frameCount*0.1)*15;//genera números de 15 a -15 sense parar i ordenats
  let canvipetit= cos(frameCount*0.1)*8;//genera números de 8 a -8 sense parar i ordenats
  let canvimoltgran= cos(frameCount*0.1)*127;//genera números de 127 a -127 sense parar i ordenats
//  print("Canvi petit: "+canvipetit);

 // print("Canvi gran: "+canvigran);
 // print("Canvi molt gran: "+canvimoltgran);
  //print("mouseX: "+mouseX);
   //print("mouseY: "+mouseY);
     let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0, 400);
    print("Canvi h: "+h);
   let canvigran= random(0,255);
  let canvisuau= noise(0.001*frameCount)*25;
  let canvisuau2= noise(0.001*frameCount+10000)*127;
   let tremolor=random(0, 10);
  let tremolorsuau=noise(0.001*frameCount)*10
  print(+canvisuau);
  fill(255,245,54);//Color de la cara
  ellipse(mouseX,mouseY,235,250);//Cara sensera
  fill(33, 152, 255)//Color dels ulls
  ellipse(mouseX-50,mouseY-25,35,25-c);//És l'ull dret 
  ellipse(mouseX+50,mouseY-50,40,30-c2);//És l'ull esquerre 
  fill(255-canvisuau,0,canvisuau)//És el color de la boca 
  arc(mouseX,mouseY+50,100,70+h,0,PI)//Boca
  fill(canvigran,0,0);
  ellipse(mouseX,mouseY,20,25);//Nas
  noFill();//No oplis de color
  strokeWeight(4);
  arc(mouseX-50,mouseY-45,50,25,PI,0);//Cella esquerra
  strokeWeight(4);
  line(mouseX+25,mouseY-85,mouseX+75,mouseY-75)//Cella dreta: els dos primers números són la X
}
