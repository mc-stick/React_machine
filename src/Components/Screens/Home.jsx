import React, { useState } from 'react'
import NavTitle from '../nav/NavTitle'
import ItemListContainer from '../listas/ItemListContainer'
import Noticias from './Noticias'

const Home = ({user}) => {


  const [counter, setcounter] = useState(0);


  const cont = () =>{
    setcounter(counter+1)
  }


  return (
    <div className="Root_container">
        <NavTitle titulo={'Inicio'} user={user} />

        <h1 style={{marginTop:'3%'}}>Bienvenido de nuevo <b>{user}</b> </h1>

        <h1>contador {counter}</h1>
        <button onClick={cont} >contador </button>
        <h1>contador {counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>contador </button>
        {/* <ItemListContainer/> */}

        <Noticias/>
    </div>
  )
}

export default Home