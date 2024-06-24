var all = document.getElementsByClassName('black');

function blue()
{
document.getElementsByClassName('blue')[0].style.backgroundColor = "blue";
}

function red()
{
    document.getElementsByClassName('red')[0].style.backgroundColor = "red";
}
function yellow()
{
    document.getElementsByClassName('yellow')[0].style.backgroundColor = "yellow";
}
function reset()
{
    for(i=0;i<all.length;i++)
        {
            all[i].style.backgroundColor = "pink";
        }
}