(function() {
    var n = "microloader";
    var w = window;
    var d = document;
    var i = function() {
        i.c(arguments);
    };
    i.q = [];
    i.c = function(args) {
        i.q.push(args);
    };
    w[n] = i;
    function l() {
        var s = d.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "widget.js";
        var x = d.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
    }
    if (w.attachEvent) {
        w.attachEvent("onload", l);
    } else {
        w.addEventListener("load", l, false);
    }
})();