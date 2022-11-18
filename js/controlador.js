//contolador
const OPCION_CATEGORIAS = 1;
const OPCION_EMPRESAS = 2;
const OPCION_PRODUCTOS = 3;
const OPCION_ORDENES = 4;
const OPCION_MOTORISTAS = 5;
const OPCION_CLIENTES = 6;
const seleccionarOpcion = (opcion) => {
    switch (opcion) {
        case OPCION_CATEGORIAS:
          console.log('Visualizar categorias');
         
          
          document.getElementById('contenido1').style.display = "block";
          document.getElementById('contenido2').style.display = "none";
          document.getElementById('contenido3').style.display = "none";
          document.getElementById('contenido4').style.display = "none";
          document.getElementById('contenido5').style.display = "none";
          document.getElementById('contenido6').style.display = "none";
        
          break;
        case OPCION_EMPRESAS:
          console.log('Visualizar empresas');
         
        
          document.getElementById('contenido1').style.display = "none";
          document.getElementById('contenido2').style.display = "block";
          document.getElementById('contenido3').style.display = "none";
          document.getElementById('contenido4').style.display = "none";
          document.getElementById('contenido5').style.display = "none";
          document.getElementById('contenido6').style.display = "none";
         
          break;
          case OPCION_PRODUCTOS:
          console.log('Visualizar productos');
         
          
          document.getElementById('contenido1').style.display = "none";
          document.getElementById('contenido2').style.display = "none";
          document.getElementById('contenido3').style.display = "block";
          document.getElementById('contenido4').style.display = "none";
          document.getElementById('contenido5').style.display = "none";
          document.getElementById('contenido6').style.display = "none";
        
          break;
          case OPCION_ORDENES:
          console.log('Visualizar ordenes');
         
          
          document.getElementById('contenido1').style.display = "none";
          document.getElementById('contenido2').style.display = "none";
          document.getElementById('contenido3').style.display = "none";
          document.getElementById('contenido4').style.display = "block";
          document.getElementById('contenido5').style.display = "none";
          document.getElementById('contenido6').style.display = "none";
        
          break;
          case OPCION_MOTORISTAS:
          console.log('Visualizar categorias');
         
          
          document.getElementById('contenido1').style.display = "none";
          document.getElementById('contenido2').style.display = "none";
          document.getElementById('contenido3').style.display = "none";
          document.getElementById('contenido4').style.display = "none";
          document.getElementById('contenido5').style.display = "block";
          document.getElementById('contenido6').style.display = "none";
        
          break;
          case OPCION_CLIENTES:
          console.log('Visualizar categorias');
         
          
          document.getElementById('contenido1').style.display = "none";
          document.getElementById('contenido2').style.display = "none";
          document.getElementById('contenido3').style.display = "none";
          document.getElementById('contenido4').style.display = "none";
          document.getElementById('contenido5').style.display = "none";
          document.getElementById('contenido6').style.display = "block";
        
          break;
        default:
          break;
    }
}


$(document).ready(function () {
    $('#datosCategorias').DataTable();
});
$(document).ready(function () {
    $('#datosEmpresas').DataTable();
});

$(document).ready(function () {
    $('#datosProductos').DataTable();
});
$(document).ready(function () {
    $('#datosOrdenes').DataTable();
});


