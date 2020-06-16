console.log(123)

const leftProd = document.getElementById('left_slider')


let leftSlideHTML = '';
function leftSlider() {
  prodLeft.forEach(function({id, url, name, alt}) {
    console.log(id)
    
    leftSlideHTML += `<div class="products__group">
            <div class="products__img">
              <img class="products__discripts-img" src="${url}" alt="${alt}">
            </div>
            <div class="products__text text__white" id="${id}">${name}</div>
          </div>`
    
  })
}
leftSlider()
leftProd.innerHTML = leftSlideHTML;
console.log(leftSlideHTML)
