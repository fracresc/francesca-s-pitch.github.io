document.addEventListener("DOMContentLoaded", function () {
    var myMenu = document.getElementById("myMenu");
    var myNav = document.getElementById("myNav");

    var widthMatch = window.matchMedia("(min-width: 801px)").matches;
    console.log(widthMatch);

    function openNav() {
        //version desktop
        if(widthMatch){
            myNav.style.width = "50%";
        }else {
            //version mobile  
            myNav.style.width = "100%";
        }
    }

    function closeNav() {
        myNav.style.width = "0%";
    }

    myMenu.addEventListener('click', openNav);
    myNav.addEventListener('click', closeNav);



});