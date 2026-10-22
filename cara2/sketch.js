function setup() {
  createCanvas(600,600);//Crea un àrea de dibuix de 600 píxels quadrats, 600 píxels d'ample i 600 píxels d'alçada, canvas és àrea de dibuix. Setup és la configuració o característiques del nostre codi
}

function draw() {//draw significa dibuixar
  background(220);//fons de color gris, perquè hi ha un numero entre 0 i 255 i el 0 és negre i el 255 és blanc
  let canvigran= sin(frameCount*0.1)*20;//genera números de 20 a -20 sense parar i ordenats
   let c= sin(frameCount*0.05)*200
  text("sinus:+s",20,20);
  let canvimitja= cos(frameCount*0.1)*15;//genera números de 15 a -15 sense parar i ordenats
  let canvipetit= cos(frameCount*0.1)*8;//genera números de 8 a -8 sense parar i ordenats
  let canvimoltgran= cos(frameCount*0.1)*127;//genera números de 127 a -127 sense parar i ordenats
  print("Canvi petit: "+canvipetit);
  print("Canvi mitjà: "+canvimitja);
  print("Canvi gran: "+canvigran);
  print("Canvi molt gran: "+canvimoltgran);
  //frameRate(60);
  fill(255-canvimoltgran*2,245-canvimoltgran,54+canvimoltgran);//fill significa omplir de color el que hi ha  print("Canvi petit: "+canvipetit); continuació en aquest cas el·lipses. El primer número és el nivell de vermellor(R:red), el segon número es el nivel de verdor(G=green) i el tercer número és el nivell  de   blabor(B:blue).Podem fer 255·255·255:16.700.000 de colors diferents.He de posar el color que vulgui els ulls i la cara canviant els 3 números, buscant a google colors RGB
  ellipse(300,300,235,250);//Es la cara sensera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipse en píxels i el quart l'alçada del el·lipse. Sempre els números contats des de la cantonada superior esquerra, es a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(33, 152, 255)//Color dels ulls
  ellipse(250,275+canvipetit,35,25);//És l'ull dret perquè és 250 de X al centre
  ellipse(350+canvimitja,250,40,30);//És l'ull esquerre perquè es 350 píxels de X del centre
  fill(255,0,0)//És el color de la boca i és vermellós perquè té molta quantitat de vermell
  arc(300,350,100,70+canvigran,0,PI)//Boca
  ellipse(300,300,20,25);
  noFill();//No oplis de color la cella
  strokeWeight(4);
  arc(250,255,50,25+canvigran,PI,0);//Cella esquerra
  strokeWeight(4);
  line(325,215,375,225)//Cella dreta: els dos primers números són la X
}
