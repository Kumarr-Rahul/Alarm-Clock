const CurrentTime = document.getElementById('Curr-time');

/* every 1sec function will get call */
setInterval(appendTime, 1000);

/* current time display function*/
function appendTime() {

    let time = new Date();

    const hr = timeStyle(time.getHours());
    const min = timeStyle(time.getMinutes());
    const sec = timeStyle(time.getSeconds());

    const finalTime = `${hr}:${min}:${sec}`;

    CurrentTime.innerText = finalTime;
    // console.log(finalTime);

}

// change style or format of time, for ex 2:7:7 to 02:07:07
function timeStyle(time) {
    if ( time < 10 && time.length != 2) {
        return '0' + time;
    }
    return time;
}