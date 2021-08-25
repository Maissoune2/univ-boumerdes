//show/hide nav bar

let open =document.getElementById("open");


let nav = document.getElementById("displayNav");
open.onclick = () =>{
    if (nav.style.display = "none") {
        nav.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";
    }
}

let close = document.getElementById("close");
close.onclick = () => {
    if (nav.style.display = "block") {
        nav.style.display = "none";
        close.style.display = "none";
        open.style.display = "block";
    }
}


//show hide second nav bar

let closeMynav = document.getElementById("closeMenuNav");
let openMynav =document.getElementById("openMenuNav");
let myNav = document.getElementById("NavBar");

openMynav.onclick = () => {
    myNav.style.display = "block";
    closeMynav.style.display = "block";
    //openMynav.style.display = "none";
}
closeMynav.onclick = () => {
    myNav.style.display = "none";
    closeMynav.style.display = "none";
    openMynav.style.display = "block";
}






//slider js code 
var indexValue = 1 ;
showImg(indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}

function showImg(e){
    var i;
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('.btm_sliders span');

    if (e > img.length) {indexValue = 1;}

    if (e < 1) {indexValue = img.length;}


    for(i = 0; i < img.length; ++i){

        img[i].style.display = "none";

    }

    for(i = 0; i < sliders.length; ++i){

        sliders[i].style.background = "rgba(255,255,255,0.1)";

    }

    img[indexValue-1].style.display = "block";
    sliders[indexValue-1].style.background = "#000";
}


        //close alert

        let closeAlert = document.getElementById("closeAlert");
        let Alert = document.getElementById("alert");
        closeAlert.onclick = () => {
            Alert.style.display = "none";
        }