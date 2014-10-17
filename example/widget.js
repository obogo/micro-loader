(function () {
    'use strict';

    var q = microloader.q;

    window.microloader = function () {
        var args = Array.prototype.slice.call(arguments);
        var method = args.shift();
        if (microloader.hasOwnProperty(method)) {
            microloader[method].apply(microloader, args);
        }
    };

    var onInit = function () {
        for (var i = 0; i < q.length; i += 1) {
            var args = Array.prototype.slice.call(q[i]);
            var method = args.shift();
            if (microloader.hasOwnProperty(method)) {
                microloader[method].apply(microloader, args);
            }
        }
    };

    microloader.init = function (settings) {
        console.log('settings', settings);
        onInit();
    };

    microloader.ready = function (callback) {
        if (typeof callback === 'function') {
            setTimeout(callback);
        }
    };

    microloader.custom_action = function () {
        console.log('custom_action called...');
    };

    microloader('init', microloaderSettings);

})();