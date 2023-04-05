// encriptar mensaje  

const btnEncriptar = document.querySelector('.btn-encriptar');

btnEncriptar.addEventListener('click', () => {
    const desplazamiento = 3; // esto es para mover 3 puestos en la tabla de ASCII para el cifrado cesar 
    const mensaje = document.querySelector('.text-area').value; // esta variable es el menaje obtenido 
    let mensajeEncriptado = '';   // esto almacenara cada letra del mensaje encriptado con el string vacio


for (let i = 0; i < mensaje.length; i++) { // se usa el bucle for para aplicar el cifrado cesar al mensaje 
  let letra = mensaje[i]; // la variable letra es para trabajar con cada letra del mensaje 
  let codigoAscii = letra.charCodeAt(0); //la variable codigoAsccii usa letra aplicando charcodeat para que el codigo entienda que trabajaremos en ascii
  
  // se verifica que la letra sea minuscula ya que en el codigo ascii de la 97 a la 122 son minusculas 
    if (codigoAscii >= 97 && codigoAscii <= 122) {
        codigoAscii = ((codigoAscii - 97 + desplazamiento) % 26) + 97; // esta formula hace que la variable este dentro del rango adecuado en el Ascii 
        letra = String.fromCharCode(codigoAscii); 
    }
    
    mensajeEncriptado += letra; 
}

document.querySelector('.mensaje').value = mensajeEncriptado; // esto muestra el mensaje ya encriptado

});

// desencriptar el mensaje

const btnDesencriptar = document.querySelector('.btn-desencriptar');

btnDesencriptar.addEventListener('click', () => {
  const desplazamiento = 3; // Desplazamiento fijo para el cifrado de César
  const mensajeEncriptado = document.querySelector('.mensaje').value; // Obtener el mensaje encriptado
  
  let mensajeDesencriptado = '';

  for (let i = 0; i < mensajeEncriptado.length; i++) {
    let letra = mensajeEncriptado[i];
    let codigoAscii = letra.charCodeAt(0);
  
    // Verificar si la letra es una letra minúscula
    if (codigoAscii >= 97 && codigoAscii <= 122) {
      // Invertir el desplazamiento aplicado al código ASCII de la letra
      codigoAscii = ((codigoAscii - 97 - desplazamiento + 26) % 26) + 97;
      letra = String.fromCharCode(codigoAscii);
    }
  
    mensajeDesencriptado += letra;
  }

  document.querySelector('.mensaje').value = mensajeDesencriptado; // Mostrar el mensaje desencriptado
});


// copiar el mensaje 

const copiar = () => {
    const mensaje = document.querySelector('.mensaje').value;
    
    // Crear un elemento de textarea temporal
    const textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    
    // Asignar el valor del mensaje al elemento textarea
    textarea.value = mensaje;
    
    // Seleccionar y copiar el contenido del textarea
    textarea.select();
    document.execCommand('copy');
    
    // Eliminar el elemento textarea temporal
    document.body.removeChild(textarea);
  };
  