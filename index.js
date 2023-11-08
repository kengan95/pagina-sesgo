/// Efecto de escritura letra por letra para el título del header
const tituloHeader = document.querySelector('.titulo');
const textoTitulo = tituloHeader.textContent;
tituloHeader.textContent = '';
let i=textoTitulo.length -1 
const interval= setInterval(()=>{

  tituloHeader.textContent=textoTitulo.slice(i); i-- 

  if(i<0){
    clearInterval(interval)
  }


  

} ,300) 

const tituloHeader1 = document.querySelector('.subtitulo');
const textoTitulo1 = tituloHeader1.textContent;
tituloHeader1.textContent = '';
let x=textoTitulo1.length -1 
const interval1= setInterval(()=>{

  tituloHeader1.textContent=textoTitulo1.slice(x); x-- 

  if(x<0){
    clearInterval(interval1)
  }

} ,300)




// Cambiar color de fondo para el body
const body = document.body;
document.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

const parrafos = document.querySelectorAll('.parrafo');
parrafos.forEach(parrafo => {
  parrafo.addEventListener('mouseover', () => {
    parrafo.style.textShadow = '0px 0px 10px #fff';
  });
  parrafo.addEventListener('mouseout', () => {
    parrafo.style.textShadow = 'none';
  });
});

// Efecto de zoom para las imágenes de la galería
const imagenesGaleria = document.querySelectorAll('.imagenes img');
imagenesGaleria.forEach((imagen) => {
  imagen.addEventListener('mouseover', () => {
    imagen.style.transform = 'scale(1.2)';
  });
  imagen.addEventListener('mouseout', () => {
    imagen.style.transform = 'scale(1)';
  });
});

// Efecto de aparición gradual para las tarjetas del equipo

  const tarjetasEquipo = document.querySelectorAll('.card');
  tarjetasEquipo.forEach((tarjeta, index) => {
    tarjeta.addEventListener('mouseover',()=>{
      tarjeta.style.animation = `aparicion 1s ${index * 0.2}s forwards`; 
    })
  
  });







// Efecto de rotación para el logo de los clientes
const logosClientes = document.querySelectorAll('.cliente img');

 
logosClientes.forEach((logo) => {
  logo.addEventListener('mouseover', () => {
    logo.style.transform = 'rotate(360deg)';
  });
  logo.addEventListener('mouseout', () => {
    logo.style.transform = 'rotate(0deg)';
  });
});