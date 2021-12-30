window.onload = function() {
    let links = document.getElementsByClassName("nav__link");
    for (let i = 0; i < links.length; i++)
    {
        console.log(window.location.href)
        if (links[i].href === window.location.href)
        {
            links[i].classList.add("nav__link_active");
        }
    }
}

let loadTime = (function () {
    let now = new Date().getTime();
    let page_load_time = now - performance.timeOrigin
    let time_load = page_load_time / 1000;
    return time_load.toFixed(4);
})();