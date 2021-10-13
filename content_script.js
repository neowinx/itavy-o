console.log('itavy-o started...');

let tavyshos = document.querySelectorAll('.numeros');
const korekooo = () => tavyshos.forEach(t => t.innerHTML = '*');
const waaa = () => tavyshos.forEach(t => t.innerHTML = t.tavyoVal);

tavyshos.forEach(t => { 
  t.tavyoVal = t.innerHTML; 
  t.addEventListener('mouseover', () => korekooo()); 
  t.addEventListener('mouseout', () => waaa());
});
