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
  
        if (display.textContent === "0") {
            display.textContent = pressedKey;
        } else { 
            display.textContent += pressedKey;
        }  
    })
})
});