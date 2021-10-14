menu_list_array = ["Veg Margherita Pizza","Cheese Pizza","Cheese Paneer Pizza","Sausage Pizza","Total Non-Veg Burst Pizza","Veggie Burst Pizza","Supreme Pizza(all toppings)"
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for (var i=0; i<menu_list_array.length;i++) { htmldata=htmldata+'<li>' +menu_list_array[i] + '<li>'
}
htmldata=htmldata+'</ol>'
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
htmldata ="<section class='cards'>"
for(var i=0; i<menu_list_array.length;i++){

    htmldata=htmldata ="<section class='cards'>" + '<img src="pizza.png">'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
document.getElementById("add_item").value = "";
}
