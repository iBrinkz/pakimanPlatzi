var imagenes = [];
imagenes["Pokacho"] = "pollo.webp";
imagenes["Cauchin"] = "vaca.png";
imagenes["Tocinauro"] = "cerdo.png";
//array donde contendran los pakimanes
var coleccion = [];
//creando coleccion de pakiman utilizando push
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
//for especial que obtiene el indice de la coleccion
for(var p in coleccion){
    console.log(coleccion[p]);
}