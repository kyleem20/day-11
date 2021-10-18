import { Elephant } from "../models/Elephant.js"
import { Whale } from "../models/Whale.js"


let _animalEncloser = {
  Ellie: new Elephant('Ellie', 'gray', 'female', 650, 'forest'),
  BigBlue: new Whale('Big Blue', 'blue', 'male', 1102, 'ocean'),
  Beluga: new Whale('Beluga', 'white', 'female', 400, 'ocean')


}
console.log(_animalEncloser)
export class AnimalController {
  constructor() {
    console.log('you have my animal controller')
    // _draw()
  }
}