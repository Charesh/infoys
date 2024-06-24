// const = a variable that can't be changed once we assigned them

const pi = 3.14159;
let radious ;
let circumstance;
 //radious = window.prompt('Enter the radious of the circle');

  


  document.getElementById('submit').onclick = function(){
    radious = document.getElementById('mytext').value 
    radious = Number (radious);
    circumstance = 2 * pi * radious;
    document.getElementById('myh3').textContent = circumstance + 'cm';
  }