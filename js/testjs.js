/*var x1=true;
var x2=false;
alert(typeof(x1))
alert(typeof(x2))
var x3='salut';
var w=prompt('demander valeur')
var select = document.getElementById('color');
var value = select.options[select.selectedIndex].value;
console.log(value);*/
//document.getElementById("div").style.background="red";
/*function color(){
   var couleur= document.getElementById("color").value;
   document.getElementById("div").style.backgroundColor=couleur;
}*/
function change(){
    var title= document.getElementById("title").value;
    var color= document.getElementById("color").value;
    var titles=document.getElementsByTagName(title);
 
    for(var i=0;i<titles.length;i++){
        titles[i].style.color=color;
        titles[i].nextElementSibling.style.color=color;

    }
 }

