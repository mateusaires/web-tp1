function expandPhoto() {
    // create overlay and append to page
    var overlay = document.createElement("div");
    overlay.setAttribute("id","overlay");
    overlay.setAttribute("class", "overlay");
    document.body.appendChild(overlay);

    // create image and append to page
    var img = document.createElement("img");
    img.setAttribute("id","overImg");
    img.src = this.getAttribute("src");
    img.setAttribute("class","overlayImg");

    // click to restore page
    overlay.onclick=restore;

    document.body.appendChild(img);
}

function restore() {
    document.body.removeChild(document.getElementById("overImg"));
    document.body.removeChild(document.getElementById("overlay"));
}

window.onload=function() {
    var thumbs = document.getElementsByClassName("thumbnail");
    var img;
    for(var i=0;i<thumbs.length;i++){
        img = thumbs[i].getElementsByTagName("img");
        img[0].onclick=expandPhoto;
        img[0].onkeydown=expandPhoto;
    }
}