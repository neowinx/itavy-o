console.log('itavy-o started...');

let tavyshos = document.querySelectorAll('.numeros');
const korekooo = () => tavyshos.forEach(t => t.innerText = '*');
const waaa = () => tavyshos.forEach(t => t.innerText = t.tavyoVal);
const ooglabugla = () => { 
  let shift = Math.floor(Math.random() * (tavyshos.length - 1));
  tavyshos.forEach((t,i) => { 
    var newindex = i + shift;
    if (newindex > tavyshos.length - 1) {
      newindex = newindex - tavyshos.length; 
    }
    let otherval = tavyshos[newindex].tavyoVal;
    tavyshos[newindex].tavyoVal = t.tavyoVal;
    t.tavyoVal = otherval;
  });
  waaa();
  korekooo();
};

tavyshos.forEach(t => { 
  t.tavyoVal = t.innerText; 
  t.addEventListener('click', ooglabugla);
  t.addEventListener('mouseover', korekooo); 
  t.addEventListener('mouseout', waaa);
});
