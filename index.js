const btn = document.getElementById('btn')

const pos = ['a','b','c','d','e','f','g']

function getRandomNumber(){
    return Math.round(Math.random() * (pos.length-1))
}
btn.onmouseover = function(){
    btn.className = `${pos[getRandomNumber()]}`
}