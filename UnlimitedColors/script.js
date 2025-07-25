let randomColor = function () {
    let hex = '0123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let changeColor;
document.getElementById('start').addEventListener('click', function(){
    if(!changeColor){
        changeColor = setInterval(function(){
            document.body.style.backgroundColor = randomColor()
        }, 1000)
    }
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(changeColor)
    changeColor = null
})