function mostrar(){

    let nombre = document.getElementById("nombreCompleto").value;
    let fecha = document.getElementById("fechaNac").value;
    let generoIngresado = document.getElementById("genero").value.toLowerCase();
    let sangreIngresada = document.getElementById("sangre").value.toUpperCase();
    let alturaIn = parseFloat(document.getElementById("altura").value);
    let pesoKg = parseFloat(document.getElementById("peso").value);

    if(!nombre || !fecha || isNaN(alturaIn) || isNaN(pesoKg)){
        document.getElementById("resultado").textContent =
            "Faltan datos o hay valores incorrectos";
        return;
    }

    // Calcular edad
    let nacimiento = new Date(fecha);
    let hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    if(
        hoy.getMonth() < nacimiento.getMonth() ||
        (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())
    ){
        edad--;
    }

    // Género con ícono
    let generoFinal;
    if(generoIngresado === "masculino"){
        generoFinal = "♂️ Masculino";
    } else if(generoIngresado === "femenino"){
        generoFinal = "♀️ Femenino";
    } else {
        generoFinal = "Género no identificado";
    }

    // Tipo de sangre
    let tiposValidos = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];
    let sangreFinal = tiposValidos.includes(sangreIngresada)
        ? sangreIngresada
        : "Sangre no reconocida";

    // Conversiones
    let alturaCm = (alturaIn * 2.54).toFixed(1);
    let pesoLb = (pesoKg * 2.20462).toFixed(1);

    document.getElementById("resultado").innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Edad:</strong> ${edad} años</p>
        <p><strong>Género:</strong> ${generoFinal}</p>
        <p><strong>Tipo de sangre:</strong> ${sangreFinal}</p>
        <p><strong>Altura:</strong> ${alturaCm} cm</p>
        <p><strong>Peso:</strong> ${pesoLb} lb</p>
    `;
}
