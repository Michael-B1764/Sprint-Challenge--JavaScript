// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height
    }
    volume = function() {return this.height * this.length * this.width;};
    surfaceArea = function() {return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)};
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
const cuboidTest5 = new CuboidMaker2(4,5,5); 
const cuboidTest6 = new CuboidMaker2(8,10,10); 
const cuboidTest7 = new CuboidMaker2(64,100,100); 
const cuboidTest8 = new CuboidMaker2(4096,10000,10000); 

console.log(cuboidTest5.volume()); // 100
console.log(cuboidTest5.surfaceArea()); // 130
console.log(cuboidTest6.volume());
console.log(cuboidTest6.surfaceArea()); 
console.log(cuboidTest7.volume());
console.log(cuboidTest8.surfaceArea()); 
console.log(cuboidTest8.volume()); 
console.log(cuboidTest8.surfaceArea());


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.