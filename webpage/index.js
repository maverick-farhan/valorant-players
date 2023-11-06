const cardWrapper = document.getElementById('card-wrapper');
const input = document.getElementById('search');

const info = async ()=>{
  let data = await fetch(`http://localhost:4000/players`);
  return await data.json();
}
const array = info();

array.then((data)=>{

for(let i = 0;i<data.length;i++){
const cards = document.createElement('div');
cards.classList = 'cards'
const content = `
    <img src=${data[i].img}>
    <div class="info">
      <h3><span class="name">${data[i].name}<span></h3>
      <h4 class="team">Team<span>${data[i].team}<span></h4>
      <h4 class="country">Country<span>${data[i].country}<span></h4>
      <h4 class="role">Role<span>${data[i].role}<span></h4>
      <h4 class="crosshair">Crosshair Code: <pre class="code">${data[i].code}</pre></h4>
    </div>
`
cards.innerHTML+=content;
cardWrapper.appendChild(cards);
}
})
