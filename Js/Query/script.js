function query() {
    document.querySelector(".sam").style.backgroundColor = "red";
}

function queryall() {
    var all = document.querySelectorAll('#btn');
    for ( i = 0; i < all.length; i++) {
        all[i].style.textColor = "pink";
    }
}