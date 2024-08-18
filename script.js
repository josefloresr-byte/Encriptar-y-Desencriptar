// Selección de elementos del DOM
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Matriz de codificación/decodificación
const matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

// Función de encriptar
function encriptar(texto) {
  let textoEncriptado = texto.toLowerCase();
  matrizCodigo.forEach(([original, codificado]) => {
    textoEncriptado = textoEncriptado.replaceAll(original, codificado);
  });
  return textoEncriptado;
}

// Función de desencriptar
function desencriptar(texto) {
  let textoDesencriptado = texto.toLowerCase();
  matrizCodigo.forEach(([original, codificado]) => {
    textoDesencriptado = textoDesencriptado.replaceAll(codificado, original);
  });
  return textoDesencriptado;
}

// Evento del botón encriptar
function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

// Evento del botón desencriptar
function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

// Función para copiar el texto en el portapapeles
function copiarTexto() {
  mensaje.select(); // Selecciona el texto dentro del textarea
  document.execCommand("copy"); // Copia el texto seleccionado al portapapeles
  alert("Texto copiado, pegarlo y continuar."); // Notifica al usuario
}

// Enlazar la función de copiar al botón de copiar
document.querySelector(".copiar").addEventListener("click", copiarTexto);
