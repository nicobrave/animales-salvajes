

export const consultaAnimales = async () => {
    const respuesta = await fetch('../assets/js/animales.json')
    try {
        
        if (respuesta.status === 200) {
            console.log('Todo bien, puede seguir.')       
        } else if (respuesta.status === 404) {
            console.log('Los datos no fueron encontrados')
            }
            else {
                console.log('Algo no camina aquí')
            }
    }
        catch (error) {
            console.log(error)
        }
    }
    
consultaAnimales() 

const EleccionAnimal = (function(){
    
    const form = document.querySelector('form')
    
    const animal = form.animal.value
    
    
    form.addEventListener('#btnRegistrar', e => submitHandler(e))
    
    function submitHandler(e) { 
        e.preventDefault()
    }
})