import { tops } from './clothes';
import { hats } from './clothes';
import { bottoms } from './clothes';
import { feet } from './clothes';
import './style.css'
import { DOMSelectors } from './dom'

 function addf(arr) {
    document.querySelector(".container").insertAdjacentHTML("afterbegin",
      `
      <div class="card">
      <img src="${feet[0].img}" alt="" class="card-img">
      </div>
      `,
      )
    };
  

    //make 0=i and then after button is clicked i+1

  addf(feet);
  console.log(feet)


  function addb(arr) {
    document.querySelector(".container").insertAdjacentHTML("afterbegin",
      `
      <div class="card">
      <img src="${bottoms[0].img}" alt="" class="card-img">
      </div>
      `,
      )
    };
  

  addb(bottoms);
  console.log(bottoms)

  function addt(arr) {
    document.querySelector(".container").insertAdjacentHTML("afterbegin",
      `
      <div class="card">
      <img src="${tops[0].img}" alt="" class="card-img">
      </div>
      `,
      )
    };
  

  addt(tops);
  console.log(tops)
  
function addh(arr) {
  document.querySelector(".container").insertAdjacentHTML("afterbegin",
    `
    <div class="card">
    <img src="${hats[0].img}" alt="" class="card-img-hats">
    </div>
    `,
    )
  };


addh(hats);
console.log(hats)



  
/* function nexth(arr){
  var i;
if (i=0) {
  document.querySelectorAll
} else {
  
} //(i=0; i < arr.length; i++) {}
}
nexth(hats);  */



function shuffle(button){
  i=0;
  for (var i = hats.length + 1; i < 0; i++){
    var j = Math.floor(Math.random() * (i+1));
    var temp = hats[i];
    hats[i] = hats[j];
    hats[j]= temp;
  }
}``
shuffle(hatr)