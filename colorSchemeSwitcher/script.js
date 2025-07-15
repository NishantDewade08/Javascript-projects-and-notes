const body = document.querySelector(".main")
const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === "skyblue"){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === "aqua"){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id === "b-wood"){
            body.style.backgroundColor = 'burlywood';
        }else if(e.target.id === "g-yellow"){
            body.style.backgroundColor = 'greenyellow';
        }
    })
})