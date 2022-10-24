export class Vector 
{
    private elements: number[]

    constructor(n: number, k: number)
    {
        this.elements = [];
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random()*k));
        }
    }

    public print():void{
        console.log(this.elements);
        
    }

    public add(v1:Vector):Vector{
        
        for (let i = 0; i < v1.elements.length; i++) {
            v1.elements[i] = this.elements[i] + v1.elements[i]
        }
        return v1;
    }

    public subs(v1:Vector):Vector{
        for (let i = 0; i < v1.elements.length; i++) {
            v1.elements[i] = this.elements[i] - v1.elements[i]
        }
        return v1;
    }

    public mult(v1:Vector):Vector{
        for (let i = 0; i < v1.elements.length; i++) {
            v1.elements[i] = this.elements[i] * v1.elements[i]
        }
        return v1;
    }

    public multNumber(n:number):Vector{
            let vector1: Vector = new Vector(this.elements.length,10);//creamos nuevo vector usando el constructor con la misma length que this.elements y nums aleatorios entre 1 y 10
            
            for (let i = 0; i < this.elements.length; i++) {
            vector1.elements[i] = this.elements[i] * n
            }
            return vector1;
        }
}


