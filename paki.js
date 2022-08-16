var imagenes = [];
imagenes["Pokacho"] = "pollo.webp";
imagenes["Cauchin"] = "vaca.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman{
    constructor(nombre, vida, ataque){
        this.imagen = new Image();
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;

        this.imagen.src = imagenes[this.nombre];
    }

    hablar(){
        document.write(this.nombre);
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<hr />");
    }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40); 

cauchin.mostrar();
tocinauro.mostrar();
pokacho.mostrar();