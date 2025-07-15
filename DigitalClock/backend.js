const timeHere = document.querySelector('.time')

setInterval(() => {
    let date = new Date()
    timeHere.innerText = date.toLocaleTimeString();
}, 1000);