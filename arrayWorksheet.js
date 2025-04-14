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