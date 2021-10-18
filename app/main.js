import { AnimalController } from "./controllers/AnimalController.js"

console.log('main js')


let animalController = new AnimalController()

console.log(animalController)

window['animalController'] = animalController