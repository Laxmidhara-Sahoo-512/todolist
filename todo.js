function Add(){
    let a=document.getElementById("take").value;
    if(a==""){
     alert("enter a valid list");
    }
    else{
       let c=document.createElement("span");c.innerHTML=a;
       let b=document.createElement("div");b.append(c);let d=document.createElement("i");d.setAttribute("class","fa-solid fa-trash");
        b.append(d);
       let parent=document.getElementById("parent");parent.append(b);
       b.setAttribute("class","design")
       document.getElementById("take").value="";
       let f=document.getElementsByTagName("i");
 for(let m=0;m<f.length;m++){
    f[m].onclick=function (){
      let k=f[m].parentElement;let write=k.firstElementChild;write.innerHTML="<s>"+write.innerHTML+"</s>"
   //   this.parentNode.remove();
    }
 
 }
 
    }
 
 }
 