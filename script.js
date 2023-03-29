let body = document.getElementsByTagName('body');
const CurrentTime = document.getElementById('Curr-time');
let mode = document.getElementById('theme');

/* for changing color on mode swith */
let root = document.querySelector(':root');
let rootStyle = getComputedStyle(root);

let toggleStatus = false;

mode.addEventListener('click', function() {

    /* getting css variable value of red theme */
    var fg1 = rootStyle.getPropertyValue('--fg1');
    var fg1Text = rootStyle.getPropertyValue('--fg1Text');
    var shadow = rootStyle.getPropertyValue('--shadow');

    /* getting css variable value of blue theme */
    var fg2 = rootStyle.getPropertyValue('--fg2');
    var fg2Text = rootStyle.getPropertyValue('--fg2Text');
    var shadow2 = rootStyle.getPropertyValue('--shadow2');
    
    if(!toggleStatus) {
        document.body.style.backgroundImage = "url('./asset/img1.png')";

        root.style.setProperty('--fg1',fg2);
        root.style.setProperty('--fg1Text',fg2Text);
        root.style.setProperty('--shadow',shadow2);
    }else {
        document.body.style.backgroundImage = "url('./asset/img2.png')";
    
        root.style.setProperty('--fg1','#98003f');
        root.style.setProperty('--fg1Text','#fbf9de');
        root.style.setProperty('--shadow','rgb(90, 0, 36)');
    }

    toggleStatus = !toggleStatus;
    
})


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