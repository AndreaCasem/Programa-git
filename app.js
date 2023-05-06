const container = document.querySelector('.container');
const numero = document.querySelector('span');

let contador = 0;
numero.textContent = contador;

container.addEventListener('click', e => {
  
    if (e.target.classList.contains('btn-aumentar')) {
        contador++;
    } else if (e.target.classList.contains('btn-disminuir')) {
        contador--;
    } else {
        contador = 0;
    }
        
    if (contador < 0) {
        numero.style.color = "#FFB2A6";
    } else if (contador > 0) {
        numero.style.color = "#BAE8E8";
    } else {
        numero.style.color = "#F5EA5A";
    }

    numero.textContent = contador;
    e.stopPropagation();
})
