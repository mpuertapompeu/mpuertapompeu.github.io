function setup() {
  createCanvas(600, 600);
}

 function draw() {     
  background(0, 208, 255);//fons de color gris, perquè hi ha un numero entre 0 i 255 i el 0 és negre i el 255 és blanc
//mouseX=300;mouseY=300
   print("mouseX: "+mouseX);
   print("mouseY: "+mouseY);
  fill(mouseX-45,mouseY-55,54);//fill significa omplir de color el que hi ha  print("Canvi petit: "+canvipetit); continuació en aquest cas el·lipses. El primer número és el nivell de vermellor(R:red), el segon número es el nivel de verdor(G=green) i el tercer número és el nivell  de   blabor(B:blue).Podem fer 255·255·255:16.700.000 de colors diferents.He de posar el color que vulgui els ulls i la cara canviant els 3 números, buscant a google colors RGB
   let mouseXpetit= mouseX/10
  ellipse(mouseX,mouseY,235,260);//Es la cara sensera. El primer número significa la posició X (horitzontal) del centre de la el·lipse. El segon número significa la posició Y (vertical) del centre de la el·lipse. El tercer número significa l'amplada de la el·lipse en píxels i el quart l'alçada del el·lipse. Sempre els números contats des de la cantonada superior esquerra, es a dir el punt 0,0 es troba diferent que a matemàtiques (cantonada inferior esquerra)
  fill(mouseX-267,mouseY-148, 255)//Color dels ulls
  ellipse(mouseX-50,mouseY-25,mouseX/10-10,mouseY/10-10);//És l'ull dret perquè és 250 de X al centre
  ellipse(mouseX+50,mouseY-50,40,30);//És l'ull esquerre perquè es 350 píxels de X del centre
  fill(mouseX-45,mouseY-300,0)//És el color de la boca i és vermellós perquè té molta quantitat de vermell
  arc(mouseX,mouseY+50,100,70-mouseY/20,0,PI)//Boca
  ellipse(mouseX,mouseY,20,25);
  noFill();//No oplis de color la cella
  strokeWeight(4);
  arc(mouseX-50,mouseY-55,50,25,PI,0);//Cella esquerra
  strokeWeight(4);
  line(mouseX+25,mouseY-85,mouseX+75,mouseY-75)//Cella dreta: els dos primers números són la X

}
