class Vector
{
    private elements: number[]

        constructor(n: number, k: number)
        {
            for (let i = 0; i < n; i++) {
                this.elements.push(Math.floor(Math.random()*k));
            }
        }
}