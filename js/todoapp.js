var icons_dell=document.getElementsByClassName("fa-trash-alt")
for(var i=0;i<icons_dell.length;i++){
    icons_dell[i].addEventListener("click",supprimer);
}
function supprimer(){
    var c=confirm("are u sur ?")
    if(c){ this.parentElement.parentElement.remove()}
  
}