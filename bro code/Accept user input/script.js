// how to accept user input 

// 1.   EASY WAY = window prompt
// 2.   PROFESSIONAL WAY = HTML textbox

/*
let username;
username = window.prompt("Enter your username");
console.log(username)
*/
let username;
document.getElementById("mysubmit").onclick = function() {
    username = document.getElementById("text").value;
    document.getElementById("myh1").textContent = `hello ${username}`;
}
