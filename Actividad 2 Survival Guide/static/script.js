// Control de respuestas correctas por sección
let respuestasCorrectas = {
    reglas: 0,
    notas: 0,
    skills: 0,
    tiempo: 0
};

// Función principal para verificar respuestas
function verificarRespuesta(seccion, numPregunta) {
    let respuestaUsuario = "";
    let correcta = false;

    // REGLAS
    if (seccion === "reglas") {
        if (numPregunta === 1) {
            respuestaUsuario = document.getElementById("resp1Reglas").value.trim().toLowerCase();
            if (respuestaUsuario === "80%" || respuestaUsuario === "80" || respuestaUsuario.includes("80")) correcta = true;
        } else if (numPregunta === 2) {
            respuestaUsuario = document.getElementById("resp2Reglas").value.trim().toLowerCase();
            if (respuestaUsuario === "10" || respuestaUsuario.includes("10 minutos")) correcta = true;
        }
    }
    // NOTAS
    else if (seccion === "notas") {
        if (numPregunta === 1) {
            respuestaUsuario = document.getElementById("resp1Notas").value.trim();
            if (respuestaUsuario === "50%" || respuestaUsuario === "50" || respuestaUsuario.includes("50")) correcta = true;
        } else if (numPregunta === 2) {
            respuestaUsuario = document.getElementById("resp2Notas").value.trim();
            if (respuestaUsuario === "90%" || respuestaUsuario === "90" || respuestaUsuario.includes("90")) correcta = true;
        }
    }
    // SKILLS
    else if (seccion === "skills") {
        if (numPregunta === 1) {
            respuestaUsuario = document.getElementById("resp1Skills").value.trim().toLowerCase();
            if (respuestaUsuario === "si" || respuestaUsuario === "sí") correcta = true;
        } else if (numPregunta === 2) {
            respuestaUsuario = document.getElementById("resp2Skills").value.trim().toLowerCase();
            if (respuestaUsuario.includes("firebase") || respuestaUsuario.includes("android") || respuestaUsuario.includes("flutter")) correcta = true;
        }
    }
    // TIEMPO
    else if (seccion === "tiempo") {
        if (numPregunta === 1) {
            respuestaUsuario = document.getElementById("resp1Tiempo").value.trim().toLowerCase();
            if (respuestaUsuario.includes("17 de Agosto") || respuestaUsuario.includes("agosto")) correcta = true;
        } else if (numPregunta === 2) {
            respuestaUsuario = document.getElementById("resp2Tiempo").value.trim().toLowerCase();
            if (respuestaUsuario.includes("junio")) correcta = true;
        }
    }

    if (correcta) {
        respuestasCorrectas[seccion]++;
        alert(` Correcto. Vas ${respuestasCorrectas[seccion]}/2 en esta sección.`);
    } else {
        alert(` Incorrecto. Revisa el contenido de la sección.`);
        return;
    }

    // Habilitar checkbox si tiene 2 correctas
    if (respuestasCorrectas[seccion] >= 2) {
        let checkId = "check" + seccion.charAt(0).toUpperCase() + seccion.slice(1);
        document.getElementById(checkId).disabled = false;
    }
}

// Detectar cambios en checkboxes para desbloquear siguiente sección
document.addEventListener("DOMContentLoaded", function() {
    // Checkbox de Reglas → desbloquea Notas
    document.getElementById("checkReglas").addEventListener("change", function(e) {
        if (e.target.checked) {
            document.getElementById("seccionNotas").classList.remove("bloqueada");
        }
    });

    // Checkbox de Notas → desbloquea Skills
    document.getElementById("checkNotas").addEventListener("change", function(e) {
        if (e.target.checked) {
            document.getElementById("seccionSkills").classList.remove("bloqueada");
        }
    });

    // Checkbox de Skills → desbloquea Tiempo
    document.getElementById("checkSkills").addEventListener("change", function(e) {
        if (e.target.checked) {
            document.getElementById("seccionTiempo").classList.remove("bloqueada");
        }
    });

    // Checkbox de Tiempo → solo mensaje final
    document.getElementById("checkTiempo").addEventListener("change", function(e) {
        if (e.target.checked) {
            alert("🎉 ¡Completaste toda la aventura! Ya dominas reglas, evaluación y fechas.");
        }
    });
});