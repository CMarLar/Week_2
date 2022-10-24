export class Point
{
    private x: number;
    private y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public getX():number {return this.x};
    public getY():number {return this.y};

    public setX(x:number): void {this.x = x};
    public setY(y:number): void {this.y = y};

    public toString(): string {return "("+this.x+","+this.y+")"};

//Si no funcionan prueba a cambiar this.x por this.getx()

    public distanceToOrigin():number{
        //Distancia al origen = raiz cuadrada de x al cuadrado + y al cuadrado.
        //Math.sqrt(num)
        let sumSqrs: number = (this.x*this.x) + (this.y*this.y);
        let distance: number = Math.sqrt(sumSqrs);
        return distance;
    }

    public calculateDistance(anotherPoint:Point):number {
        //https://www.superprof.es/apuntes/escolar/matematicas/analitica/vectores/distancia-entre-dos-puntos.html
        let a: number = (anotherPoint.getX() - this.x)*(anotherPoint.getX() - this.x);
        let b: number = (anotherPoint.getY() - this.y)*(anotherPoint.getY() - this.y);
        let distance: number = Math.sqrt(a+b);
        return distance;
    }

    public calculateQuadrant():number {
        let quadrant: number = 0;
        if(this.getX() == 0 && this.getY() == 0) {quadrant = 0}
        else if(this.getX() > 0 && this.getY() > 0) {quadrant = 1}
        else if(this.getX() < 0 && this.getY() > 0) {quadrant = 2}
        else if(this.getX() < 0 && this.getY() < 0) {quadrant = 3}
        else if(this.getX() > 0 && this.getY() < 0) {quadrant = 4}

        return quadrant;
    }

    /*Programa un método denominado calculateNearest(points : Point[]) : Point, que reciba
    como parámetro un array de objetos de la clase Point y devuelva una referencia al objeto
    de dicho array que esté más cercano al punto actual.
    NOTA: Utilizar para ello el método calculateDistance implementado en el reto3.
    */

    public calculateNearest(points : Point[]) : Point{//recibe array de puntos, compara con this, devuelve punto
        let temporalPoint: Point = points[0];//temporalPoint igualado con el primer elemento de points
        for (let i = 0; i < points.length; i++) {//recorremos points
            if(points[i].calculateDistance(this) < temporalPoint.calculateDistance(this)){
                //si la distancia de los elementos de points con respecto a este punto es menor que las del punto temporal con respecto a este punto.
            temporalPoint = points[i]//iguala temporal point con i. Siempre saldrá el de menor distancia.
            }
        }
            return temporalPoint;
        }
    

}


