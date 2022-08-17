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
//ejecutar el metodo mostrar para cada instancia p
for(var p of coleccion){
    p.mostrar();
}
//muestra cada array asociativo
for(var x in imagenes){
    console.log(x);
}