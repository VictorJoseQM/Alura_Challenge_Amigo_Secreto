let amigos = [];

function adicionarAmigo() {
  let inputNome = document.getElementById("amigo");
  let nome = inputNome.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    return;
  }

  amigos.push(nome);
  inputNome.value = "";
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome) => {
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
    return;
  }

  let resultado = document.getElementById("resultado");
  resultado.textContent = "Sorteando...";

  setTimeout(() => {
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = `Amigo Secreto: ${sorteado}`;
  }, 2000);
}

function limparLista() {
  amigos = [];
  atualizarLista();
  document.getElementById("resultado").textContent = "";
}
