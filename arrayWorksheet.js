let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);
console.log(fruits.length);



fruits.push("orange");
console.log(fruits); 


let removedFruit = fruits.pop();
console.log(fruits);
console.log(removedFruit); 


fruits.push("pineapple");
fruits.push("strawberry");


let anotherRemovedFruit = fruits.pop();


console.log(fruits); 
console.log("Length of fruits array:", fruits.length);