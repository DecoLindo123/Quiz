
    player1_name = localStorage.getItem("player1Name");
    player2_name = localStorage.getItem("player2Name"); 
    player1_score = 0; player2_score = 0; 
document.getElementById("player1Name").innerHTML = player1_name + " : "; 
    document.getElementById("player2Name").innerHTML = player2_name + " : "; 
    document.getElementById("player1_score").innerHTML = player1_score ; 
    document.getElementById("player2_score").innerHTML = player2_score ; 
    document.getElementById("player_question").innerHTML = "Turno de Pergunta: " + player1_name ; 
    document.getElementById("player_answer").innerHTML = "Turno de Resposta: " + player2_name ;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "<h4>";
    input_box = "<br>Resposta : <input type='text id ='input_check_box'>";
    
    check_button = "<br><br><button class= 'btn btn-info'onclick= 'check()'>Checar</button>";

    checar = 

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "<h4>";
    input_box = "<br>Resposta : <input type='text id ='input_check_box'>";
    
    check_button = "<br><br><button class= 'btn btn-info'onclick= 'check()'>Checar</button>";

    document.getElementById("output").innerHTML = row;


}
