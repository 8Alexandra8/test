function photo(){
    let body = document.getElementById("body");
    body.style.overflow = "hidden";
    let div = document.createElement("div");
    div.style.width = window.innerWidth+"px";
    div.style.height = window.innerHeight+"px";
    div.style.top = (self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)) + "px";
    div.classList.add("divfoto");

    let date = new Date(Date.now());
    let p = document.createElement("p");
    p.style.top = 2+(self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop)) + "px";
    p.classList.add("pfoto");
    p.innerHTML = document.getElementById("user").innerHTML + " " + date.getDate() + "/" + (date.getMonth()+ 1);
    
    div.addEventListener("click",function(){
        body.style.overflow = "auto";
        body.removeChild(div);
        body.removeChild(p);
    });
    let img = document.createElement("img");
    img.src = "k.jpg";
    img.classList.add("imgfoto");

    div.appendChild(img);
    body.appendChild(p);
    body.appendChild(div);
}