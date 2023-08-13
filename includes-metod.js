
//! Includes metodu ---> İçeriyor mu içermiyor mu amaçlı kullanabiliriz
const numbers = [1,2,3,4,5,7];
//console.log(numbers.includes(5));

const names = ["Hamza","Okan","Mehmet"]
console.log(names.includes('Okan'));
console.log(names.includes('amz')); //! Normalde hamza da amz geçiyor ama şuan da bütün olarak yazmamız gerekir.


console.log(names[2].includes('met')); //! True döner bu şekilde

const addNumber = number =>{
    numbers.push(number);
}
addNumber(5)
addNumber(3)
addNumber(22)
addNumber(39)

//? Farklı bir kullanımı

const names2 = ["Hamza","Okan","Mehmet","Ebru","Ahmet"]

console.log(names.includes('Hamza'),3); //! 3. indeksden sonra hamza varsa true döner.

