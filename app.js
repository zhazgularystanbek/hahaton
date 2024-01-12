// ! admin
let admin_bloc = document.querySelector(".admin-bloc");
let a3 = document.querySelector(".a3");
let img = document.querySelector(".img");
let name = document.querySelector(".name");
let price = document.querySelector(".price");
let create = document.querySelector(".create");

a3.addEventListener("click", () => {
  admin_bloc.style.display = "block";
  a3.style.color = "#BD1D1D";
  a1.style.color = "";
  a2.style.color = "";
  menu_bloc.style.display = "none";
  order_bloc.style.display = "none";
});

create.addEventListener("click", () => {
  let adminObj = {
    img: img.value,
    name: name.value,
    price: price.value,
  };

  if (img.value === "" || name.value === "" || price.value === "") {
    alert("Заполните поле все");
    img.style.border = "3px solid red";
    name.style.border = "3px solid red";
    price.style.border = "3px solid red";
    return;
  }
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push(adminObj);
  localStorage.setItem("data", JSON.stringify(data));
});

// ! Menu
let a1 = document.querySelector(".a1");
a1.addEventListener("click", () => {
  a1.style.color = "#BD1D1D";
  menu_bloc.style.display = "block";
  a3.style.color = "";
  a2.style.color = "";
  admin_bloc.style.display = "none";
  order_bloc.style.display = "none";
  menuProduct();
});
let menu_bloc = document.querySelector(".menu-bloc");
let menu = document.querySelector(".menu");
menuProduct();
function menuProduct() {
  menu.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.forEach((el, index) => {
    // !
    let menu_div = document.createElement("div");
    menu_div.classList.add("menu_div");
    let menu_img = document.createElement("img");
    menu_img.classList.add("menu_img");
    // !
    let menu_div_info = document.createElement("div");
    menu_div_info.classList.add("menu_div_info");
    let menu_name = document.createElement("h3");
    menu_name.classList.add("menu_name");
    let menu_price = document.createElement("h4");
    menu_price.classList.add("menu_price");
    // !
    let menu_btn = document.createElement("div");
    menu_btn.classList.add("menu_btn");
    let menu_save = document.createElement("button");
    menu_save.classList.add("menu_save");

    let menu_delate = document.createElement("button");
    menu_delate.classList.add("menu_delate");
    //  !
    menu_img.src = el.img;
    menu_name.innerHTML = el.name;
    menu_price.innerHTML = `${el.price}$`;
    //  !
    menu_save.innerHTML = "save";
    menu_delate.innerHTML = "delete";

    menu_div.append(menu_img);
    menu_div.append(menu_div_info);
    menu_div_info.append(menu_name);
    menu_div_info.append(menu_price);
    menu_div.append(menu_btn);
    menu_btn.append(menu_save);
    menu_btn.append(menu_delate);
    menu.append(menu_div);

    menu_delate.addEventListener("click", () => {
      menuProduct();
      delateProduct(index);
    });

    menu_save.addEventListener("click", () => {
      let order = data.find((el, idx) => index === idx);
      let orders = JSON.parse(localStorage.getItem("orders")) || [];
      orders.push(order);
      localStorage.setItem("orders", JSON.stringify(orders));
      orderProduct();
    });
  });
}

function delateProduct(index) {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  menuProduct();
}

let a2 = document.querySelector(".a2");

a2.addEventListener("click", () => {
  a1.style.color = "";
  a2.style.color = "";
  order_bloc.style.display = "block";
  menu_bloc.style.display = "none";
  a3.style.color = "";
  a2.style.color = "#BD1D1D";
  admin_bloc.style.display = "none";
  menuProduct();
});

let order_bloc = document.querySelector(".order-bloc");
let order = document.querySelector(".order");
orderProduct();
function orderProduct() {
  order.innerHTML = "";
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.forEach((el, index) => {
    // !
    let orders_div = document.createElement("div");
    orders_div.classList.add("orders_div");
    let orders_img = document.createElement("img");
    orders_img.classList.add("orders_img");
    // !
    let orders_div_info = document.createElement("div");
    orders_div_info.classList.add("orders_div_info");
    let orders_name = document.createElement("h3");
    orders_name.classList.add("orders_name");
    let orders_price = document.createElement("h4");
    orders_price.classList.add("orders_price");
    // !
    let orders_btn = document.createElement("div");
    let orders_btn1 = document.createElement("div");
    orders_btn.classList.add("orders_btn");
    orders_btn1.classList.add("orders_btn1");
    let plus = document.createElement("button");
    plus.classList.add("plus");
    let count = document.createElement("h3");
    count.classList.add("count");
    let minus = document.createElement("button");
    minus.classList.add("minus");
    let order_delate = document.createElement("button");
    order_delate.classList.add("order_delate");
    //  !
    orders_img.src = el.img;
    orders_name.innerHTML = el.name;
    orders_price.innerHTML = `${el.price}$`;
    //  !
    let num = 1;
    plus.addEventListener("click", () => {
      num++;
      count.innerHTML = `${num}x`;
    });
    minus.addEventListener("click", () => {
      num--;
      if (num >= 1) {
        count.innerHTML = `${num}x`;
      }
    });
    plus.innerHTML = "+";
    count.innerHTML = `${num}x`;
    minus.innerHTML = "-";
    order_delate.innerHTML = "delete order";
    orders_div.append(orders_img);
    orders_div.append(orders_div_info);
    orders_div_info.append(orders_name);
    orders_div_info.append(orders_price);
    orders_div.append(orders_btn1);
    orders_btn1.append(order_delate);
    orders_btn1.append(orders_btn);
    orders_btn.append(plus);
    orders_btn.append(count);
    orders_btn.append(minus);
    order.append(orders_div);

    order_delate.addEventListener("click", () => {
      orderProduct();
      delateProduct1(index);
    });
  });
}

function delateProduct1(index) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.splice(index, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  orderProduct();
}
