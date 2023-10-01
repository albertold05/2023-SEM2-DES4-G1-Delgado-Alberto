var sumarButton = document.getElementById("boton2");

// Agregar un evento click al botón
sumarButton.addEventListener("click", function() {
    // Obtener los valores de los campos de entrada
    var input1 = document.getElementById("alfanum1").value;
    var input2 = document.getElementById("alfanum2").value;

    // Convertir los valores a números enteros
    var numero1 = parseInt(input1);
    var numero2 = parseInt(input2);

    // Verificar si la conversión fue exitosa
  
        var promedio = (numero1 + numero2)/2;

        // Mostrar el resultado en la consola
        console.log("El decimal es: " + promedio);
        var numeroBinario = parseFloat(promedio).toString(2);
        console.log("El transformado a binario es: " + numeroBinario);
});

