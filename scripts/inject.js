const button = document.createElement("a")
button.classList.add("btn", "goto-comments", "btn-sm", "btn-radius", "btn-secondary", "mr-2")
button.textContent = "Next"
button.id = "pc-next"
const i = document.createElement("i")
i.classList.add("fa", "fa-forward", "mr-2")
button.prepend(i)
diva = document.getElementById("content-episodes");



button.onclick = async function(e) {
    // do something with response here, not outside the function
    next = diva.getElementsByClassName("eps-item active")[0].parentNode.nextElementSibling;
    if (next)
        next.getElementsByClassName("eps-item")[0].click();
    else {
        next_s = diva.getElementsByClassName("ss-item active")[0].nextElementSibling;
        if (next_s)
            next_s.click()
        else {
            button.style.visibility = 'hidden';
        }
    }
    // const response = await chrome.runtime.sendMessage({
    //     episodes: diva.innerHTML
    // });
};
const inserter = document.getElementById("pc-comment")

inserter.insertAdjacentElement("afterend", button)