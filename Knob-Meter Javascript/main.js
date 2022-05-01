var silder = document.getElementById("alturaMedidor");
var output = document.getElementById("value");
output.innerHTML=slider.value;
slider.oninput=function(){
    output.innerHTML=this.value;
}