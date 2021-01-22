var cartValue =document.getElementById("cart-value");
var cartButton =document.getElementById("cart");

var book1Add =document.getElementById("book1");
var book2Add =document.getElementById("book1");
var book3Add =document.getElementById("book1");
var book4Add =document.getElementById("book1");
var book5Add =document.getElementById("book1");
var book6Add =document.getElementById("book1");

var game1Add =document.getElementById("game1");
var game2Add =document.getElementById("game2");
var game3Add =document.getElementById("game3");
var game4Add =document.getElementById("game4");

var craft1Add =document.getElementById("craft1");
var craf2tAdd =document.getElementById("craft2");
var cra3ftAdd =document.getElementById("craft3");
var cr4aftAdd =document.getElementById("craft4");

console.log(book1Add)

var book1={
    name:"This was our pact",
    quantity:0,
    dollars: 7,
    cents: 49,
};
var book2={
    name:"The famous five",
    quantity:0,
    dollars: 4,
    cents: 59,
};
var book3={
    name:"Matlida",
    quantity:0,
    dollars: 6,
    cents: 80,
};
var book4={
    name:"Harry Potter",
    quantity:0,
    dollars: 10,
    cents: 00,
};
var book5={
    name:"For Young Readers",
    quantity:0,
    dollars: 7,
    cents: 29,
};
var book6={
    name:"Wimpy Kid - DIY",
    quantity:0,
    dollars: 4,
    cents: 99,
};



var game1={
    name:"Dart Board",
    quantity:0,
    dollars: 17,
    cents: 49,
};
var game2={
    name:"Connect 4",
    quantity:0,
    dollars: 19,
    cents: 99,
};
var game3={
    name:"Jenga",
    quantity:0,
    dollars: 20,
    cents: 99,
};
var game4={
    name:"Monopoly",
    quantity:0,
    dollars: 19,
    cents: 49,
};



var craft1={
    name:"Bookmarks",
    quantity:0,
    dollars: 12,
    cents: 49,
};
var craft2={
    name:"Birthday card",
    quantity:0,
    dollars: 19,
    cents: 99,
};
var craft3={
    name:"Stuffed toys",
    quantity:0,
    dollars: 15,
    cents: 99,
};
var craft4={
    name:"Dream catcher drawing",
    quantity:0,
    dollars: 18,
    cents: 49,
};


function updateCart(){
    cart=book1.quantity+
         book2.quantity+
         book3.quantity+
         book4.quantity+
         book5.quantity+
         book6.quantity+
         game1.quantity+       
         game2.quantity+
         game3.quantity+
         game4.quantity+
         craft1.quantity+
         craft2.quantity+
         craft3.quantity+
         craft4.quantity;
         cartValue.innerHTML=cart;
}


book1Add.onclick = (e) => {
    book1.quantity++;
    updateCart()
}
book2Add.onclick = (e) => {
    book2.quantity++;
    updateCart()
}
book3Add.onclick = (e) => {
    book3.quantity++;
    updateCart()
}
book4Add.onclick = (e) => {
    book4.quantity++;
    updateCart()
}
book5Add.onclick = (e) => {
    book5.quantity++;
    updateCart()
}
book6Add.onclick = (e) => {
    book6.quantity++;
    updateCart()
}


game1Add.onclick = (e) => {
    game1.quantity++;
    updateCart()
}
game2Add.onclick = (e) => {
    game2.quantity++;
    updateCart()
}
game3Add.onclick = (e) => {
    game3.quantity++;
    updateCart()
}
game4Add.onclick = (e) => {
    game4.quantity++;
    updateCart()
}


craft1Add.onclick = (e) => {
    craft1.quantity++;
    updateCart()
}
craft2Add.onclick = (e) => {
    craft2.quantity++;
    updateCart()
}
craft3Add.onclick = (e) => {
    craft3.quantity++;
    updateCart()
}
craft4Add.onclick = (e) => {
    craft4.quantity++;
    updateCart()
}


function updatePrice() {
    var book1CostInCents =
      book1.quantity*book1.dollars*100+book1.quantity*book1.cents;
    var book2CostInCents =
      book2.quantity*book2.dollars*100+book2.quantity*book2.cents;
    var book3CostInCents =
      book3.quantity*book3.dollars*100+book3.quantity*book3.cents;
    var book4CostInCents =
      book4.quantity*book4.dollars*100+book4.quantity*book4.cents;
    var book5CostInCents =
      book5.quantity*book5.dollars*100+book5.quantity*book5.cents;
    var book6CostInCents =
      book6.quantity*book6.dollars*100+book6.quantity*book6c.cents;
}





cartButton.onclick = () => {
    updatePrice();

}
var finalDollers = 0;
var finalCents = 0;
​
function updatePrice() {
 let totalPriceInCents = 0;
​
 for(index = 0; index < items.length; index++) {
   totalPriceInCents = totalPriceInCents +
    items[index].quantity* (items[index].dollars*100 + items[index].cents)
 }
     finalDollers = Math.floor(totalPriceInCents / 100);
     finalCents = totalPriceInCents % 100;
}
​
var whatsappLink = "https://api.whatsapp.com/send?phone=9603527405&text=Order%20details";
​
function updatewhatsappLink () {
 for (let index = 0; index < items.length; index++) {
   if(items[index].quantity != 0) {
     whatsappLink+="%0A" + items[index].name+"%20" + items[index].quantity;
 } 
}
whatsappLink += 
"%0A"+"Total%20Price:%20$"+finalDollers+"%20"+ finalCents+"c"
}
​
cartButton.onclick = () => {
updatePrice();
 updatewhatsappLink();
 window.open(whatsappLink, "_blank");
