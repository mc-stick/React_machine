import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { collection, getDocs, query, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/Config";
import SumButton from './Sum_btn';

const CustomModal = ({ show, handleClose, handlesum, item, total, settl  }) => {

  const validarCredito=(total)=>{
    
    console.log(item)

    if(total>0){
      Escribir(total)
      handleClose()
    }else{
      
        return;
    }
    
    console.log('creditos: '+total)
  }

  const Escribir = async(total)=>{
    const collectionRef = doc(db, 'Maquinas', item.id);
    console.log('ITEM: '+item.id)
    
    try {

      console.log('Credito: '+ item.Credito + ' Total:'+item.Total)
     
      await setDoc(collectionRef, {
        Nombre: item.Nombre,
        Estado: item.Estado,
        Credito: item.Credito+total,
        Total: total + item.Total

      });
      console.log('Document successfully overwritten!');
      // Opcionalmente, puedes volver a obtener los datos para actualizar la lista
      // const collectionRef = collection(db, 'Maquinas');
      // const querySnapshot = await getDocs(collectionRef);
      // const dataArray = querySnapshot.docs.map(doc => ({
      //   id: doc.id,
      //   ...doc.data()
      // }));
      // setData(dataArray);
    } catch (error) {
      console.error('Error overwriting document: ', error);
    }
  }
  
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className='bg-warning text-bold' closeButton>
        <Modal.Title>{item.Nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <Modal.Title className='text-center text-secondary'>Agregar creditos  </Modal.Title>
        <Modal.Title className='text-center text-bold text-success'>RD$ : {total}</Modal.Title>
       <hr />

       <SumButton onSum={handlesum} value={50}/>       
          <SumButton onSum={handlesum} value={100}/>       
          <SumButton onSum={handlesum} value={200}/>       
          <SumButton onSum={handlesum} value={500}/>

        <Button className='col-lg-12 mb-3' variant="danger" onClick={()=>settl(0)} >
          RD$ 0
        </Button>
        
        
      </Modal.Body>
      <Modal.Footer className='bg-warning'>
        <Button variant="danger" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="success" onClick={()=>validarCredito(total)}>
          Guardar cambios
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;