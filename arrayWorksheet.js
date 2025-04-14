let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]);
console.log(fruits.length);

// Part 2: Adding and Removing Elements

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


// Part 3: Looping Through Arrays


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
}


let appleCount = 0;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "apple") {
            appleCount++;
        }
    }   
console.log("Number of apples in the array:", appleCount);

// Part 4: Hands-On Practice


let cart = [];

cart.push("milk");
cart.push("bread");
cart.push("eggs");


console.log("Cart inners:", cart); 


let removedItem = cart.pop();


console.log("Updated cart:", cart); 
console.log("Removed item:", removedItem); 
console.log("Cart length:", cart.length); 




let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        reversedNumbers.push(numbers[i]);
}
console.log("Reversed numbers array:", reversedNumbers); 


// Part 5: Conditional Statements with arrays

let array1 = ["a", "b", "c", "d"];
let array2 = ["red", "green", "blue"];


    if (array1.length > array2.length) {
    console.log("array1 has a greater length than array2.");    
    } else if (array2.length > array1.length) {
        console.log("array2 has a greater length than array1.");
            } else {
            console.log("Both arrays have the same length.");
                 }



 // Part 6: Print Even Indexed Elements

const array = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < array.length; i++) {
     if (i % 2 === 0) {
        console.log(array[i]);
      }
}


// Part 7: Push Challenge: Nested Loops


let students = ["Alice", "Bob", "Charlie"];
let subjects = ["Math", "Science"];


    for (let i = 0; i < students.length; i++) {
        for (let j = 0; j < subjects.length; j++) {
            console.log(students[i] + " - " + subjects[j]);
        }
    }

// The outer loop goes through each student one by one. For each student, the inner loop runs and pairs each student with that respective subject. 
// Firstly, Alice pairs with MATH and then SCIENCE. Then, Bob pairs with MATH and then SCIENCE. Lastly, Charlie pairs with MATH and then SCIENCE.

