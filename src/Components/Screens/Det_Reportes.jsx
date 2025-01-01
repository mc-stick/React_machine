import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './reporte.css';
import './Det_Reportes.css';
import { FileExcel, Joystick } from 'react-bootstrap-icons';
import NavTitle from '../nav/NavTitle';

import { getDoc, doc, getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase/Config';

const data = [
  { Date: '2024-06-01', Hora: '08:30', Maquina: 'Máquina 1', Transaccion: 'Premio', Monto: 500 },
  { Date: '2024-06-01',  Maquina: 'Máquina 2',Hora: '10:15', Transaccion: 'Ingreso', Monto: 200 },
  { Date: '2024-06-02', Hora: '11:45', Maquina: 'Máquina 1', Transaccion: 'Premio', Monto: 500 },
  { Date: '2024-06-03',Transaccion: 'Ingreso', Hora: '13:20', Maquina: 'Máquina 2',  Monto: 200 },
  { Date: '2024-06-04', Hora: '15:00', Maquina: 'Máquina 1', Transaccion: 'Premio', Monto: 500 },
  { Date: '2024-06-05',Transaccion: 'Ingreso', Hora: '16:45', Maquina: 'Máquina 2',  Monto: 200 },
];

const columnOrder = ['Date', 'Hora', 'Maquina', 'Transaccion', 'Monto'];





const Det_Reporte = ({user}) => {
  
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [datas, SetDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'Maquinas', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setItem(docSnap.data());
          
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      } finally {

        setInterval(() => {
          setLoading(false);
        }, 3000);
        
      }
    };

    const Data_fechas = async () => {
      const collectionRef = collection(db, 'Transacciones'); 
  
      try {
        const querySnapshot = await getDocs(collectionRef);
        const dataArray = querySnapshot.docs.map(doc => ({
          ...doc.data()
        }));
        SetDatas(dataArray);
        //console.log(dataArray)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
    Data_fechas();
    
  }, [id]);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isExportDisabled, setIsExportDisabled] = useState(true);
  console.log(datas)


  const handleGenerateReport = () => {
   
    const filtered = datas.filter(entry => {
      const entryDate = new Date(entry.Date);
      return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
    });
    setFilteredData(filtered);
    setIsExportDisabled(filtered.length === 0);
    
  };

  const exportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Date;Hora;Maquina;Transaccion;Monto\n";
    
    filteredData.forEach(row => {
      csvContent += `${row.Date};${row.Hora};${row.Maquina};${row.Transaccion};${row.Monto}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `reporte_${startDate}_a_${endDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buildHTMLTable = () => {
    if (!filteredData.length) {
      return <div style={{margin:'30px', color:'red'}}> <h3>Verifica las Fechas seleccionadas.</h3></div>;
    }

    return (
      <table>
      <thead>
        <tr>
          {columnOrder.map((key) => (
            <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
            {columnOrder.map((key, i) => (
              <td key={i}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    );
  };

  const Screen_report=()=>(
    <div className="report-window">
       
      <h2>Generar Reporte de {item.Nombre}</h2>
      <form>
        <div className="form-label">
          {/* <label htmlFor="report-type">Tipo de Reporte:</label>
          <select id="report-type" name="report-type">
            <option value="financial">Financiero</option>
            <option value="maintenance">Mantenimiento</option>
            <option value="usage">Uso</option>
          </select> */}
          <label htmlFor="start-Date">Fecha de Inicio:</label>
          <input 
            type="Date" 
            id="start-Date" 
            name="start-Date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            required 
          />
          <label htmlFor="end-Date">Fecha de Fin:</label>
          <input 
            type="Date" 
            id="end-Date" 
            name="end-Date" 
            value={endDate} 
            onChange={(e) => setEndDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-btn">
          <button type="button" className="btn_generate" onClick={handleGenerateReport}>Generar Reporte</button>
          
        </div>
        
      </form>
      <div id="report-table">
        {buildHTMLTable()}
      </div>
      <div className="form-btn">
          {isExportDisabled ? '': <button style={{backgroundColor:'green', margin:'20px'}} 
            type="button" 
            className="btn_export" 
            onClick={exportCSV} 
          >
            <FileExcel color='white' size={24}/>
            Exportar Archivo Excel
          </button>}
          
        </div>
    </div>
  )

  return (
    <div className="Root_container">
         <NavTitle titulo={'Reportes'} user={user} />

         {!loading ? (<Screen_report/>):(
          <h1 style={{display:'flex',marginTop:'30%', justifyContent:'center'}} className='title'>Consultando datos de la Máquina ...</h1>
         )}
    
    </div>
  );
};

export default Det_Reporte;
