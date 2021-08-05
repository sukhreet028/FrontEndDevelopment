var slider=document.querySelector('.image-slider');
var images=['img1.jpg', 'img2.jpg','img3.jpg'];
var i=0;

function prev(){
if(i<=0) i=images.length; i--;
return loadImg();
}

function next(){
    if(i >=images.length-1) i=-1;
    i++;
return loadImg();
}

function loadImg(){
    return slider.setAttribute('src','img/' +images[i]);
}