function opat() {
    var attribute = document.createAttribute("class");
    attribute.value = "dummy";
    document.getElementsByTagName("h1")[0].setAttributeNode("attribute");
}
function clat() {
    document.getElementsByTagName("h1")[0].removeAttribute("class");
}