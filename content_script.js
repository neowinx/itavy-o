console.log('itavy-o started...');

let tavyshos = document.querySelectorAll('.numeros');
const korekooo = () => tavyshos.forEach(t => t.innerText = '*');
const waaa = () => tavyshos.forEach(t => t.innerText = t.tavyoVal);

tavyshos.forEach(t => { 
  t.tavyoVal = t.innerText; 
  t.addEventListener('mouseover', () => korekooo()); 
  t.addEventListener('mouseout', () => waaa());
});
