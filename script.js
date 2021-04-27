let validaciones = {
    q5001: 'pn',
    q5002a: true,
    q5002b: false,
    q5002c: false,
    q5003: 14,
    q5004a: false,
    q5004b: true,
    q5004c: false,
    q5005: "16Sem",
    q5006: ["q5006a", "q5006b"]
}



document.getElementById("quiz").addEventListener("submit", function(event) {
    event.preventDefault();

    let cincoMilUno = event.target.elements["q5001"].value;
    console.log(cincoMilUno)

    let cincoMilDosA = event.target.elements["q5002a"].checked;
    let cincoMilDosB = event.target.elements["q5002b"].checked;
    let cincoMilDosC = event.target.elements["q5002c"].checked;

    let cincoMilTres = event.target.elements["q5003"].value;

    let cincoMilCuatroA = event.target.elements["q5004a"].checked;
    let cincoMilCuatroB = event.target.elements["q5004b"].checked;
    let cincoMilCuatroC = event.target.elements["q5004c"].checked;

    let cincoMilCinco = event.target.elements["q5005"].value;



    // Validacion 5001

    if (!cincoMilUno) {
        return alert("Por favor marque una opción")
    } else if (cincoMilUno == validaciones.q5001) {
        document.querySelector("label[for='5001a']").className = "green"
        document.querySelector("label[for='5001b']").className = "default"
        document.querySelector("label[for='5001c']").className = "default"
    } else if (cincoMilUno == "gc") {
        document.querySelector("label[for='5001a']").className = "default"
        document.querySelector("label[for='5001b']").className = "red"
        document.querySelector("label[for='5001c']").className = "default"
    } else if (cincoMilUno == "pl") {
        document.querySelector("label[for='5001a']").className = "default"
        document.querySelector("label[for='5001b']").className = "default"
        document.querySelector("label[for='5001c']").className = "red"
    }

    // Validacion 5002

    if (!cincoMilDosA && !cincoMilDosB && !cincoMilDosC) {
        document.querySelector("label[for='5002a']").className = "default"
        document.querySelector("label[for='5002b']").className = "default"
        document.querySelector("label[for='5002c']").className = "default"
        return alert("Por favor marque una opción")
    } else if (cincoMilDosA == validaciones.q5002a && cincoMilDosB == validaciones.q5002b && cincoMilDosC == validaciones.q5002c) {
        document.querySelector("label[for='5002a']").className = "green"
        document.querySelector("label[for='5002b']").className = "default"
        document.querySelector("label[for='5002c']").className = "default"
    } else {
        if (cincoMilDosA == false && cincoMilDosB == true && cincoMilDosC == false) {
            document.querySelector("label[for='5002a']").className = "default"
            document.querySelector("label[for='5002b']").className = "red"
            document.querySelector("label[for='5002c']").className = "default"
        } else if (cincoMilDosA == false && cincoMilDosB == false && cincoMilDosC == true) {
            document.querySelector("label[for='5002a']").className = "default"
            document.querySelector("label[for='5002b']").className = "default"
            document.querySelector("label[for='5002c']").className = "red"
        } else if (cincoMilDosA == true && cincoMilDosB == true && cincoMilDosC == true) {
            document.querySelector("label[for='5002a']").className = "red"
            document.querySelector("label[for='5002b']").className = "red"
            document.querySelector("label[for='5002c']").className = "red"
        } else if (cincoMilDosA == true && cincoMilDosB == false && cincoMilDosC == true) {
            document.querySelector("label[for='5002a']").className = "red"
            document.querySelector("label[for='5002b']").className = "default"
            document.querySelector("label[for='5002c']").className = "red"
        } else if (cincoMilDosA == false && cincoMilDosB == true && cincoMilDosC == true) {
            document.querySelector("label[for='5002a']").className = "default"
            document.querySelector("label[for='5002b']").className = "red"
            document.querySelector("label[for='5002c']").className = "red"
        } else if (cincoMilDosA == true && cincoMilDosB == true && cincoMilDosC == false) {
            document.querySelector("label[for='5002a']").className = "red"
            document.querySelector("label[for='5002b']").className = "red"
            document.querySelector("label[for='5002c']").className = "default"
        }
    }




    // Validacion 5003
    if (!cincoMilTres) {
        return alert("Por favor marque una opción")
    } else if (cincoMilTres == 14) {
        document.getElementById('5003a').className = "edadOK"
    } else {
        document.getElementById('5003a').className = "edadFalse"
    }


    // Validacion 5004


    if (!cincoMilCuatroA && !cincoMilCuatroB && !cincoMilCuatroC) {

        document.querySelector("label[for='5004a']").className = "default"
        document.querySelector("label[for='5004b']").className = "default"
        document.querySelector("label[for='5004c']").className = "default"
        return alert("Por favor marque una opción")
    } else if (cincoMilCuatroA == validaciones.q5004a && cincoMilCuatroB == validaciones.q5004b && cincoMilCuatroC == validaciones.q5004c) {
        document.querySelector("label[for='5004a']").className = "default"
        document.querySelector("label[for='5004b']").className = "green"
        document.querySelector("label[for='5004c']").className = "default"
    } else {
        if (cincoMilCuatroA == true && cincoMilCuatroB == false && cincoMilCuatroC == false) {
            document.querySelector("label[for='5004a']").className = "red"
            document.querySelector("label[for='5004b']").className = "default"
            document.querySelector("label[for='5004c']").className = "default"
        } else if (cincoMilCuatroA == false && cincoMilCuatroB == false && cincoMilCuatroC == true) {
            document.querySelector("label[for='5004a']").className = "default"
            document.querySelector("label[for='5004b']").className = "default"
            document.querySelector("label[for='5004c']").className = "red"
        } else if (cincoMilCuatroA == true && cincoMilCuatroB == true && cincoMilCuatroC == true) {
            document.querySelector("label[for='5004a']").className = "red"
            document.querySelector("label[for='5004b']").className = "red"
            document.querySelector("label[for='5004c']").className = "red"
        } else if (cincoMilCuatroA == true && cincoMilCuatroB == false && cincoMilCuatroC == true) {
            document.querySelector("label[for='5004a']").className = "red"
            document.querySelector("label[for='5004b']").className = "default"
            document.querySelector("label[for='5004c']").className = "red"
        } else if (cincoMilCuatroA == false && cincoMilCuatroB == true && cincoMilCuatroC == true) {
            document.querySelector("label[for='5004a']").className = "default"
            document.querySelector("label[for='5004b']").className = "red"
            document.querySelector("label[for='5004c']").className = "red"
        } else if (cincoMilCuatroA == true && cincoMilCuatroB == true && cincoMilCuatroC == false) {
            document.querySelector("label[for='5004a']").className = "red"
            document.querySelector("label[for='5004b']").className = "red"
            document.querySelector("label[for='5004c']").className = "default"
        }
    }

    // Validacion 5005

    if (!cincoMilCinco) {
        return alert("Por favor marque una opción")
    } else if (cincoMilCinco == validaciones.q5005) {
        document.querySelector("label[for='5005a']").className = "default"
        document.querySelector("label[for='5005b']").className = "green"
        document.querySelector("label[for='5005c']").className = "default"
    } else if (cincoMilCinco == "20Sem") {
        document.querySelector("label[for='5005a']").className = "red"
        document.querySelector("label[for='5005b']").className = "default"
        document.querySelector("label[for='5005c']").className = "default"
    } else if (cincoMilCinco == "18Sem") {
        document.querySelector("label[for='5005a']").className = "default"
        document.querySelector("label[for='5005b']").className = "default"
        document.querySelector("label[for='5005c']").className = "red"
    }





    // Validacion 5006

    let cincoMilSeis = [];
    for (let option of document.getElementById('q5006').options) {
        if (option.selected) {
            cincoMilSeis.push(option.value);


        }
    }

    let stringArr = cincoMilSeis.toString()
    if (cincoMilSeis.length == 0) {
        document.querySelector("option[value='q5006a']").className = "default"
        document.querySelector("option[value='q5006b']").className = "default"
        document.querySelector("option[value='q5006c']").className = "default"
        return alert("Por favor marque una opción")
    } else if (validaciones.q5006 == stringArr) {
        document.querySelector("option[value='q5006a']").className = "green_back"
        document.querySelector("option[value='q5006b']").className = "green_back"
        document.querySelector("option[value='q5006c']").className = "default"
    } else {
        document.querySelector("option[value='q5006a']").className = "default"
        document.querySelector("option[value='q5006b']").className = "default"
        document.querySelector("option[value='q5006c']").className = "default"
        for (let i = 0; i < cincoMilSeis.length; i++) {
            document.querySelector(`option[value='${cincoMilSeis[i]}']`).className = "red_back"
        }
    }
})