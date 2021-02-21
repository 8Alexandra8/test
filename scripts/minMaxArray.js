function Arr(){
    let number = document.getElementById("arr").value.split(" ").map(s=>parseInt(s));
    let max = Math.max.apply(null, number);
    let min = Math.min.apply(null, number);
    alert( "Максимальное значение " + max + " Минимальное значение " + min );
}