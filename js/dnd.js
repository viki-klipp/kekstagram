'use strict';

(function() {
    var pin = document.querySelector('.upload-effect-level-pin');
    var levelVal = document.querySelector('.upload-effect-level-val');
    var level = document.querySelector('.upload-effect-level-line');

    pin.addEventListener('mousedown', function(evt) {
        evt.preventDefault();
        var coordX = evt.clientX;
        
        var onMouseMove = function(evt) {
            evt.preventDefault();
            var shift = evt.clientX - coordX;
            coordX = evt.clientX;
            
            if (pin.offsetLeft + shift < 0 || pin.offsetLeft + shift > level.offsetWidth) {
                pin.style.left = pin.offsetLeft + 'px';
            } else {
                pin.style.left = pin.offsetLeft + shift + 'px';
            }

            levelVal.style.width = (100 * pin.offsetLeft / level.offsetWidth) + '%';
        };

        var onMouseUp = function(evt) {
            evt.preventDefault();
            document.removeEventListener('mousemove', onMouseMove);
            pin.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        pin.addEventListener('mouseup', onMouseUp);
    });
})();