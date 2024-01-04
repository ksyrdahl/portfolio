(function () {

    'use strict';
    console.log('reading js');

    const overlay = document.querySelector('#overlay');
    const nav = document.querySelector('nav');
    const mobilei = document.querySelector('nav i');
    const bridgebutton =  document.querySelector('#bridgebutton');

    bridgebutton.addEventListener('click', function (event){
        const screenWidth = window.innerWidth;
        console.log(screenWidth);
        if (screenWidth < 1399){
            bridgebutton.setAttribute("href","#"); 
            alert("This project is not meant for screens smaller than 1400 pixels. Please explore this site on a larger screen. Thank you! :)");
        }
        else{
            bridgebutton.setAttribute("href","https://ksyrdahl.github.io/des157a/studio2/index.html"); 
        }
    });

// Overlay for navigation drop down


    document.querySelector('#desktop').addEventListener('click', function (event){

        console
        console.log(event.target.className);
        console.log(event.target.id);
        console.log(overlay.className);
        if (overlay.getAttribute('class') == 'showing') {
            mobilei.className = 'fas fa-bars';
            overlay.className = 'hidden';
        }
        else{
            mobilei.className = 'fas fa-times';
            overlay.className = 'showing';
            nav.style.zIndex = "3";
        }
    });

})();