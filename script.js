// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;

    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // animacion del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    // corazones flotantes
    const letterContainer = document.querySelector('.container-letter');
    for (let i = 0; i < 60; i++) {
      const heartFloat = document.createElement('span');
      heartFloat.textContent = '♥';
      heartFloat.classList.add('heart-float');

      // Posición aleatoria sobre la carta
      heartFloat.style.left = `${Math.random() * 100}%`;
      heartFloat.style.bottom = '0';

      letterContainer.appendChild(heartFloat);

      // Eliminar después de la animación
      setTimeout(() => {
        heartFloat.remove();
      }, 3000);
    }
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // animacion del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});
