import React, { useState, useEffect } from "react";

import { PedirData } from "../../helpers/PedirData";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, addDoc, doc } from "firebase/firestore";
import { db } from "../firebase/Config";
import NavTitle from "../nav/NavTitle";
import DataTable from "../tablas/tabla";

import CustomModal from "../comp/Modal";
import { Button, Image } from "react-bootstrap";

const Creditos = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [getItem, setGetitem] = useState([]);
  const [total, setTotal] = useState(0);

  

  const sum = (value) => {
    setTotal(total + value);
  };

  

  const handleOpenModal = ({ item }) => {
    setGetitem(item);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setTotal(0);
    setShowModal(false);
    sendDataToFirebase();
  };

  const [data, setData] = useState ([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, 'Maquinas'); 
  
      try {
        const querySnapshot = await getDocs(collectionRef);
        const dataArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(dataArray);
        //console.log(dataArray)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  
    fetchData();
  }, [total ]); 


  const sendDataToFirebase = async () => {
    try {
      // Obtener la fecha y hora actuales
      const currentDate = new Date();
      const currentDateString = new Date().toLocaleDateString('en-CA'); // Formato: 'YYYY-MM-DD'
      const currentTimeString = currentDate.toLocaleTimeString(); // Formato: 'HH:mm:ss'

      // Datos para subir a Firestore
      const dataToAdd = {
        Date: currentDateString,
        Hora: currentTimeString,
        Maquina: 'Máquina 1',
        Transaccion: 'Ingreso',
        Monto: total,
      };

      // Agregar documento a Firestore
      const docRef = await addDoc(collection(db, 'Transacciones'), dataToAdd);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  

  // const cardsData = [
  //   { id: 1, name: "MAQUINA 1", creditos: "0" },
  //   { id: 2, name: "MAQUINA 2", creditos: "0" },
  //   { id: 3, name: "MAQUINA 3", creditos: "0" },
  //   // Agrega más datos según sea necesario
  // ];

  const Small_cards = ({ item }) => {

    console.log(item)
    let dis = false;

    item.Estado=='inactiva' ? dis=true : dis=false;

    if ('Notify' in item) {
      let x = item.Notify.length;
      if(x >= 5){
        dis = true
       
        console.log(total)
      }
      
    }

    return (
      <div  className="col-lg-3 col-xl-2 mb-4">
        <div className="card bg-light text-black h-100 border border-black">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center text-center">
            <div className="me-3">
                <Image 
                style={{borderRadius:'20px'}}
                height={'100px'}
                width={'150px'}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNftgh6E_RSbPbqIe3C26jr28SRSoAdIE2w&s"
               
              // src="data:image/jpeg;base64,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" 
               />
               
              </div>
            </div>
          </div>
          <div className="card-body ">
            <div className=" justify-content-between align-items-center text-center">
              
                
                {dis ? (<div>
                  <div style={{textDecoration:"line-through", }} className="text-danger small text-center fw-bold">{item.Nombre}</div>
                  <div style={{textDecoration:"line-through"}} className="text-danger small text-center fw-bold">Creditos: $ {item.Credito}</div></div>
              ):(<div>
                <div className="text-white-75 small text-center fw-bold">{item.Nombre}</div>
                <div className="text-success small text-center fw-bold">Creditos: $ {item.Credito}</div>
                </div>
              )}
                
              
            </div>
          </div>
          <div className="card-footer align-items-center justify-content-between text-center small">
          { dis ? (
            <Button disabled variant=" secondary col-lg-12 fw-bold" onClick={() => handleOpenModal({ item })}>
              No Disponible
            </Button>
            ):(
            <Button variant="success col-lg-12 fw-bold" onClick={() => handleOpenModal({ item })}>
              Acreditar
            </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="Root_container">
      
      <NavTitle titulo={"Creditos"} user={user} />
    
      <div className="table-container bg-style-screen">
      <h3 style={{margin:'20px'}}>Acreditar una Máquina.</h3>
      <div className="row">
        {data.map((card) => (
          <Small_cards key={card.id} item={card} />
        ))}
      </div>
      </div>

      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        handlesum={sum}
        settl={setTotal}
        total={total}
        item={getItem}
      />
    </div>
  );
};

export default Creditos;
