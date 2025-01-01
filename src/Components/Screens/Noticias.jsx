// src/components/Noticias.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Noticias.css';

const newsData = [
  {
    "id": 1,
    "Tipo_carta": "lista",
    "title": "Lanzamiento del Nuevo Software",
    "description": "Hoy lanzamos la nueva versión de nuestro software con mejoras significativas en rendimiento y seguridad.",
    "image": "https://via.placeholder.com/150/0000FF/808080?text=Software+Update+1"
  },
  {
    "id": 2,
    "Tipo_carta": "card",
    "title": "Actualización de Seguridad",
    "description": "Se ha implementado una nueva actualización de seguridad para proteger contra amenazas recientes.",
    "image": "https://via.placeholder.com/150/FF0000/FFFFFF?text=Security+Update"
  },
  {
    "id": 3,
    "Tipo_carta": "detalle",
    "title": "Mejoras en la Interfaz de Usuario",
    "description": "La interfaz de usuario ha sido rediseñada para una experiencia más intuitiva y amigable. Las nuevas características incluyen una navegación más sencilla, menús desplegables mejorados y un diseño visualmente atractivo que facilita el uso diario. Además, se han añadido temas personalizables para que cada usuario pueda adaptar la interfaz a sus preferencias personales.",
    "image": "https://via.placeholder.com/150/00FF00/000000?text=UI+Improvement"
  },
  {
    "id": 4,
    "Tipo_carta": "lista",
    "title": "Nuevo Módulo de Análisis",
    "description": "Ahora disponible el nuevo módulo de análisis de datos que facilita la toma de decisiones.",
    "image": "https://via.placeholder.com/150/FFFF00/000000?text=Analytics+Module"
  },
  {
    "id": 5,
    "Tipo_carta": "card",
    "title": "Mejoras en el Rendimiento",
    "description": "El nuevo software ahora ofrece un rendimiento mejorado, reduciendo los tiempos de carga.",
    "image": "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Performance+Boost"
  },
  {
    "id": 6,
    "Tipo_carta": "detalle",
    "title": "Actualización del Panel de Control",
    "description": "El panel de control ha sido actualizado para ofrecer más funcionalidades y una mejor usabilidad. Ahora, los administradores pueden acceder a informes en tiempo real, personalizar los dashboards según las necesidades de su equipo y gestionar usuarios y permisos con mayor facilidad. Esta actualización también incluye gráficos interactivos y filtros avanzados para un análisis más profundo de los datos.",
    "image": "https://via.placeholder.com/150/0000FF/FFFFFF?text=Control+Panel+Update"
  },
  {
    "id": 7,
    "Tipo_carta": "lista",
    "title": "Nuevas Funcionalidades",
    "description": "Hemos añadido nuevas funcionalidades que permitirán una mayor personalización del software.",
    "image": "https://via.placeholder.com/150/FF4500/FFFFFF?text=New+Features"
  },
  {
    "id": 8,
    "Tipo_carta": "card",
    "title": "Optimización de Recursos",
    "description": "La última actualización incluye una optimización de recursos que reduce el consumo de memoria.",
    "image": "https://via.placeholder.com/150/00CED1/FFFFFF?text=Resource+Optimization"
  },
  {
    "id": 9,
    "Tipo_carta": "detalle",
    "title": "Integración con Nuevas Herramientas",
    "description": "Nuestro software ahora se integra con una variedad de nuevas herramientas para mejorar la productividad. Las nuevas integraciones incluyen aplicaciones populares de gestión de proyectos, plataformas de comunicación y servicios en la nube. Esto permite una colaboración más fluida y un flujo de trabajo más eficiente, eliminando la necesidad de alternar entre múltiples aplicaciones.",
    "image": "https://via.placeholder.com/150/2E8B57/FFFFFF?text=Tool+Integration"
  },
  {
    "id": 10,
    "Tipo_carta": "lista",
    "title": "Corrección de Errores",
    "description": "Se han corregido varios errores menores para mejorar la estabilidad del software.",
    "image": "https://via.placeholder.com/150/8B0000/FFFFFF?text=Bug+Fixes"
  },
  {
    "id": 11,
    "Tipo_carta": "card",
    "title": "Actualización del Sistema de Reportes",
    "description": "El sistema ha sido mejorado para ofrecer informes más detallados y precisos.",
    "image": "https://via.placeholder.com/150/FFD700/000000?text=Report+System+Update"
  },
  {
    "id": 12,
    "Tipo_carta": "detalle",
    "title": "Mejoras en la Seguridad de Datos",
    "description": "Se han implementado nuevas medidas de seguridad para proteger los datos de los usuarios. Estas mejoras incluyen la encriptación avanzada de extremo a extremo, autenticación de dos factores y un monitoreo continuo de actividades sospechosas. Nuestro objetivo es garantizar que los datos de nuestros usuarios estén siempre protegidos contra accesos no autorizados y posibles violaciones de seguridad.",
    "image": "https://via.placeholder.com/150/4B0082/FFFFFF?text=Data+Security"
  },
  {
    "id": 13,
    "Tipo_carta": "lista",
    "title": "Nuevo Asistente Virtual",
    "description": "Presentamos nuestro nuevo asistente virtual que ayudará a los usuarios a navegar y utilizar el software de manera más eficiente.",
    "image": "https://via.placeholder.com/150/0000CD/FFFFFF?text=Virtual+Assistant"
  },
  {
    "id": 14,
    "Tipo_carta": "card",
    "title": "Soporte para Múltiples Idiomas",
    "description": "Ahora el software soporta múltiples idiomas, facilitando su uso a nivel global.",
    "image": "https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Multi-language+Support"
  },
  {
    "id": 15,
    "Tipo_carta": "detalle",
    "title": "Actualización del Sistema de Ayuda",
    "description": "El sistema de ayuda ha sido actualizado con nuevos tutoriales y guías para los usuarios. Además de los tutoriales en video, hemos añadido una sección de preguntas frecuentes y un chat en vivo con soporte técnico disponible las 24 horas. Esto garantiza que los usuarios puedan obtener ayuda rápidamente cuando lo necesiten.",
    "image": "https://via.placeholder.com/150/FF1493/FFFFFF?text=Help+System+Update"
  },
  {
    "id": 16,
    "Tipo_carta": "lista",
    "title": "Optimización de la Base de Datos",
    "description": "Hemos optimizado la base de datos para mejorar la velocidad de acceso y consulta de datos.",
    "image": "https://via.placeholder.com/150/228B22/FFFFFF?text=Database+Optimization"
  },
  {
    "id": 17,
    "Tipo_carta": "card",
    "title": "Soporte Técnico Mejorado",
    "description": "El soporte técnico ha sido mejorado para ofrecer una atención más rápida y eficaz.",
    "image": "https://via.placeholder.com/150/FF6347/FFFFFF?text=Enhanced+Support"
  },
  {
    "id": 18,
    "Tipo_carta": "detalle",
    "title": "Nuevas Plantillas de Diseño",
    "description": "Añadimos nuevas plantillas de diseño para que los usuarios puedan personalizar sus experiencias. Las plantillas incluyen opciones para diferentes industrias, permitiendo una personalización precisa según las necesidades específicas de cada negocio. También se ha mejorado la capacidad de previsualizar cambios antes de aplicarlos, garantizando que las modificaciones se adapten perfectamente a las expectativas del usuario.",
    "image": "https://via.placeholder.com/150/7FFF00/000000?text=Design+Templates"
  },
  {
    "id": 19,
    "Tipo_carta": "lista",
    "title": "Actualización del Sistema de Notificaciones",
    "description": "El sistema de notificaciones ha sido actualizado para ofrecer alertas más precisas y personalizables.",
    "image": "https://via.placeholder.com/150/FF4500/FFFFFF?text=Notification+System+Update"
  },
  {
    "id": 20,
    "Tipo_carta": "card",
    "title": "Mejoras en el Sistema de Backup",
    "description": "Se han realizado mejoras en el sistema de backup para asegurar la integridad de los datos.",
    "image": "https://via.placeholder.com/150/20B2AA/FFFFFF?text=Backup+System+Improvement"
  },
];

