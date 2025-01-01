
import React, { useEffect, useState } from 'react';
import './Login.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Config";

const Login = ({setLog, setUSer}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  useEffect(() => {
    

   
  
  
   
  }, []);
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
        setLog(true) // esta referencia no pertenece aqui... solo esta para saltar el login sin conexion a internet.
        //  borrar de inmediato


        const usersRef = collection(db, 'Usuario');
          const q = query(usersRef, where('User', '==', email));

          

          const querySnapshot = await getDocs(q);
         
         if(querySnapshot.docs.length == 0){
              setError('Credenciales incorrectas.'); //if innecesario pero funcionara por ahora para validar a alguien que no esta en la nube.
              return
            }
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            console.log('userdata: ', userData)

            

            // Aquí puedes comparar los datos recuperados con los del formulario
            if (userData.pass === password) {
                setUSer(userData.Nombre);
              setLog(true); // Login successful
              setError('')
            } else {
              setError('Credenciales incorrectas.');
            }
          });
        } catch (err) {
          console.log('error: ' + err)
        }

    
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="body_container">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar sesión.</h2>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) =>{ setEmail(e.target.value); setError(null)}}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value); setError(null)}}
            required
          />
        </div>
        {error &&
        <div className="input-container">
            <h3 style={{color:'red', backgroundColor:'yellow', borderRadius:'20px', padding:'5px'}}>{error}</h3>
        </div>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
