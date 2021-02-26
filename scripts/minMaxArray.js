function Arr(){
    let number = document.getElementById("arr").value.split(" ").filter(s => s != "").map(s=>parseInt(s));
    if(number.length != 5){
        alert("Элементов должно быть 5")
    }
    else if(!(Proverka(number)) ){
        alert("Значение неккроректно")
    }
    else{

    let max = Math.max.apply(null, number);
    let min = Math.min.apply(null, number);
    alert( "Максимальное значение " + max + " Минимальное значение " + min );
    }
}
function Proverka(Arr){
    for(let i = 0; i<Arr.length; i++ ){
        if(isNaN(Arr[i])){
            return false;
        }

    }
    return true;
}