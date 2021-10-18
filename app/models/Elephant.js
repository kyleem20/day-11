export class Elephant {


  constructor(name, color, gender, weight, livingLocation) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
    this.livingLocation = livingLocation;
  }
  eat(food) {
    console.log(`Chomp chomp all the ${food}ies.`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }


}