let count = 0;
const contador = document.getElementById('contador');
const incrementoBtn = document.getElementById('Incremento');
const disminuirBtn = document.getElementById('Disminuir');

function actualizarContador() {
  contador.textContent = count;

  if(count >= 10){
    contador.style.color = "green"
  }
  else if (count < 0){
    contador.style.color = "red"
  }

  contador.classList.add('aumento');

  /*setTimeout(() => {
    contador.classList.remove('aumento');
  }, 300);*/
}

incrementoBtn.addEventListener('click', () => {
  count++;
  actualizarContador();
});

disminuirBtn.addEventListener('click', () => {
  count--;
  actualizarContador();
});
