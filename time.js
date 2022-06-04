const timeText = document.getElementById("time");

function padWithZero(number){
    if(number < 10) {
        return "0" + number;
    }
    return number;
}

function getTime(){
    const date = new Date();
    const hours = padWithZero(date.getHours());
    const minutes = padWithZero(date.getMinutes());
    // const seconds = padWithZero(date.getSeconds());
    timeText.innerHTML = `
        <span>${hours} : ${minutes} </span>
    `
}

setInterval(getTime, 1000);