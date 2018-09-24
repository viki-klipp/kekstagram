'use strict';

(function() {
    var URL = 'https://js.dump.academy/kekstagram/data';

    window.backend = {
        load: function(onLoad, onError) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';

            xhr.open('GET', URL);

            xhr.addEventListener('load', function() {
                console.log(xhr.response);
                onLoad(xhr.response);
            });

            xhr.send();
        }
    };
})();