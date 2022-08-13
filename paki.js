class Pakiman{
    constructor(nombre, vida, ataque){
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
    }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40); 
console.log(cauchin, pokacho, tocinauro);