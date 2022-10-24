export class Mobile
{
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name: string, trademark: string, model: string, color: string, price: number)
    {
        this.name = name;
        this.trademark= trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
//Getters
    public getName(): string{ return this.name};
    public getTrademark(): string{ return this.trademark};
    public getModel(): string{ return this.model};
    public getColor(): string{ return this.color};
    public getPrice(): number{ return this.price};

//Setters
    public setName(newName:string):void {this.name=newName};
    public setTrademark(newTrademark:string):void {this.trademark=newTrademark};
    public setModel(newModel:string):void {this.model=newModel};
    public setColor(newColor:string):void {this.color=newColor};
    public setPrice(newPrice:number):void {this.price=newPrice};


    public printInfo(){
        console.log("The characteristics of the mobile name are:" + "\n" + 

        "Name: " + this.name + "\n" +
        "Trademark: " + this.trademark + "\n" +
        "Model: " + this.model + "\n" +
        "Color: " + this.color + "\n" +
        "Price: " + this.price + "\n" )
    }
}