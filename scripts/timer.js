function timer() {
    let timerId;
    let i = 0;

    function time(){
        let end = new Date(Date.now()); 
        let time = Math.floor((end - i)/1000 );
        let seconds =  time %60;
        let minutes = Math.floor(time/60)%60 ;
        let hours = Math.floor(time/3600);
        return hours + ":" + Math.floor(minutes/10) + minutes%10 + ":" + Math.floor(seconds/10) + seconds%10;
    }
    return {
        getTime: function(){
           return time();
        },
        stop: function() {
            clearInterval(timerId);
            timerId = undefined;
            document.getElementById("time").innerHTML = "Time: 0:00:00";
        },
        start: function () {
            clearInterval(timerId);
            i = new Date(Date.now());
            timerId = setInterval(function() {
                document.getElementById("time").innerHTML = "Time: " + time();
            }, 100);
        }
    };
}
let time = timer();
function Start(){
    time.start();
}
function Stop(){
    time.stop();
    alert(time.getTime());
}
