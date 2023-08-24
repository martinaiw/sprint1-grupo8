<><script>
    var peso1 = prompt("Ingrese peso argentino")
    var dolar2 = 347.50;
    var pesoADolar = peso1*dolar2;
    console.log(peso1 + "Dólar es igual a " + dolarAPeso + "Dólar");
    var dolar1 = prompt("Ingrese dólar");
    var peso2 = 0.0029;
    var dolarAPeso = dolar1*peso2;
    console.log(dolar1 + "Dólar es igual a " + pesoADolar + "Peso argentino");
</script><script>
        var montoInicial = prompt("Introducir monto");
        var tasaInteres = 118%montoInicial;
        var plazaPagos12 = 12;
        var plazaPagos18 = 18;
        var plazaPagos24 = 24;
        var resultado12 = montoInicial*tasaInteres*plazaPagos12;
        var resultado18 = montoInicial*tasaInteres*plazaPagos18;
        var resultado24 = montoInicial*tasaInteres*plazaPagos24;
        var montoTotal12 = resultado12+montoInicial;
        var montoTotal18 = resultado18+montoInicial;
        var montoTotal24 = resultado24+montoInicial;
        console.log("En 12 meses el monto total a pagar es de" + montoTotal12 + "pesos.");
        console.log("En 18 meses el monto total a pagar es de" + montoTotal18 + "pesos.");
        console.log("En 24 meses el monto total a pagar es de" + montoTotal24 + "pesos.");
    </script></>