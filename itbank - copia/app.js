const iconomenu = document.querySelector('#icono-menu'),
    menu = document.querySelector('#menu');

iconomenu.addEventListener('click', (e) => {

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaactual = e.target.getAttribute('src');

    if (rutaactual == 'images/pngwing.com.png') {
        e.target.setAttribute('src', 'images/pngwing.com.png');
    } else {
        e.target.setAttribute('src', 'images/pngwing.com.png');
    }

});


function calcular() {
    let tasaDeInteres = 1.18;
    let montoFinal = parseFloat(document.getElementById("monto").value);
    let plazoFinal = parseInt(document.getElementById("cuotas").value);
    let interesMensual = montoFinal * tasaDeInteres;
    let totalAPagar = montoFinal + interesMensual * plazoFinal;
    document.getElementById("resultado").textContent = "Total a pagar en " + plazoFinal +" meses: $" + totalAPagar.toFixed(2);
};


function convertir() {
    let porcentajePesoADolar = 0.0029;
    let porcentajeDolarAPeso = 349.93;
    let cantidad = parseFloat(document.getElementById("cantidad").value);
    let moneda = document.getElementById("moneda").value;
    let resultado = 0;
    if (moneda === "pesoArg"){
        resultado = cantidad * porcentajePesoADolar;
        document.getElementById("resultado").textContent = cantidad +" Pesos argentinos son " + resultado.toFixed(2) + " USD.";
    } else if (moneda === "dolar"){
        resultado = cantidad * porcentajeDolarAPeso;
        document.getElementById("resultado").textContent = cantidad +" USD son " + resultado.toFixed(2) + " Pesos argentinos.";
    }
};


function convertirEuro() {
    let porcentajePesoAEuro = 0.0026;
    let porcentajeEuroAPeso = 378.32;
    let cantidadEuro = parseFloat(document.getElementById("cantidadEuro").value);
    let monedaEuro = document.getElementById("monedaEuro").value;
    let resultadoEuro = 0;
    if (monedaEuro === "pesoArgEuro"){
        resultadoEuro = cantidadEuro * porcentajePesoAEuro;
        document.getElementById("resultadoEuro").textContent = cantidadEuro +" Pesos argentinos son " + resultadoEuro.toFixed(2) + " Euros.";
    } else if (monedaEuro === "euro"){
        resultadoEuro = cantidadEuro * porcentajeEuroAPeso;
        document.getElementById("resultadoEuro").textContent = cantidadEuro +" Euros son " + resultadoEuro.toFixed(2) + " Pesos argentinos.";
    }
};