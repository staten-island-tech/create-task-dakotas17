import { clothes } from './clothes';
import './style.css'
import { DOMSelectors } from './dom'

function add(arr) {
    arr.forEach((bruh) => {
      DOMSelectors.container.insertAdjacentHTML("afterbegin",
      `
      <div class="card">
      <img src="${clothes[].img}" alt="" class="card-img">
      </div>
      `,
      )
    });
  }

  add(clothes);
  console.log(clothes)