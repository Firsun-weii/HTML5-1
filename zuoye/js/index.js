// var ul=document.getElementsByClassName("wei");
// console.log(ul[5]);
// var ul1=document.getElementById("daohang");
// console.log(ul1);

var i=0;
var imgs = document.getElementsByClassName('img');
var dians = document.getElementsByClassName('dian');
var a = document.getElementById('logo');
console.log(a);
console.log(dians[0]);
for(var j=0;j<9;j++)
{
   dians[j].onclick=function(){
         this.children[1].style.background-color=blue;
   }
}

console.log(imgs);
function visit(){
    imgs[i%8].style.display= 'none';
    i++;
    imgs[i%8].style.display='block';
}
setInterval(visit,2000);
var prev=document.getElementById('prev');
var next=document.getElementById('next');
console.log(prev);
prev.onclick= function(){
    imgs[i%8].style.display= 'none';
    i--;
    if(i<0){
    	i=7;
    }
    imgs[i%8].style.display='block';
}
next.onclick=function(){
	visit();
}

