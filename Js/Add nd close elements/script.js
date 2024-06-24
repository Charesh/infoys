function addele() {
    var para = document.createElement("h1");
    para.innerText = "front end forever";
    document.getElementsByTagName("div")[0].appendChild("para");
  }
  
  function clseele() {
    var fetchParagraph = document.querySelector("h1");
    document.getElementsByTagName("div")[0].removeChild(fetchParagraph);
  }
