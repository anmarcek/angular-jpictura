﻿var jpictura = jpictura || {};

jpictura.debounce = function (func, wait, immediate) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};

jpictura.offWindowWidthResize = function (eventNamespace) {
    $(window).off('.' + eventNamespace);
};

jpictura.onWindowWidthResize = function (eventNamespace, callback) {
    var $window = $(window);
    var lastWindowWidth = $window.width();
    $window.on('resize.' + eventNamespace, function () {
        var windowWidth = $window.width();
        if (lastWindowWidth !== windowWidth) {
            callback();
            lastWindowWidth = windowWidth;
        }
    });
};