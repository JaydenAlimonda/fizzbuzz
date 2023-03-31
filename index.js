var numbers = []
for ( i = 1; i < 101; i++ ) {
    if (i % 3 != 0 && i % 5 != 0){
        numbers.push(i) 
    }
if (i % 3 == 0 && i % 5 != 0 ) {
    numbers.push("fizz")
}
if (i % 5 == 0 && i % 3 != 0){
numbers.push ("buzz")
}
if (i % 5 == 0 && i % 3 == 0 ){
    numbers.push("fizzBuzz")
}
}
console.log(numbers)

