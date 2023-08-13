//! MAP() METODU  bir diziyi mapladiğimiz zaman yaptırdığım işlemi başka bir dizi olarak gösteririz ve ana dizi hep aynıdır.

//TODO: Normalde böyle yaparız.

const numbers = [1,3,4,56,9];
numbers.forEach((number,index)=>{
    numbers[index] = number * 2;
})

console.log(numbers);

//! MAP metodu ile yapım

const result = numbers.map(function(number){
    return number*2;
})

console.log(result);

//----------------------------------
//! Arrow function ile

const result2 = numbers.map(number=> number*2);


//! Objelerde Map kullanımı

const users = [
    {
        name : "Hamza",
        surname :"Dogan",
        age : 18
    },
    {
        name : "Okan",
        surname :"Dogan",
        age : 20
    },
    {
        name : "Hasan",
        surname :"Dogan",
        age : 9
    }
]



const date = new Date();
const result3 = users.map(user =>{
    return {
        fullName : `${user.name} ${user.surname}`,
        yearOfBirth : date.getFullYear() - user.age
    }
})

console.log(users);
console.log(result3)


//--------------------------
//! Farklı bir map() metod örneği

const todos = [
    {
        id : 1,
        name: "Todo 1",
        completed : false
    },
    {
        id : 2,
        name: "Todo 2",
        completed : false
    },
    {
        id : 3,
        name: "Todo 3",
        completed : false
    }
]

console.log(todos.map(todo=>{
    if(todo.id === 2){
        todo.completed=true;
    }
    return todo;
}))

