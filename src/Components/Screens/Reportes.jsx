import React, { useState } from 'react';
import './reporte.css';
import { FileExcel, Joystick } from 'react-bootstrap-icons';
import NavTitle from '../nav/NavTitle';

const data = [
  { Date: '2024-06-01', Hora: '08:30', Maquina: 'Máquina 1', Transaccion: 'Premio', Monto: 500 },
  { Date: '2024-06-01', Hora: '10:15', Maquina: 'Máquina 2', Transaccion: 'Ingreso', Monto: 200 },
  { Date: '2024-06-02', Hora: '11:45', Maquina: 'Máquina 1', Transaccion: 'Premio', Monto: 500 },
  { Date: '2024-06-03', Hora: '13:20', Maquina: 'Máquina 2', Transaccion: 'Ingreso', Monto: 200 },
  { Date: '2024-06-04', Hora: '15:00', Maquina: 'Máquina 1', Transaccion: 'Premio', Monto: 500 },
  { Date: '2024-06-05', Hora: '16:45', Maquina: 'Máquina 2', Transaccion: 'Ingreso', Monto: 200 },
];

const ReportWindow = ({user}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isExportDisabled, setIsExportDisabled] = useState(true);

  const handleGenerateReport = () => {
    const filtered = data.filter(entry => {
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
            {Object.keys(filteredData[0]).map((key) => (
              <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="Root_container">
         <NavTitle titulo={'Reportes'} user={user} />
    <div className="report-window">
       
      <h2>Generar Reporte</h2>
      <form>
        <div className="form-label">
          <label htmlFor="report-type">Tipo de Reporte:</label>
          <select id="report-type" name="report-type">
            <option value="financial">Financiero</option>
            <option value="maintenance">Mantenimiento</option>
            <option value="usage">Uso</option>
          </select>
          <label htmlFor="start-Date">Date de Inicio:</label>
          <input 
            type="Date" 
            id="start-Date" 
            name="start-Date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
            required 
          />
          <label htmlFor="end-Date">Date de Fin:</label>
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
    </div>
  );
};

export default ReportWindow;
