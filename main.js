import StoreController from './app/components/StoreController.js'

//test
console.log('hello from main.js')

class App{
    constructor(){
        this.controller = {
           storeController: new StoreController() 
        }
    }
}

window.app = new App()