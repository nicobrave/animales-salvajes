class Animal {
    #animal
    constructor(animal) {
        this.#animal = animal
    }

    getAnimal(){
        return `El animal seleccionado es: ${animal}`
    }
}

class Edad extends Animal {
    #edad
    constructor(animal, edad){
        super(animal, edad)
        this.#edad = edad
    }

    getEdad(){
        return `La edad del animal seleccionado es: ${edad}`
    }
}

class Comentarios extends Animal {
    #comentarios
    constructor(animal, edad, comentarios){
        super(animal, edad, comentarios)
        this.#comentarios = comentarios
    }

    getComentarios(){
        return this.#comentarios
    }
    setComentarios(){
        this.#comentarios = nuevo_comentario
    }
}

const EleccionAnimal = (function(){

    const form = document.querySelector('form-group')

    const animal = form.animal.value


    form.addEventListener('#btnRegistrar', e => submitHandler(e))

    function submitHandler(e) { 
        e.preventDefault()
     }
})

