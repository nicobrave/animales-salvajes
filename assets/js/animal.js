export class Animal {
    #animal
    #edad
    #comentarios
    constructor(animal, edad, comentarios) {
        this.#animal = animal
        this.#edad = edad
        this.#comentarios = comentarios
    }

    get animal(){
        return `El animal seleccionado es: ${this.animal}`
    }

    get edad(){
        return `La edad del animal seleccionado es: ${this.edad}`
    }

    get comentarios(){
        return this.#comentarios
    }
    set comentarios(nuevo_comentario){
        this.#comentarios = nuevo_comentario
    }
}