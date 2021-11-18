

function iconChange() {
let navBtn= document.getElementById("nav-bars");
if(navBtn.style.display === "block") {
    navBtn.style.display = "none"
}else{
    navBtn.style.display ="block";
}
}

function iconToggle(navBtn) {
    navBtn.classList.toggle("fa-minus-circle");
}