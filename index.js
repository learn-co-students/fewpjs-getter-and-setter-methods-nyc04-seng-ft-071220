// Add your Circle class here

const pi = Math.pi
class Circle {
    constructor(radius) {
        this.radius = radius
    }
   
    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        return (this.radius * 2) * pi 
    }

    get area() {
        return pi * (this.radius * this.radius)
    }

    set area(area) {
        this.raidus = Math.sqrt(area / pi)
    
    }


}