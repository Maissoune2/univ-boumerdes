

var indexValue = 1;
showImg(indexValue);
function Btm_slider(e){showImg(indexValue = e);}
function Side_slide(e){showImg(indexValue += e);}

function showImg(e){
    var i;
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('.Btm_sliders span');
    if (e > img.length) {indexValue = 1;}
    if (e < 1) {indexValue = img.length;}

    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue-1].style.display = "block";
}