let counter = 0;
setInterval(() => {
  const anm = document.querySelector(".number");
  const anmValue = Number(anm.getAttribute("data-value"));
  if (counter !== anmValue) {
    counter++;
    anm.innerHTML = `${counter}%`;
  }
}, 70);
