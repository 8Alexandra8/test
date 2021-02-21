function timer() {
    let timerId;
    let i = 0;
    return {
        getI: function(){
            return i;
        },
        stop: function() {
            clearInterval(timerId);
            timerId = undefined;
            document.getElementById("time").innerHTML = "Time: 0";
        },
        start: function () {
            clearInterval(timerId);
            i = 0;
            timerId = setInterval(function() {
                document.getElementById("time").innerHTML = "Time: " + (++i);
            }, 1000);
        }
    };
}
let time = timer();
function Start(){
    time.start();
}
function Stop(){
    time.stop();
    alert(time.getI());
}


