function square(){
    let osnov = parseFloat (document.getElementById("footing").value);
    let v = parseFloat (document.getElementById("height").value); 
    if(isNaN(osnov)){
        alert("Значение для основания введено неверно")
    }
    else if(osnov<=0){
        alert("Длина основания может быть только положительным числом")
    }
    else if(isNaN(v)){
        alert("Значение для высоты введено неверно")
    }
    else if(v<=0){
        alert("Длина высоты может быть только положительным числом")
    }
    else{
        let S = osnov * v/2;
        alert (S);
    }
    
}