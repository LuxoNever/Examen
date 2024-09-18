class FiguraGeometrica {
    constructor() {
       

    }

    calcularArea(){


    }
}

class Cuadrado extends FiguraGeometrica{
    constructor(lado){

        super ()
        this.lado = lado
        
    }

    calcularArea(){
        return this.lado*this.lado 
    }

}

class Triangulo extends FiguraGeometrica{
    constructor(base, altura){

        super ()
        this.base = base
        this.altura = altura
        
    }

    calcularArea(){
        return (this.base*this.altura)/2
    }

}


class Rectangulo extends FiguraGeometrica{
    constructor(base, altura){

        super ()
        this.base = base
        this.altura = altura
        
    }

    calcularArea(){

        return this.base*this.altura 
        
    }

}

function clasificarFigura(Figura){      
        const Area = Figura.calcularArea();
            if (Area > 20) {
                return "la figura es grande"

            } else{
                return "la figura es pequeña"                 

            }
}   

const cuadrado = new Cuadrado(8);
const triangulo = new Triangulo(3, 5);
const rectangulo = new Rectangulo(8, 6);

console.log(cuadrado.calcularArea()); 
console.log(clasificarFigura(cuadrado)); 
console.log(triangulo.calcularArea()); 
console.log(clasificarFigura(triangulo)); 
console.log(rectangulo.calcularArea()); 
console.log(clasificarFigura(rectangulo)); 