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

class CubeMaker extends CuboidMaker2 {
    constructor(length, width, height) {
        super(length, width, height)
    }
    volume = function() {return Math.pow(this.width, 6)};
    surfaceArea = function() {return Math.pow(this.width, 6)};
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
const cuboidTest5 = new CuboidMaker2(4,5,5); 
const cuboidTest6 = new CuboidMaker2(16,25,25); 
const cuboidTest7 = new CuboidMaker2(256,625,625); 
const cuboidTest8 = new CuboidMaker2(65536,390625,390625); 

console.log(cuboidTest5.volume()); // 100
console.log(cuboidTest5.surfaceArea()); // 130
console.log(cuboidTest6.volume());
console.log(cuboidTest6.surfaceArea()); 
console.log(cuboidTest7.volume());
console.log(cuboidTest8.surfaceArea()); 
console.log(cuboidTest8.volume()); 
console.log(cuboidTest8.surfaceArea());


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

const cubeTest1 = new CubeMaker(4,4,4); 
const cubeTest2 = new CubeMaker(16,16,16); 
const cubeTest3 = new CubeMaker(256, 256, 256); 
const cubeTest4 = new CubeMaker(65536, 65536, 65536); 

console.log(cubeTest1.volume()); 
console.log(cubeTest1.surfaceArea());
console.log(cubeTest2.volume());
console.log(cubeTest2.surfaceArea()); 
console.log(cubeTest3.volume());
console.log(cubeTest3.surfaceArea()); 
console.log(cubeTest4.volume()); 
console.log(cubeTest4.surfaceArea());
