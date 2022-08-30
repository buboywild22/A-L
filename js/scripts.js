var cartArray = [];
var totalQuantity = 0;
var totalCartItems = 0;
var subtotal = 0;

function item1(){
    var img = "/img/1 Pork Belly 1kg.png";
    var itemquantity = parseInt(document.getElementById("item1value").value);
    var price = 453;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:01,name:"Pork Belly 1kg",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
    
}
function item2(){
    var img = "/img/2 Samgyeopsal Belly.png";
    var itemquantity = parseInt(document.getElementById("item2value").value);
    var price = 450;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:02,name:"Samgyeopsal Belly 1kg",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item3(){
    var img = "/img/3 Pork Maskara 1kg.png";
    var itemquantity = parseInt(document.getElementById("item3value").value);
    var price = 215;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:03,name:"Pork Maskara 1kg",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item4(){
    var img = "/img/4 Pork Ear.jpg";
    var itemquantity = parseInt(document.getElementById("item4value").value);
    var price = 160;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:04,name:"Pork Ear 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item5(){
    var img = "/img/5 country style.png";
    var itemquantity = parseInt(document.getElementById("item5value").value);
    var price = 214;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:05,name:"Country Style 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item6(){
    var img = "/img/6 ground lean.png";
    var itemquantity = parseInt(document.getElementById("item6value").value);
    var price = 204;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:06,name:"Ground (Lean) 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item7(){
    var img = "/img/7 Snigang Cut 500g.png";
    var itemquantity = parseInt(document.getElementById("item7value").value);
    var price = 144;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:07,name:"Sinigang Cut 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item8(){
    var img = "/img/8 Spare Ribs 500g.png";
    var itemquantity = parseInt(document.getElementById("item8value").value);
    var price = 214;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:08,name:"Spare Ribs 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item9(){
    var img = "/img/9 Adobo Cut 500g.png";
    var itemquantity = parseInt(document.getElementById("item9value").value);
    var price = 199;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:09,name:"Adobo Cut 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item10(){
    var img = "/img/10 Pork Steak 500g.png";
    var itemquantity = parseInt(document.getElementById("item10value").value);
    var price = 189;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:10,name:"Pork Steak 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item11(){
    var img = "/img/11 Menudo Cut 500g.png";
    var itemquantity = parseInt(document.getElementById("item11value").value);
    var price = 199;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:11,name:"Pork Menudo Cut 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item12(){
    var img = "/img/12 Pork Kasim (Skin On) 500g.png";
    var itemquantity = parseInt(document.getElementById("item12value").value);
    var price = 194;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:12,name:"Pork Kasim (Skin On) 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item13(){
    var img = "/img/13 Pork Kasim (Skinless) 500g.png";
    var itemquantity = parseInt(document.getElementById("item13value").value);
    var price = 227;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:13,name:"Pork Kasim (Skinless) 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item14(){
    var img = "/img/14 Pork BBQ Slice 500g.png";
    var itemquantity = parseInt(document.getElementById("item14value").value);
    var price = 209;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:14,name:"Pork BBQ Slice 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item15(){
    var img = "/img/15 Pork Loin 500g.png";
    var itemquantity = parseInt(document.getElementById("item15value").value);
    var price = 244;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:15,name:"Pork Loin 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item16(){
    var img = "/img/16 Pork Kaldereta Cut 500g.png";
    var itemquantity = parseInt(document.getElementById("item16value").value);
    var price = 149;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:16,name:"Pork Kaldereta Cut 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item17(){
    var img = "/img/17 Pork Liver 500g.png";
    var itemquantity = parseInt(document.getElementById("item17value").value);
    var price = 147;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:17,name:"Pork Liver 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item18(){
    var img = "/img/18 Pork Pata Front 1kg.png";
    var itemquantity = parseInt(document.getElementById("item18value").value);
    var price = 304;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:18,name:"Pork Pata Front 1kg",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item19(){
    var img = "/img/19 Pork Pigue (Skin On) 500g.png";
    var itemquantity = parseInt(document.getElementById("item19value").value);
    var price = 192;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:19,name:"Pork Pigue (Skin On) 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item20(){
    var img = "/img/20 Pork Pigue (Skinless) 500g.png";
    var itemquantity = parseInt(document.getElementById("item20value").value);
    var price = 224;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:20,name:"Pork Pigue (Skinless) 500g",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item21(){
    var img = "/img/21 pork-blood.webp";
    var itemquantity = parseInt(document.getElementById("item21value").value);
    var price = 30;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:21,name:"Pork Blood (Clean and Fresh)",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item22(){
    var img = "/img/22 Pork Chop without bones.jpg";
    var itemquantity = parseInt(document.getElementById("item22value").value);
    var price = 305;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:22,name:"Pork Chop Without Bones",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item23(){
    var img = "/img/23 Pork Chop With Bones.png";
    var itemquantity = parseInt(document.getElementById("item23value").value);
    var price = 295;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:23,name:"Pork Chop With Bones 1kg",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item24(){
    var img = "/img/24 Pork Lomo.png";
    var itemquantity = parseInt(document.getElementById("item24value").value);
    var price = 400;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:24,name:"Pork Lomo 1kg",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}
function item25(){
    var img = "/img/whole.png";
    var itemquantity = parseInt(document.getElementById("item25value").value);
    var price = 200;
    totalQuantity=+itemquantity;
    var totalPrice = itemquantity * price;
    cartArray.push({id:25,name:"whole carcass / per kilo",imgpath:img,quantity:totalQuantity,currentitemprice:price,overallitemprice:totalPrice});
    document.getElementById("counterId").innerHTML = cartArray.length;
}

function displayItems(){
    document.getElementById("checkOutTable").innerHTML = "";

    for(var i=0;i<cartArray.length;i++){
        subtotal += cartArray[i].overallitemprice;
    }
    if(cartArray.length==0){
        document.getElementById("checkOutTable").innerHTML = ""
    }
    for(var i=0;i<cartArray.length;i++){
        document.getElementById("checkOutTable").innerHTML += `
        <tr>
            <th scope="row">`+cartArray[i].id+`</th>
            <td>`+cartArray[i].name+`</td>
            <td><img src="`+cartArray[i].imgpath+`" class="tableImg"/></td>
            <td><input type="number" class="form-control" id="item" value="`+cartArray[i].quantity+`"></td>
            <td>`+cartArray[i].currentitemprice+`</td>
            <td>`+cartArray[i].overallitemprice+`</td>
        </tr>
        `
    }
    console.log(subtotal);
    document.getElementById("subTotal").innerHTML = `
    <p><strong>Subtotal:  `+subtotal+`</strong>
    `;
}






function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


