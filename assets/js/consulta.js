
// CONSULTA A JSON 

const Animales = async () => {
    try {
        const respuesta = await fetch('/assets/js/animales.json')
        return respuesta.json()

    } catch (error) {
        console.error(error)
    }
}
    
export default Animales
