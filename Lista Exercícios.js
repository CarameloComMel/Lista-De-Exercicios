function verificarParOuImpar() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "Por favor, digite um número inteiro válido.";
        return;
    }

    if (numero % 2 === 0) {
        resultadoDiv.innerHTML = `O número ${numero} é <span style="color: green;">Par</span>.`;
    } else {
        resultadoDiv.innerHTML = `O número ${numero} é <span style="color: blue;">Ímpar</span>.`;
    }
}
//Exercício 2

function mostrarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número inteiro válido.</p>";
        return;
    }

    let tabuada = `<h3>Tabuada do ${numero}</h3>`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }

    resultadoDiv.innerHTML = tabuada;
}

// Exercício 3

let valor = 0;

function atualizarNumero() {
    document.getElementById("numero").innerText = valor;
}

document.getElementById("btnAumentar").addEventListener("click", function() {
    valor++;
    atualizarNumero();
});

document.getElementById("btnDiminuir").addEventListener("click", function() {
    valor--;
    atualizarNumero();
});

// Exercício 4

let numeroSorteado = Math.floor(Math.random() * 10) + 1;

document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("btnVerificar");

    botao.addEventListener("click", function() {
        const palpite = parseInt(document.getElementById("palpite").value);
        const resultadoDiv = document.getElementById("resultado");

        if (isNaN(palpite) || palpite < 1 || palpite > 10) {
            resultadoDiv.innerHTML = "Por favor, digite um número entre 1 e 10.";
            return;
        }

        if (palpite === numeroSorteado) {
            resultadoDiv.innerHTML= `<span style="color: green;">Parabéns! Você acertou! O número era ${numeroSorteado}.</span>`;

            // Sorteia um novo número para a próxima rodada
            numeroSorteado= Math.floor(Math.random() * 10) + 1;
        } else {
            resultadoDiv.innerHTML= `<span style="color: red;">Errou! Tente novamente.</span>`;
        }
    });
});

// Exercício 5

function calcularMedia() {
  const n1 = parseFloat(document.getElementById('nota1').value);
  const n2 = parseFloat(document.getElementById('nota2').value);
  const n3 = parseFloat(document.getElementById('nota3').value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById('resultado').innerText = 'Preencha todas as notas.';
    return;
  }

  const media = (n1 + n2 + n3) / 3;
  let mensagem = `Média: ${media.toFixed(2)} - `;

  mensagem += media >= 6 ? 'Aprovado!' : 'Reprovado!';

  document.getElementById('resultado').innerText = mensagem;
}

// Exercício 7

document.getElementById('contatoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const status = document.getElementById('status');

  if (!nome || !email || !mensagem) {
    status.innerText = 'Por favor, preencha todos os campos.';
    status.style.color = 'red';
    return;
  }

  status.innerText = 'Mensagem enviada com sucesso!';
  status.style.color = 'green';

  this.reset();
});

// Exercício 8
document.getElementById("formContato").addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !assunto || !mensagem) {
        alert("Por favor, preencha todos os campos!");
        event.preventDefault();
    }
});


// Exercício 9

function mudarCor() {
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const cores = ["lightblue", "lightgreen", "lightpink", "yellow", "orange", "lightgray"];
    const indice = Math.floor(Math.random() * cores.length);
    return cores[indice];
}


// Exercício 10

function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoDiv = document.getElementById("resultado");

    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
    } else {
        resultadoDiv.innerHTML = "Por favor, preencha os campos corretamente.";
    }
}


// Exercício 11

function calcular(operacao) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Digite dois números válidos!");
    return;
  }

  switch (operacao) {
    case 'soma':
      resultado = num1 + num2;
      break;
    case 'subtracao':
      resultado = num1 - num2;
      break;
    case 'multiplicacao':
      resultado = num1 * num2;
      break;
    case 'divisao':
      resultado = num1 / num2;
      break;
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}


// Exercício 12

function verificarResposta() {
  let resposta = document.querySelector('input[name="pergunta"]:checked');
  if (resposta) {
    if (resposta.value === "certo") {
      alert("Resposta correta!");
    } else {
      alert("Resposta incorreta!");
    }
  } else {
    alert("Selecione uma opção!");
  }
}

// Exercício 13

function converterParaF() {
  let celsius = parseFloat(document.getElementById("temp").value);
  let fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("resultado").innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}

function converterParaC() {
  let fahrenheit = parseFloat(document.getElementById("temp").value);
  let celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("resultado").innerText = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
}

// Exercício 14

function saudacao() {
  let nome = document.getElementById("nome").value.trim();

  if (nome === "") {
    alert("Por favor, digite seu nome.");
  } else {
    alert("Olá " + nome + ". Seja bem-vindo(a)!");
  }
}

// Exercício 15

let tempo = 0;
let intervalo = null;

function atualizarDisplay() {
  document.getElementById("cronometro").innerText = "Tempo: " + tempo + "s";
}

function iniciar() {
  if (intervalo === null) {
    intervalo = setInterval(() => {
      tempo++;
      atualizarDisplay();
    }, 1000);
  }
}

function pausar() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerar() {
  clearInterval(intervalo);
  intervalo = null;
  tempo = 0;
  atualizarDisplay();
}

// Exercício 16

function mudarCor() {
  let corSelecionada = document.querySelector('input[name="cor"]:checked');
  if (corSelecionada) {
    document.body.style.backgroundColor = corSelecionada.value;
  }
}

// Exercício 17

function verificarRespostas() {
  let acertos = 0;
  let respostas = document.forms["quizForm"];

  if (respostas.q1.value === "certo") acertos++;
  if (respostas.q2.value === "certo") acertos++;

  document.getElementById("resultado").innerText = "Você acertou " + acertos + " de 2 questões.";
}

// Exercício 18

document.getElementById("btnCor").addEventListener("click", function() {
  const cores = ["red", "blue", "green", "yellow", "purple", "orange"];
  let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  this.style.backgroundColor = corAleatoria;
});

// Exercício 19

let cliques = 0;

document.getElementById("btnContador").addEventListener("click", function() {
  cliques++;
  document.getElementById("contador").innerText = cliques;
});

// Exercício 20

let paragrafo = document.getElementById("textoHover");

paragrafo.addEventListener("mouseover", function() {
  paragrafo.innerText = "Você passou o mouse!";
});

paragrafo.addEventListener("mouseout", function() {
  paragrafo.innerText = "Passe o mouse aqui!";
});

// Exercício 21

document.getElementById("inputTecla").addEventListener("keydown", function(e) {
  document.getElementById("teclaPressionada").innerText = e.key;
});

// Exercício 22

document.addEventListener("DOMContentLoaded", function() {
  let paragrafo = document.getElementById("paragrafo");

  paragrafo.addEventListener("dblclick", function() {
    paragrafo.style.display = "none";
  });
});

// Exercício 23

document.getElementById("checkPermissao").addEventListener("change", function() {
  let botao = document.getElementById("btnEnviar");
  botao.disabled = !this.checked;
});
