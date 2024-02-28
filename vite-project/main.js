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
    <img src="${hats.img}" alt="" class="card-img hats">
    </div>
    `,
    )
  };
  console.log(addh)


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


let btn = document.getElementById("hatr")
btn.addEventListener("click", help)

function help(){
  if (hats.img = "https://www.vintageyearstore.com/cdn/shop/files/163-1183-003-all_003_frontview_large_1.jpg?v=1703240929") {
    hats.img = "https://m.media-amazon.com/images/I/71GRrhLfSgL._AC_UF1000,1000_QL80_.jpg"
  } else {hats.img = "https://target.scene7.com/is/image/Target/GUEST_a4f86617-9f53-4552-ba0b-825e64221fb0?wid=488&hei=488&fmt=pjpeg"
    
  }
}
console.log(hats[1].img)