const OPCION_SALIR = 4;
const IVA = 1.21;
let totalDeProducto = 1000;

const verProductos = () => {
    let opcion ;
    opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Carteras \n 2-Mochilas \n 3-Zapatillas \n 4-Volver Atras "));
    while(opcion != OPCION_SALIR){
        switch(opcion){
            case 1: 
                    mostrarCarteras();
                    break;
            case 2: mostrarMochilas();
                    break;
            case 3: mostrarZapatillas();
                    break;
            default:
                alert("Ingreso una opcion invalida.");
                break;
        }
        // opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Carteras \n 2-Mochilas \n 3-Zapatillas \n 4-Volver Atras "));
    }
}

const calcularIVA = (total) => {
    const resultado = IVA * total
    alert("El total con IVA: $" + resultado + "\n El total es: $" + total);
}

let opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Ver Productos \n 2-Ver Operacion \n 3-Calcular IVA \n 4 Salir "))

while(opcion != OPCION_SALIR ){

    switch(opcion){
        case 1: 
                verProductos();
                break;
        case 2: 
                verOperacion();
                break;
        case 3: 
                calcularIVA(totalDeProducto);
                break;
        default:
            alert("Ingreso una opcion invalida.");
            break;
    }

    opcion = parseInt(prompt("elige la operacion que deseas, \n 1-Ver Productos \n 2-Ver Operacion \n 3-Calcular IVA \n 4 Salir "));
}

alert("Gracias vuelva pronto.")
