const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.getElementById("height").value)
    const weight = parseInt(document.getElementById("weight").value)
    const res1 = document.querySelector('.res-1')
    const res2 = res1.nextElementSibling

    if(height === '' || height <= 0 || isNaN(height)){
        res1.innerHTML = 'Please enter valid height'
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        res1.innerHTML = 'Please enter valid weight'
    }else{
        let bmi = (weight /((height * height)/10000)).toFixed(2);
        res1.innerHTML = bmi;

        if(bmi >= 18 && bmi <= 24){
            res2.innerHTML = "Normal Weight"
        }else if(bmi < 18){
            res2.innerHTML = "Under Weighted"
        }else{
            res2.innerHTML = "Over Weighted"
        }
    }
})
