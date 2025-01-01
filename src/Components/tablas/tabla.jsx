import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./tabla.css";
import { CheckCircleFill, Controller, Joystick, XCircleFill } from "react-bootstrap-icons";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/Config";




// const data = [
//   {
    
//     Nombre: "Maquina 1",
//     Estado: "Activo",
//     Total: 800,
//   },
//   {
    
//     Nombre: "Maquina 2",
//     Estado: "Inactivo",
//     Total: -400,
//   },
//   {
    
//     Nombre: "Maquina 3",
//     Estado: "Jugando",
//     Total: 1700,
//   },
//   {
    
//     Nombre: "Maquina 4",
//     Estado: "Activo",
//     Total: -1250,
//   },
//   {
    
//     Nombre: "Maquina 5",
//     Estado: "Inactivo",
//     Total: 650,
//   },
// ];

const DataTable = () => {


  const [data, setData] = useState ([]);

  const navigate = useNavigate();

useEffect(() => {
  const fetchData = async () => {
    const collectionRef = collection(db, 'Maquinas'); // Reemplaza 'tu-coleccion' con el Nombre de tu colección en Firestore

    try {
      const querySnapshot = await getDocs(collectionRef);
      const dataArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
        
      }));
      setData(dataArray);
      console.log(dataArray)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  fetchData();
}, []); 


const Navegar =(item)=>{

  if(item.Estado == 'activa'){
  navigate(`/Detalle_reporte/${item.id}`);
  }
  else{
    return;
  }
}

  return (
    <div className="table-container">
      <h1 className="table-title">Máquinas</h1>
      <h1 style={{fontStyle:'italic'}} className="fs-6">( Haz click sobre un dato para ver reportes del mismo )</h1>
      <table className="data-table">
        <thead>
          <tr>
            <th>Máquina</th>
            <th>Estado</th>
            <th>Creditos</th>
            <th>Caja</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={() => Navegar(item)}>
              <td><Joystick color="orangered" size={20} style={{marginRight:'20px'}}/> {item.Nombre}</td>
              <td> {item.Credito > 0 && <div><Controller color={'green'} />{' '}Jugando / </div> }
              {item.Estado == 'activa' && <CheckCircleFill color={'green'}/>}
              {item.Estado == 'inactiva' && <XCircleFill color={'red'} />}
                {' '}
                 { item.Estado}</td>
              <td style={{color: 'blue'}}>RD$ {item.Credito}</td>
              <td style={{color: item.Total > 0 ? 'green' : 'red'}}>RD$ {item.Total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Maq/> */}
    </div>
  );
};

export default DataTable;
