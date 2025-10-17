document.addEventListener("DOMContentLoaded", function () {
    var myMenu = document.getElementById("myMenu");
    var myNav = document.getElementById("myNav");

    var widthMatch = window.matchMedia("(min-width: 801px)").matches;
    console.log(widthMatch);
    function openNav() {
        if(widthMatch){
            myNav.style.width = "50%";
        }else {
            myNav.style.width = "100%";
        }

    }

    function closeNav() {
        myNav.style.width = "0%";
    }

    myMenu.addEventListener('click', openNav);
    myNav.addEventListener('click', closeNav);

    /************ navbar visible on scroll ***********/
    window.onscroll = function() {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight);
        console.log("altezza scroll: " + Math.ceil(window.pageYOffset));
        console.log("altezza finestra: " + document.documentElement.clientHeight);
        console.log("altezza totale doc: " + Math.ceil(scrollHeight*0.3));

        menuVisible();switchArrows()
    };

    var navbar = document.getElementById("myHeader");
    var sticky = navbar.offsetTop;
    var monLogo = document.getElementById("logo");

    function changeLogoGreen(){
        monLogo.setAttribute("src", "./assets/images/logo2.png");
    }

    function changeLogoBlack(){
        monLogo.setAttribute("src", "./assets/images/logo.png");
    }

    //    function frecciaDownVisible(){
    //        document.querySelector("#arrowDown").classList.remove("unShow");
    //    }
    //    function frecciaDownInvisible(){
    //        document.querySelector("#arrowDown").classList.add("unShow");
    //    }
    //
    //    function frecciaUpVisible() {
    //        document.querySelector("#arrowUp").classList.remove("unShow");
    //    }

    function menuVisible() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("visible");
            changeLogoGreen();
            //            frecciaDownVisible();

        } else {
            navbar.classList.remove("visible");
            changeLogoBlack();
            //            frecciaDownInvisible();

        }
    }

    function switchArrows() {
        //hauteur totale du document
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight);
        /*si on est en bas de page*/
        if(Math.ceil(window.pageYOffset) + document.documentElement.clientHeight == scrollHeight){
            document.querySelector("#arrowDown").classList.add("unShow");
            document.querySelector("#arrowUp").classList.remove("unShow");
        }else {
            document.querySelector("#arrowDown").classList.remove("unShow");
            document.querySelector("#arrowUp").classList.add("unShow");
        }
    }
    /* CLICK SULLA FRECCIA CHE CI RIPORTA ALL'INIZIO DELLA PAGINA */
    function toTop(){
        window.scrollTo(0,0);
    }

    var frecciaUp = document.querySelector(".scrollDown:nth-of-type(2)");

    frecciaUp.addEventListener("click", function(e){
        toTop();
    })




});
