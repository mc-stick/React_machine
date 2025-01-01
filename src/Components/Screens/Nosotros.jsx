import React, { useEffect } from 'react'

const Nosotros = () => {

  

    useEffect(() => {

        const clickear = ()=>{             // se recomienda que se use una funcion directa y se llame en el evento.
                console.log('clickeado')
        }

        window.addEventListener('click', clickear); // si usamos una funcion anonima es como si asignaramos cada vez una funcion diferente.
        // basicamente usar una funcion anonima e intentar removerla no funcionara por eso se recomienda usar funciones directas.
        // aunque las funciones anonimas sean exactamente iguales no se borrara el evento y se seguira duplicando o triplicando y etc.. etc..

        // ESTA ES UNA FUNCION ANONIMA..

            /*
             window.addEventListener('click', ()=>{
               console.log('clickear')
            })      
            */
      
        // AQUI agregamos lo que se ejecuta una sola vez o que monte.

      return () => {

        window.removeEventListener('click', clickear)    
        
        // ESTA ES UNA FUNCION ANONIMA que fue reemplazada por la que esta arriba.

            /*
             window.addEventListener('click', ()=>{
               console.log('clickear')
            })      
            */

        
        // aqui agregamos lo que quiere que retorne o desmonte.

      }
    }, []) //dentro de este array agregamos el valor que actualizara el componente.
    





  return (
    <div className='Root_container'>
      <h1>Nosotros</h1>
      <p>aqui pagina Nosotros</p>
      
    </div>
  )
}

export default Nosotros