// Tarjeta
const NewsCard = ({ title, description, image, Tipo_carta }) => {
  if(Tipo_carta=='card'){
    return(
  <div style={{background: 'linear-gradient(135deg, rgba(17, 255, 0, 0.28), rgba(0, 19, 128, 0.48)), #fff',maxWidth: '540px'}} className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={image} className="img-fluid rounded-start" alt={title} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  </div>)}
};

//Lista
const NewsListItem = ({ title, description, image, Tipo_carta }) => {
  if(Tipo_carta=="lista"){
    return(
      <li className="list-group-item">
  <div className="media d-flex align-items-start justify-content-between">
    <div className="media-body">
      <h5 className="mt-0 text-danger text-left">{title}</h5>
      {description}
    </div>
    <img src={image} className="p-2" alt={title} style={{ width: '128px', height: '128px' }} />
  </div>
  <hr />
</li>
    )
  }
  
};

//Detalles
const DetailedNewsView = ({ title, description, image, Tipo_carta }) => {
  if(Tipo_carta=="detalle"){
    return(

  <div className="detailed-news">
    
    <h2>{title}</h2>
    <hr />
    <img src={image} width={300} height={300} className="img-fluid mb-3" alt={title} />
    <p>{description}</p>
    <br />
  </div>
)}};

const Noticias = () => (
  <div style={{ 
    borderRadius: '10px', 
    border: '2px solid #9e9e9e',
    background: 'linear-gradient(135deg, rgba(255, 174, 0, 0.21), rgba(0, 128, 0, 0.48), rgba(255, 174, 0, 0.21)), #fff',
  }}  className="container my-5 p-5">
    <h1 className="mb-4">Seccion de Noticias </h1>
    <hr />

    {/* <h2>Vista de Tarjetas</h2> */}
    <div className="row">
      {newsData.map(news => (
        <div className="col-md-6" key={news.id}>
          <NewsCard {...news} />
        </div>
      ))}
    </div><br />

    {/* <h2 className="mt-5">Vista de Lista</h2> */}
    <hr />
    <ul className="p-5">
      {newsData.map(news => (
        
        <NewsListItem key={news.id} {...news} />
      ))}
    </ul><br />

    {/* <h2 className="mt-5">Vista Detallada</h2> */}
    <hr />
    <div className=" p-5">
    {newsData.map(news => (
        
      <DetailedNewsView key={news.id} {...news} />
    ))}
    </div>
  </div>
);

export default Noticias;
