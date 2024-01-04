(function () {

    'use strict';
    console.log('reading js');

    const overlay = document.querySelector('#overlay');
    const nav = document.querySelector('nav');
    const mobilei = document.querySelector('nav i')
    // const indeximg = document.querySelector('#index img');

    // document.querySelector('.more').addEventListener('mouseover', function (event){
    //     console.log("i was touched");
    //     indeximg.style.transform = 'scale(1.1)';
    // });

    // document.querySelector('.more').addEventListener('mouseout', function (event){
    //     console.log("i was touched");
    //     indeximg.style.transform = 'scale(1)';
    // });

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