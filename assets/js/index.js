import json from './consulta.js'
import { Lobo, Leon, Oso, Serpiente, Aguila  } from './animales.js'
import Animal from './animal.js'

const Animales = (() => {
    const state = {
        animales: [],
        instancias: []
    }

    // DOMCache
    const tipo = document.querySelector('#animal')
    const edad = document.querySelector('#edad')
    const comentario = document.querySelector('#comentarios')
    const tablaHtml = document.querySelector('#Animales')
    const img_container = document.querySelector('.p-5.card.bg-dark')
    const form = document.querySelector('form')
    const modal = document.querySelector('.modal-body')


    form.addEventListener('submit', submitHandler)
    $('#modal').on('show.bs.modal', showModalHandler)
      

    // INICIA LA FUNCION E IGUALA DATA CON JSON
    async function init() {
        const data = await json()
        state.animales = data.animales
        
        
    } 
    // BUSCA ID EN HTML Y ESCUCHA EL EVENTO 
    // VALOR DE SELECCION LA IGUALA CON CONSULTA
    // BUSCA LAS IMAGENES 
    
    tipo.addEventListener('change', () => {
        const { animales } = state
        const choice = tipo.value
        const imageTemplate = animales.find((e) => e.name === choice).imagen
        
        const ejemplo = document.querySelector('.p-5.card.bg-dark')
        ejemplo.innerHTML = `<img src="assets/imgs/${imageTemplate}" class="img-fluid"/>`
    })
    
    
    
    function submitHandler(e) {
        e.preventDefault()
        
        let instancia 
        
        const form_value ={
            name: tipo.value,
            edad: edad.value,
            comentarios: comentario.value
        }
        
        const animal = state.animales.find(animal => animal.name === form_value.name) // GUARDA LOS DATOS LUEGO DE IGUALARLOS
        const img = animal.imagen
        const sonido = animal.sonido

        if (form_value.name === 'Seleccione un rango de años' || form_value.comentarios === '') {
            return alert('Revise los datos e intentelo nuevamente')
        }
        
        if (form_value.name === 'Leon' ) {
            instancia = new Leon(form_value.name, form_value.edad, form_value.comentarios, sonido, img)
        } else if (form_value.name === 'Lobo' ) {
            instancia = new Lobo(form_value.name, form_value.edad, form_value.comentarios, sonido, img)
        } else if (form_value.name === 'Oso' ) {
            instancia = new Oso(form_value.name, form_value.edad, form_value.comentarios, sonido, img)
        }else if (form_value.name === 'Serpiente' ) {
            instancia = new Serpiente(form_value.name, form_value.edad, form_value.comentarios, sonido, img)
        }else if (form_value.name === 'Aguila' ) {
            instancia = new Aguila(form_value.name, form_value.edad, form_value.comentarios, sonido, img)
        }

        state.instancias.push(instancia)
        const card = htmlCard(instancia, state.instancias.length - 1)
        tablaHtml.innerHTML += card

        // LimpiarFormulario
        // tipo.value = ''
        // edad.value = ''
        // comentario.value = ''
        form.reset()
        img_container.innerHTML = '<div id="preview"></div>'
    }

    function htmlCard(instancia, index) {
        return `<div class="card-group" style="width: 18rem;">
        <img src="./assets/imgs/${instancia.imagen}" class="card-img-top img-fluid" alt="..." data-toggle="modal" data-target="#modal" data-index="${index}">
        <div class="card-body">${instancia.sonido}</div>
        </div>`
    }

    function htmlModal(animal) {
        return `<div class="card" style="width: 18rem;">
        <img src="./assets/imgs/${animal.imagen}" class="card-img-top" alt="...">
        <h5 class="card-title">${animal.animal}</h5>
        <div class="card-body">
          <p class="card-text">${animal.comentarios}</p>
        </div>
      </div>`
    }
    
    function showModalHandler(e) {
        const animal = state.instancias[e.relatedTarget.dataset.index]
        modal.innerHTML = htmlModal(animal)
    }
    
    return { init } // CORTA LA FUNCION
    
    
})()

Animales.init()

