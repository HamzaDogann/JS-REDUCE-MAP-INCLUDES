//! REDUCE METOD

//Basit örnek
const numbers = [1,2,3,5];

let total = 0
numbers.forEach(number => total += number)
    console.log(total);

//! Reduce metod

let total2 = numbers.reduce(function(acc,number){  //!  reduce tanımlarken genelde acc görürüz  bu acc başlangıcta 0 olarak geldi. yani total = 0 demeye gerek kalmadan kullanmış olduk.
    return acc + number
}, 5) // 5 den başla demiş oluruz

console.log(total2)

//! başka reduce örneği

const basket = [
    {
        name:"IPhone 8",
        price :12222
    },
    {
        name:"IPhone 5S",
        price :3232
    }
    ,
    {
    name:"IPhone 7",
    price :565656
}
    
]

let sum = basket.reduce((acc,item)=> acc  + item.price, 0); // acc toplayıcımız ile item.price yani fiyatları toplattırdık , 0 ile başlangıc 0 olarak ayarlamış olduk

console.log(sum);

//--------------------------------------------

//! başka bir reduce örneği

const products = [
    {
        name: "NT1-A condenser mikrofon",
        brand : "Rode"
    },
    {
        name: "NT2-A Saglam mikrofon",
        brand : "Rode"
    },
    {
        name: "Lenovo xThinkpad",
        brand : "Lenovo"
    },
    {
        name: "Redmi Note 8 Pro",
        brand : "Xiomi"
    },
    
]

let group = 'brand' // tanımladık buradan çekip kullanabiliriz.
const allbrandList = products.reduce((acc,product)=>{
    let key = product[group]
    if(!acc[key]){
        acc[key]=[]
    }
    acc[key].push(product)
    return acc
},{})

console.log(allbrandList);