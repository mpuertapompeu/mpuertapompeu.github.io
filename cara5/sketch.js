function setup() {
  createCanvas(600, 600);
}
//farem canvis aleatoris amb random i canvis suaus amb noise
function draw() {
  let canvigran= random(0,255);
  let canvisuau= noise(0.001*frameCount)*25;
  let canvisuau2= noise(0.001*frameCount+10000)*127;
  background(canvisuau);//fons de color gris, perquè hi ha un numero entre 0 i 255 i el 0 és negre i el 255 és blanc
  let tremolor=random(0, 10);
  let tremolorsuau=noise(0.001*frameCount)*10
  print(tremolorsuau);
  fill(249+canvisuau,255-canvigran,79-canvigran);//fill significa omplir de color el que hi ha  print("Canvi petit: "+canvipetit); continuació en aquest cas el·lipses. El primer número és el nivell de vermellor(R:red), el segon número es el nivel de verdor(G=green) i el tercer número és el nivell  de   blabor(B:blue).Podem fer 255·255·255:16.700.000 de colors diferents.He de posar el color que vulgui els ulls i la cara canviant els 3 números, buscant a google colors RGB
  ellipse(300+tremolor,300,235,250);//Es la cara sensera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipse en píxels i el quart l'alçada del el·lipse. Sempre els números contats des de la cantonada superior esquerra, es a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)

  fill(33-canvigran, 152, 255+canvigran)//Color dels ulls
  ellipse(250+tremolor,275,35,25);//És l'ull dret perquè és 250 de X al centre
  ellipse(350+tremolor,250,40,30);//És l'ull esquerre perquè es 350 píxels de X del centre
  fill(255,255,255)//És el color de la boca i és vermellós perquè té molta quantitat de vermell
  arc(300+tremolor,350,100,70,0,PI);//Boca
  ellipse(300+tremolor,300,20,25);//Nas
  noFill();//No oplis de color la cella
  strokeWeight(canvisuau);
  arc(250+tremolor,255,50,25,PI,0);//Cella esquerra
  strokeWeight(4);
  line(325+tremolor,215,375+tremolor,225)//Cella dreta: els dos primers números són la X
}
