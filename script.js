const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const validarFormulario = (e) => {
    switch (e.target.name){
        case 'usuario':
            const errorU = document.getElementById('formulario_input_error_usuario')
            validarCampo(expresiones.usuario, e.target, errorU)
        break;
        case 'nombre':
            const errorN = document.getElementById('formulario_input_error_nombre')
            validarCampo(expresiones.nombre, e.target, errorN);
        break;
        case 'contrasena':
            const errorC = document.getElementById
            ('formulario_input_error_contrasena')
            validarCampo(expresiones.password, e.target, errorC)
        break;
        case 'repContrasena':
            const errorRC = document.getElementById('formulario_input_error_repContrasena')
            contrasena = document.getElementById('contrasena').value
            errorRC.style.display = (contrasena == e.target.value) ? 'none' : 'block'
        break;
        case 'email':
            const errorE = document.getElementById('formulario_input_error_email')
            validarCampo(expresiones.correo, e.target, errorE);
        break;
        case 'phone':
            const errorP = document.getElementById('formulario_input_error_phone')
            validarCampo(expresiones.telefono, e.target, errorP);
        break;
        case 'checkbox':
            const errorCH = document.getElementById('formulario_input_error_checkbox')
            const checkbox = document.getElementById('checkbox')
            errorCH.style.display = (checkbox.checked)? 'none' : 'block'
        break;
        
    }
}

const validarCampo = (expresion, input, tipo) =>{
    tipo.style.display = expresion.test(input.value)? 'none' : 'block'
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const send = document.getElementById('formulario_input_send').value
    send.style.display = "block"
})
