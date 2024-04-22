//0 Insertar el código dentro del evento DOMContentLoad
document.addEventListener('DOMContentLoaded', () => {
    

 //1º DECLARACIÓN DE VARIABLES
let display = document.querySelector(".display");
let keys = document.querySelectorAll(".container2 div");

/*2º Agregar un evento de clic a cada tecla numérica y no numérica.
- El punto de partida en el display siempre será 0.
- La tecla delete (del) borra el último nº escrito
- La tecla = a igual
- La tecla reset a resetear a 0 el display*/
keys.forEach(key => {
    key.addEventListener("click", () => {
        const pressedKey = key.textContent;

        
        if (key.id === "equal") {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error";
            }
            return;
        }


        if (key.id === "reset") {
            display.textContent = "0";
            return;
        }


        if (key.id === "delete") {
            if (display.textContent.length === 1 || display.textContent === "Error") {
            display.textContent = "0";
        } else {
            display.textContent = display.textContent.slice(0, -1);
        }
            return;
        }
/* Esta función maneja el evento de presionar la tecla "delete" en la calculadora.
La primera condición verifica si la tecla presionada (del) es la de borrar.
Si el contenido del display tiene una longitud de 1 o muestra "Error", se restablece a "0".
Restablece el contenido del display a "0".
Si hay más de un carácter en el display y no muestra "Error", elimina el último carácter.
Elimina el último carácter del display.
Return para terminar la ejecución de la función después de procesar la tecla de borrar.*/    



        if (display.textContent === "0") {
            display.textContent = pressedKey;
        } else { 
            display.textContent += pressedKey;
        }  
    })
})
});