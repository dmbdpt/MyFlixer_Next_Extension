/* chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.episodes);
        diva = document.createElement("div");
        diva.innerHTML = request.episodes;

        diva2 = diva.getElementsByClassName("eps-item active")[0];
        console.log(diva2);

        next = diva.getElementsByClassName("eps-item active")[0].parentNode.nextElementSibling;

        if (next) {
            console.log(next.getElementsByClassName("eps-item")[0]);
        } else {
            next_s = diva.getElementsByClassName("ss-item active")[0].nextElementSibling;
            console.log(next_s);

        }
        document.body.appendChild(diva2);
        document.body.appendChild(next_s);
    }
); */