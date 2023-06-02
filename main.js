/* Curso de JavaScript en Coderhouse
 Mi proyecto final consistirá en una sección de cotización para el sitio web que hice en el curso de Desarrollo Web de Coderhouse: Workit-out Business Catering
  Workit-out Business Catering ofrecerá a empresas servicios de banquetes y paquetes que incluyen el lugar y/o mobiliario para eventos empresariales.
 En ese sitio agregaré una sección en la que incluiré un cotizador de algunos paquetes especiales en Jardín Santa Ursula.
 El cotizador solicitaría al cliente potencial/usuario que ingrese el número de personas (el cual deberá estar entre 10 y 200), la selección del paquete y en su caso servicios adicionales, los cuales tendrán un 10% de descuento al contratar más de 1.
 Los paquetes son los siguientes:
   Paquete 1. Paquete JSU Básico Plus
   Paquete 2. Paquete JSU Básico Plus con Desayuno. Aquí deberá seleccionar entre 2 opciones: Desayuno Emplatado o Desayno Buffet.
   Paquete 3. Paquete JSU Básico Plus con Comida. Aquí deberá seleccionar entre 3 opciones: Comida Emplatada o Comida Buffet o Bolsa Lunch.
   Paquete 4. Paquete JSU Básico Plus con Desayuno y Comida. Aquí debera seleccionar una de las 2 opciones de desayuno y 1 de las 3 opciones de comida.
 Los servicios adicionales a elegir son los siguientes:
   Pantalla de 150" y proyector
   Sala lounge. El número de salas lounge podrá ser entre 1 y 4
   Hora extra de evento con coffee break. El número de horas extra podrá ser entre 1 y 4.
*/

//const espacio = " ";

//Preguntar cómo puedo incorporar un "do while" o "for" para que pregunte el nombre y el email 3 veces en caso que no escriban su nombre??

let nombreInteresado = prompt("Por favor, ingresa tu nombre");

if (nombreInteresado == "" || nombreInteresado == "." || nombreInteresado == " ") {
    alert("No ingresaste tu nombre, por favor ingresa tu nombre");

    nombreInteresado = prompt("Por favor, ingresa tu nombre");
}
else {
    // alert("Hola " + nombreInteresado);
}


let emailInteresado = prompt("Ingresa tu correo electrónico");

if (emailInteresado == "" || emailInteresado == "." || emailInteresado == " ") {
    alert("No ingresaste tu correo electrónico");

    emailInteresado = prompt("Ingresa tu correo electrónico");
}
else {
    alert("Gracias " + nombreInteresado + "." + " " + "Revisa nuestros paquetes especiales");
}

console.log(nombreInteresado);

console.log(emailInteresado);

// En el HTML tendría la descripción de cada uno de los paquetes y para este ejercicio les asigno un número a cada uno de ellos para que los seleccionen

let paqueteEspecial = prompt("Ingresa el número del paquete de tu interés");

let numPersonas = 0;

while (paqueteEspecial != "ESC") {
    switch (paqueteEspecial) {
        case "1":
            alert("Seleccionaste el paquete #1 JSU Básico Plus");
            break;
        case "2":
            alert("Seleccionaste el paquete #2 JSU Básico Plus con Desayuno");
            break;
        case "3":
            alert("Seleccionaste el paquete #3 JSU Básico Plus con Comida");
            break;
        case "4":
            alert("Seleccionaste el paquete #4 JSU Básico Plus con Desayuno y Comida");
            break;
        default:
            alert("No seleccionaste ninguno de nuestros paquetes. Si deseas más información o tienes alguna pregunta o comentario llena nuestro solicitud de cotización")
            break;
    }
    //Checar cómo hago para que no le pregunte el número de personas cuando entre el default o si esto lo meto dentro de las llaves anteriores o
    //si pongo un "for" "continue" cuando contestan el default y cómo hacerlo
    numPersonas = prompt("Ingresa el número de personas de tu evento (mínimo 10 y máximo 200 personas");
    break;
}


let adicionales = prompt("¿Quieres contratar algún servicio adicional para tu paquete? Elige de las siguientes opciones");

while (adicionales != "ESC" || "No") {
    switch (adicionales) {
        case "1":
            alert('Seleccionaste el servicio adicional de Pantalla de 150" y proyector');
            break;
        case "2":
            alert("¿Cuántas salas lounge quieres adicionar?");
            // Aquí incluiré código para seleccionar entre 1 y 3 salas
            break;
        case "3":
            alert("¿Cuántas horas extra de evento con coffee break requieres?");
            // Aquí incluiré código para seleccionar entre 1 y 3 salas
        default:
            alert("No seleccionaste ninguno de nuestros servicios adicionales. Si deseas más información o tienes alguna pregunta o comentario llena nuestro solicitud de cotización")
            break;
    }
alert("En breve tendrás tu cotización")
    break;
}

