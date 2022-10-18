let clickCount = 0;
const textoSpan = document.getElementById('texto');
const botao = document.getElementById('contadorCliques');
botao.addEventListener('click', () => textoSpan.innerHTML = clickCount += 1);