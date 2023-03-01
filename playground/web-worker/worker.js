setInterval(function() {
    var s = 1;
    for(var i = 0; i < 500000000; i++) {
        s *= i;
    };
}, 500);

setInterval(function() {
    fetch('https://mc.yandex.ru/watch/46986615/1');
}, 2000);
