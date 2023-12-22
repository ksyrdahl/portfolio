(function () {

    'use strict';
    console.log('reading js');

    const overlay = document.querySelector('#overlay');
    const header = document.querySelector('header');

    header.addEventListener('click', function (event){
        console.log('clicked me');
        location.reload();
    });

// Overlay for navigation drop down

    document.querySelector('#desktop').addEventListener('click', function (event){
        console.log(event.target.className);
        console.log(event.target.id);
        console.log(overlay.className);
        if (overlay.getAttribute('class') == 'showing') {
            event.target.className = 'fas fa-bars';
            overlay.className = 'hidden';
        }
        else{
            event.target.className = 'fas fa-times';
            overlay.className = 'showing';
        }
    });

// Reloads page when you click on header

    header.addEventListener('click', function (event){
        console.log('clicked me');
        location.reload();
    });


})();