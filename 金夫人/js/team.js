for(var lis=document.getElementsByClassName("sheyinshi")[0].children,alast=document.getElementsByClassName("alast")[0],divs=document.getElementsByClassName("baseright")[0].children,i=0;i<lis.length;i++)lis[i].onclick=function(){for(var i=0;i<lis.length;i++)lis[i].children[0].innerHTML="+";this.children[0].innerHTML="-",alast.innerHTML="> "+this.innerText.split("-")[0];for(var e=this.getAttribute("dy"),n=0;n<divs.length;n++)divs[n].style.display="none";divs[e].style.display="block"};var dianji1=document.getElementById("dianji1");dianji1.click();