var images = ["HollowKnight1.jfif","HollowKnight2.jfif","HollowKnight3.jfif","HollowKnight4.jfif"];

var i = 0;
function carousel(){
    document.getElementById("mySlider").src = images[i];
    if(i == 3){
        i = -1;
    }
    i++;
    setTimeout(carousel, 1000)
}


//carousel()