/* LOADER */
window.addEventListener("load", function(){
    this.document.getElementById("loader").classList.toggle("loader2")
})

/* NAV */
window.addEventListener("scroll", function(){
    var header = document.querySelector("header")
    header.classList.toggle("abajo",window.scrollY>400);
})
