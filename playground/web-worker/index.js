if (location.search.indexOf('worker') >= 0) {
    var myWorker = new Worker('worker.js');
} else {
    var script = document.createElement('script');
    script.src = 'worker.js';
    document.body.appendChild(script);
}
