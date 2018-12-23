window.onload=function()
{
    var img = document.getElementById("img");
    var a =document.getElementById("a");
    var b =document.getElementById("b");
    a.onclick=function(){
        img.style.display="block";
    }
    b.onclick=function(){
        img.style.display="none";
    }
}