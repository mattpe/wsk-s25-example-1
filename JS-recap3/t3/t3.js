const target = document.querySelector('#target ul');

const renderInfo = () => {
  target.innerHTML = '';

  const li = document.createElement('li');
  li.innerHTML = `Browser version: ${navigator.userAgent}`;
  target.appendChild(li);

  const li2 = document.createElement('li');
  li2.innerHTML = `Screen width / height ${screen.width} / ${screen.height}`;
  target.appendChild(li2);

  const li3 = document.createElement('li');
  li3.innerHTML = `Available browser screen width ${screen.availWidth} /  ${screen.availHeight}`;
  target.appendChild(li3);

  const li4 = document.createElement('li');
  li4.innerHTML = `Current browser screen width ${window.innerWidth} /  ${window.innerHeight}`;
  target.appendChild(li4);

  const now = new Date();
  console.log(now);
  const date = now.toLocaleDateString('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Helsinki',
  });
  console.log(date);

  const hours = now.toLocaleTimeString('fi-FI', {
    hour: '2-digit',
    hour12: false,
    timeZone: 'Europe/Helsinki',
  });

  const minutes = now.toLocaleTimeString('fi-FI', {
    minute: '2-digit',
    hour12: false,
    timeZone: 'Europe/Helsinki',
  });

  const li5 = document.createElement('li');
  li5.innerHTML = `Päivämäärä: ${date} ja tunnit ${hours} ja minuutit: ${minutes}`;
  target.appendChild(li5);
};

renderInfo();

// bomilla on myös eventit, eli selaimen muutokset
window.addEventListener('resize', renderInfo);
