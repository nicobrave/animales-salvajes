//CLASE ANIMAL GENERAL 

class Animal {
    #animal
    #edad
    #comentarios
    #sonido
    #imagen
    constructor(animal, edad, comentarios, sonido, imagen) {
        this.#animal = animal
        this.#edad = edad
        this.#comentarios = comentarios
        this.#sonido = sonido
        this.#imagen = imagen
    }

    get animal(){
        return this.#animal()
    }

    get edad(){
        return this.#edad
    }

    get comentarios(){
        return this.#comentarios
    }
    set comentarios(nuevo_comentario){
        this.#comentarios = nuevo_comentario
    }
    get sonido() {
        return `<audio controls><source src="./assets/sounds/${this.#sonido}" type="audio/mp3" /></audio>`
    }
    get imagen() {
        return this.#imagen
    }
}

export default Animal
