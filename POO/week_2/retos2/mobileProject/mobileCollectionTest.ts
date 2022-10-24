import {MobileCollection} from "./mobileCollection";
import {Mobile} from "./mobile";

let device1 = new Mobile("Apple iPhone 14","Apple","iPhone 14","Purple",1009);
let device2 = new Mobile("Samsung Galaxy S21 FE 5G","Samsung","Galaxy S21 FE 5G","Grafito",799);
let device3 = new Mobile("OPPO A54s","OPPO","A54S","Pearl Blue",199);
let device4 = new Mobile("realme 8i","realme","8i","Violeta Espacial",169);

let devicesArray : Mobile[] = [device1,device2,device3,device4]

let myCollection = new MobileCollection(devicesArray);

//console.log(myCollection.getMobiles());
//console.log(myCollection.getTotalPrice());
myCollection.printCollection();

