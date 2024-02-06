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
    <img src="${hats[0].img}" alt="" class="card-img hats">
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


var i=0;
var names = ['hatr', 'topr', 'botr', 'feetr'];

function my() {
  console.log(names[i++]);

if (i === names.length) {
i=0;
}
}