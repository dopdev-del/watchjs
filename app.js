let hr = document.getElementById('hour')
let mn = document.getElementById('min')
let sc = document.getElementById('sec')

setInterval(() => {
    let today = new Date()
    let hour = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    if(hour < 10){
        hour = "0" + today.getHours()
    }

    if (min < 10) {
        min = "0" + today.getMinutes()
    }

    if (sec < 10) {
        sec = "0" + today.getSeconds()
    }

    hr.innerHTML = hour
    mn.innerHTML = min
    sc.innerHTML = sec
});

