//CLASES DE TIPOS DE ANIMALES // SE OBTIENEN SOLO AUDIO

import Animal from "./animal.js";

class Lobo extends Animal {
    get aullido() {
        return `./assets/sounds/${this.sonido}`
    }
}
class Leon extends Animal {
    get rugido() {
        return `./assets/sounds/${this.sonido}`
    }
}
class Oso extends Animal {
    get grunir() {
        return `./assets/sounds/${this.sonido}`
    }
}
class Serpiente extends Animal {
    get sisear() {
        return `./assets/sounds/${this.sonido}`
    }
}
class Aguila extends Animal {
    get chillar() {
        return `./assets/sounds/${this.sonido}`
    }
}


export {Lobo, Leon, Oso, Serpiente, Aguila}