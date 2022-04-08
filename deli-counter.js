// 1. Write your functions here




/* Customer details:


*/
/*

//Small Family ran deli in the Bay Area searching to automate their CMS and customer engagement//

//Customer what a system that adds and remove customers as they come and go.//
Using For, Push, and logging it to the Console. 
*/



function takeANum(array, name){
    array.push(name)
    return (`Welcome, ${name}. You are number ${array.length} in line. Thank You for your order, please return soon!`)
}

function nowServing(array){
    if (array.length > 0){
        return "Currently serving " + katzDeli.shift() + "."
    } else{
        return "There is nobody waiting to be served!."
    }
}

function line(array) {
    if (array.length > 0) {
        let lineNumber = ""
        for(let i = 0; i < array.length; i++) {
            lineNumber += (i + 1) + "." + array[i] + ".";
        }
        lineNumber = lineNumber.slice(0, -2);
        return `The line is currently: ${lineNumber} `;
    } else {
        return "The line is currently empty."
    }
takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Sara") //=> Welcome, Sara. You are number 2 in line.
takeANumber(katzDeli, "Jane") //=> Welcome, Jane. You are number 3 in line.
takeANumber(katzDeli, "Michael") //=> Welcome, Michael. You are number 3 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 4 in line.

console.log('')
console.log('')

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"
line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Sara 4. Jane 5. Michael 6. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."
newOrder(1, 6) // Lucky Winner!
newOrder(1, 3) // will go through
console.log('')
console.log('')
}

// 2. Example Usage
const katzDeli = []

// const katzDeli = []

console.log(takeANumber(katzDeli, "Ada")) 
// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.

console.log(takeANumber(katzDeli, "Grace")) 
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.

console.log(takeANumber(katzDeli, "Kent")) 
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

console.log(line(katzDeli)) 
// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

console.log(nowServing(katzDeli))
// nowServing(katzDeli) //=> "Currently serving Ada."

console.log(line(katzDeli))
// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

console.log(takeANumber(katzDeli, "Matz"))
// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

console.log(line(katzDeli))
// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

console.log(nowServing(katzDeli))
// nowServing(katzDeli) //=> "Currently serving Grace."

console.log(line(katzDeli))
// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"
