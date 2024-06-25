import { cards } from "./card.js";

function createCard(){

}
const cardContainer = document.querySelector(".container")
for (const card of cards){
    console.log(card);
  const cardTemplate =  `<div class="card">
  <img src="${card.img}"/>
   <h2 class="title">${card.title}</h2>
   <p class="model">${card.model}</p>
   <p class="price">${card.price}</p> <span>UAH</span>
   <button disabled id="js-btn">BUY</button>
  
  </div>`
  cardContainer.insertAdjacentHTML("beforeend", cardTemplate)
  changeDisabledOption(cards.availability)

}

const btns = document.querySelectorAll("#js-btn")


function changeDisabledOption(value){
    for(const btn of btns){
         if(value){
        btn.didabled = true;

    }else{
        btn.disabled = true;
    }
    }
   

}

console.dir(btns);