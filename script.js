if (!localStorage.getItem('cart') || JSON.parse(localStorage.getItem('cart')).length != 0) {
  var cart = [];
} else {
  var cart = localStorage.getItem('cart');
  cart = JSON.parse(cart);
}
function themsp(a,b,c,d){
  var masp =a;
  var tensp =b;
  var giasp=c;
  var image=d;
  var item = [masp,tensp,giasp,image,1];
  var check=0;
  cart.foreach(el =>{
      if(el[0] == masp){
          el[4] = (el[4]+1);
          check = 1;
      }
  });
  if(check == 0){
      cart.push(item);
  }
  localStorage.setItem('cart',JSON.stringify(cart));
  alert("đã thêm vào giỏ hàng");
}