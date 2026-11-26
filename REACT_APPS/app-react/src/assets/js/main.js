const hidden_items = document.querySelectorAll('.single-card__sidebar-item');
const show_btn = document.querySelectorAll('.js-show-items-btn')[0];
const status = ['Показать еще','Свернуть'];
show_btn.addEventListener('click',()=>{
    hidden_items.forEach((item,index)=>{
        if(item.classList.contains('hidden')){
            item.classList.add("show");
            item.classList.remove("hidden");
            show_btn.textContent = status[1];
        }else if(item.classList.contains('show')){
            item.classList.remove("show");
            item.classList.add("hidden");
            show_btn.textContent = status[0];
        }
        
    });
});

const price_new = document.querySelectorAll('.js-new-field')[0];
const price_old = document.querySelectorAll('.js-old-field')[0];
const art  = document.querySelectorAll('.js-art-field')[0];
const weight  = document.querySelectorAll('.js-weight-field')[0];

const data_price = document.querySelectorAll(".js-data-price");

data_price.forEach((item,index)=>{
    item.addEventListener('click',()=>{
          data_price.forEach((item,index)=>{
              item.classList.remove("active");
          });
          item.classList.add("active");
          price_new.textContent = item.getAttribute("data-price-new");
          price_old.textContent = item.getAttribute("data-price-old");
          art.textContent = `арт: ${item.getAttribute("data-art")}`;
          weight.textContent = `${item.getAttribute("data-weight")} г.`;
          
    });
});



const btn_cat_win = document.querySelectorAll('.js-btn-cat-win')[0];
const cat_win = document.querySelectorAll('.js-cat-win')[0];
const close_win  = document.querySelectorAll('.js-close-win')[0];

btn_cat_win.addEventListener("click",()=>{
    cat_win.classList.add('show')
});
close_win.addEventListener("click",()=>{
    cat_win.classList.remove('show')
});



