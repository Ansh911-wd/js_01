function sayMyName(){
    console.log("a")
    console.log("n")
    console.log("s")
    console.log("H")   
}
sayMyName()

function addTwoNumbers( number1 ,number2)
{
  console.log( number1+number2)
}
addTwoNumbers(3,4)

function addTwoNumbers( number1 ,number2)
{
  console.log( number1+number2)
}
addTwoNumbers(3,"4")
function addTwoNumbers( number1 ,number2)
{
  console.log( number1+number2)
}
addTwoNumbers(3,"A")

function addTwoNumbers( number1 ,number2)
{
  console.log( number1+number2)
}
addTwoNumbers(3,null)

function addTwoNumbers( number1 ,number2)
{
  console.log( number1+number2);
}
const result= addTwoNumbers(3,5)

console.log( "Result: ",result); // undefined result aayegii

function loginUserMessage(username)
{
    if (username===undefined)
         { console.log("please enter a username");
        
    }
    return `${username} just logged in`
}
//  console.log(loginUserMessage("Ansh"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())

function loginUserMessage(username)
{
    if (username===undefined)
         { console.log("please enter a username");
            return// iske baad code aage i jayegii

        
    }
    return `${username} just logged in` //yaha pe ye line execute ni hogii

}
//  console.log(loginUserMessage("Ansh"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())