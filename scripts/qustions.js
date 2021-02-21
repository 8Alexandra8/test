let questions = ["Какие конструкции для циклов есть в javascript?",
"В какой строке создастся новый объект Array?",
"Объекты, отвечающие за то, что содержится на Web-странице в окне браузера, называются:",
"Что, из ниже перечисленного, относится к событию?",
"Какой метод позволяет изменять порядок элементов массива на противоположный:",
"Что такое ECMAScript?",
"Какая арифметическая операция приводит к ошибке в javascript?",
"Какой оператор служит для создания нового экземпляра из класса однотипных объектов?",
"Какая функция позволяет очищать конечную анимацию?",
"Можно ли использовать один объект XmlHttpRequest для множества разных запросов?"
];
let answers = [
["три: for, while и do…while",
"только одна: for",
"только две: for и while"],
["var pattern = [a,b,c]",
"var pattern = /s&/",
"var pattern = new Array[a,b,c]",
],
["клиентскими",
"пользовательскими",
"встроенными"],
["изменение кодировки пользователем",
"начало загрузки web-страницы",
"сохранение кодировки пользователем",
],
["reverse()",
"join()",
"sort()"
],
["спецификация языка Javascript ",
"новый язык программирования",
"переработанная реализация Javascript"],
["нет верного ответа",
"корень из отрицательного числа",
"деление на ноль"],
["new",
"this",
"prototype"
],
["clearTimeout",
"setTimeout",
"setInterval"],
["можно",
"нет, только один запрос на один объект",
"да, но перед каждым новым запросом надо вызывать abort()"]
];

let Test = document.getElementById("area_test");
for(let i = 0; i<questions.length; i++){
    let p = document.createElement("p");
    p.innerHTML = questions[i];
    p.id = "q"+i;
    Test.appendChild(p);
    let output = [0, 0, 0];
    let quantity = 0;
    while(quantity <= 2){
        let ans = random(0,2);
        let p = document.createElement("p");
        if(output [ans] == 0){
            quantity = quantity + 1;
            output[ans] = 1;
            p.innerHTML += p.innerHTML + '<input type="radio" name="'+i+'" value="'+answers[i][ans]+'"> '+answers[i][ans]+ '</input>';
        }
        Test.append(p);
    }
}

function checkAnswers(){
    let cr = 0;
    for(let i = 0; i < questions.length; i++){
        let ans = document.querySelector('input[name="' + i +'"]:checked');
        if(ans!=null){
            if(ans.value == answers[ans.name][0]){
                document.getElementById("q"+ans.name).style.backgroundColor = "green";
                cr++;
            }
            else{
                document.getElementById("q"+ans.name).style.backgroundColor = "red";
            }
        }
        else{
            document.getElementById("q"+i).style.backgroundColor = "transient";
        }
    }
    alert(cr+"/"+questions.length);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}