(function() {
    window.startTime = (new Date()).getTime();
    window.addEventListener('load', function(){
        const loadEl = document.getElementById('LoadTime');
        if (loadEl) {
            loadEl.innerHTML = ((new Date).getTime() - window.startTime) + 'миллисейкунд';
        }
    });
})();


