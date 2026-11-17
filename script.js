if (localStorage.getItem("tema") == "claro") {
    document.body.classList.add("claro");
}

function trocarTema() {
    document.body.classList.toggle("claro");
    let claro = document.body.classList.contains("claro");
    localStorage.setItem("tema", claro ? "claro" : "escuro");
}

let texto = "desenvolvedor de IA";
let i = 0;

function digitar() {
    if (i < texto.length) {
        document.getElementById("digitando").textContent += texto[i];
        i++;
        setTimeout(digitar, 120);
    }
}
digitar();

function mostrar() {
    let secoes = document.querySelectorAll(".aparecer");
    for (let s of secoes) {
        if (s.getBoundingClientRect().top < window.innerHeight - 100) {
            s.classList.add("visivel");
        }
    }
}
window.addEventListener("scroll", mostrar);
mostrar();

function mascaraNome() {
    let campo = document.getElementById("nome");
    campo.value = campo.value.replace(/[0-9]/g, "");
}

function mascaraTelefone() {
    let campo = document.getElementById("telefone");
    let n = campo.value.replace(/\D/g, "");

    if (n.length > 7) {
        campo.value = "(" + n.slice(0, 2) + ") " + n.slice(2, 7) + "-" + n.slice(7, 11);
    } else if (n.length > 2) {
        campo.value = "(" + n.slice(0, 2) + ") " + n.slice(2);
    } else {
        campo.value = n;
    }
}

function enviar(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    document.getElementById("modalTexto").textContent = "Valeu, " + nome + "! Respondo em breve.";
    document.getElementById("modal").style.display = "flex";
    event.target.reset();
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}
