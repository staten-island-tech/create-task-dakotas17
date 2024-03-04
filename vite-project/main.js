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


/* let btn = document.getElementById("hatr")
btn.addEventListener("click", help)

function help(){
  if (hats.img = "https://www.vintageyearstore.com/cdn/shop/files/163-1183-003-all_003_frontview_large_1.jpg?v=1703240929") {
    hats.img = "https://m.media-amazon.com/images/I/71GRrhLfSgL._AC_UF1000,1000_QL80_.jpg"
  } else {hats.img = "https://target.scene7.com/is/image/Target/GUEST_a4f86617-9f53-4552-ba0b-825e64221fb0?wid=488&hei=488&fmt=pjpeg"
    
  }
}
console.log(hats[1].img) */

//const hatImage = document.getElementById('hat1');
/* const nextHatButton = document.getElementById('hatr');


let currentHatIndex = 0;


function updateHatImage() {
    hats.src = hats[0].img;
}


nextHatButton.addEventListener('click', function() {
    
    currentHatIndex = (currentHatIndex + 1) % hats.length;
   
    updateHatImage();
});


updateHatImage();
console.log(updateHatImage) */


const hatValues = [
  {  value: "0", img: "https://www.vintageyearstore.com/cdn/shop/files/163-1183-003-all_003_frontview_large_1.jpg?v=1703240929" },
  { value: "1", img: "https://m.media-amazon.com/images/I/71GRrhLfSgL._AC_UF1000,1000_QL80_.jpg" },
  { value: "2", img: "https://target.scene7.com/is/image/Target/GUEST_a4f86617-9f53-4552-ba0b-825e64221fb0?wid=488&hei=488&fmt=pjpeg" }
];


let currentHatIndex = 0;

function updateHatDisplay() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <img src="${hatValues[currentHatIndex].img}" alt="Hat Image">
    <p>${hatValues[currentHatIndex].value}</p>
  `;

}

document.getElementById('hatr').addEventListener('click', function() {
 
  currentHatIndex++;

  if (currentHatIndex >= hatValues.length) {
    currentHatIndex = 0;
  }
 
  updateHatDisplay();
});





const topValues = [
  {  value: "0", img: "https://images.squarespace-cdn.com/content/v1/6212f172abb4ff0f9c29be5e/1654796730789-RUQW4OV6MO6OJO3IEVL9/unisex-staple-t-shirt-navy-front-62a22f8dd1355.png?format=1000w" },
  { value: "1", img: "https://ih1.redbubble.net/image.4786684630.5655/pp,504x498-pad,600x600,f8f8f8.u5.jpg" },
  { value: "2", img: "https://i.pinimg.com/originals/e6/ed/aa/e6edaaa7a95ab1e46d2346cc685ad866.png" }
];


let currentTopIndex = 0;


function updateTopDisplay() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <img src="${topValues[currentTopIndex].img}" alt="Top Image">
    <p>${topValues[currentTopIndex].value}</p>
  `;

}


document.getElementById('topr').addEventListener('click', function() {
  currentTopIndex++;
  if (currentTopIndex >= topValues.length) {
    currentTopIndex = 0;
  }
  updateTopDisplay();
});





const bottomValues = [
  {  value: "0", img: "https://www.lochcarron.co.uk/media/catalog/product/cache/3c36a3980388d2eb9643903829ced6cc/y/s/yskr-str-m-stewart-royal-modern-classic-kilted-skirt-front-resized-2022-72dpi-rgb.jpg" },
  { value: "1", img: "https://surplusworldonline.com/wp-content/uploads/product-apparel-pants-fatigue-500x500.png" },
  { value: "2", img: "https://images.squarespace-cdn.com/content/v1/6136ee30d6ef722b639dbca2/1639554083351-MNBFIHTY787WLH0NHOTO/Template+41_ccexpress.png?format=1500w" }
];


let currentBottomIndex = 0;


function updateBottomDisplay() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <img src="${bottomValues[currentBottomIndex].img}" alt="Bottom Image">
    <p>${bottomValues[currentBottomIndex].value}</p>
  `;

}


document.getElementById('botr').addEventListener('click', function() {
  currentBottomIndex++;
  if (currentBottomIndex >= bottomValues.length) {
    currentBottomIndex = 0;
  }
  updateBottomDisplay();
});




const feetValues = [
  {  value: "0", img: "https://www.hotsox.com/cdn/shop/files/HSW10271_PINK_FLAT_850x.png?v=1698699107" },
  { value: "1", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Image_of_a_pair_of_Tmerberland_boots.png/800px-Image_of_a_pair_of_Tmerberland_boots.png" },
  { value: "2", img: "https://ekicks.eu/cdn/shop/files/UGGtazzslippersmustard2_2048x2048.png?v=1697289467" }
];


let currentFeetIndex = 0;


function updateFeetDisplay() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <img src="${feetValues[currentFeetIndex].img}" alt="Feet Image">
    <p>${feetValues[currentFeetIndex].value}</p>
  `;

}


document.getElementById('feetr').addEventListener('click', function() {
  currentFeetIndex++;
  if (currentFeetIndex >= feetValues.length) {
    currentFeetIndex = 0;
  }
  updateFeetDisplay();
});



