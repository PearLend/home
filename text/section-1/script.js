const section1 = document.querySelector('.home-main-section-1');
const section1P1 = document.createElement('p');
const section1A1 = document.createElement('a');
const section1P2 = document.createElement('p');

section1P1.textContent = txt1;
section1A1.textContent = txt2;
section1P2.textContent = txt3;

section1A1.setAttribute("href", "#")

section1.appendChild(section1P1)
section1.appendChild(section1A1)
section1.appendChild(section1P2)