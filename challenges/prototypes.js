/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
function CuboidMaker(length, width, height) {
  this.length = length
  this.width = width
  this.height = height
  }
CuboidMaker.prototype.volume = function() {return this.height * this.length * this.width;};
CuboidMaker.prototype.surfaceArea = function() {return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)};


/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/
const cuboidTest1 = new CuboidMaker(4,5,5); 
const cuboidTest2 = new CuboidMaker(8,10,10); 
const cuboidTest3 = new CuboidMaker(64,100,100); 
const cuboidTest4 = new CuboidMaker(4096,10000,10000); 

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTest1.volume()); // 100
console.log(cuboidTest1.surfaceArea()); // 130
console.log(cuboidTest2.volume());
console.log(cuboidTest2.surfaceArea()); 
console.log(cuboidTest3.volume());
console.log(cuboidTest3.surfaceArea()); 
console.log(cuboidTest4.volume()); 
console.log(cuboidTest4.surfaceArea());
