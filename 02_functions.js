// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500)) // it will return only 200

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500)) // it will retunr array of 



function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))

const user ={
    username:"Ansh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}` );
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399

})

const myNewArray=[200,400,100,600]
function returnSecondValue(getArray) {
        return getArray[1]
}
console.log(returnSecondValue([200,400,100,600]))