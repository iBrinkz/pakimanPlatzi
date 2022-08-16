var imagenes = [];
imagenes["Pokacho"] = "pollo.webp";
imagenes["Cauchin"] = "vaca.png";
imagenes["Tocinauro"] = "cerdo.png";

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40); 

cauchin.mostrar();
tocinauro.mostrar();
pokacho.mostrar();