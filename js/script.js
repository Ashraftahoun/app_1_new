let links= document.querySelector('.links');
let userInfo= document.querySelector('.user-info');
let user= document.querySelector('#user');
let logOut= document.querySelector("#log-out");

if ( localStorage.getItem('username')){
    links.remove();
    userInfo.style.display='flex';
    user.innerHTML=localStorage.getItem('username');
}

logOut.addEventListener('click',function(){
    localStorage.clear();
    setTimeout( ()=> {
        window.location='register.html';
    },2000);
});
 

//define products 
let productDom= document.querySelector('.products');

let products=[
    {   id:1,
        title:'desc: new egption laptop',
        price:'price: 4000 pounds',
        imageUrl:'image/laptop.jpg',
        size: 'size: large'
    },
     {   id:2,
        title:'desc: new egption headphones',
        price:'price: 1000 pounds',
        imageUrl:'image/product_1.jpg',
        size: 'size: small',
    },
    
     {   id:3,
        title:'desc: new egption cloths',
        price:'price: 200 pounds',
        imageUrl:'image/cloths.jpg',
        size: 'size: miduim'
    },
    
     {   id:4,
        title:'desc: new egption food',
        price:'price: 100 pounds',
        imageUrl:'image/food.jpg',
        size: 'size: large'
    },
];

function drawProductUI(){
    let productsUI= products.map( (item) =>{
        return `  <div class="product-item">
              <img src=" ${item.imageUrl}" class="image"alt="">
              <div class="product-item-desc">
                  <h3> ${item.title}</h3>
                  <p> ${item.size}</p>
                  <span>${item.price}</span>
              </div>
              <div class="product-item-action">
                  <button class="add-to-cart" onclick='addTOCard(${item.id})'>add to cart</button>
                  <i class="far fa-heart"></i>
              </div>
          </div>`
    });
    
    productDom.innerHTML= productsUI;
}
drawProductUI()


function addTOCard(id){
   let chooseItem= products.find( (item)=> item.id=== id);
    console.log(chooseItem);
}

function checkedLogedIn(){
    if(localStorage.getItem('username')){
        console.log('add to cart');
    }else{
        window.location='login.html';
    }
}







