 var enterednumber = document.getElementById("enternumber")
    var answer = document.getElementById("answer")
    var outputscore = document.getElementById("score")

    var randomnumber = Math.floor(Math.random()*10)+1

    var scoree = 10
    
    function change(){
        enterednumberinput = enterednumber.value
        if(enterednumberinput==randomnumber)
        {
            answer.textContent = "Correct Guess"
            answer.style.color = "green"
            score.textContent = "Your score :"+ scoree
       
        }
        else if(enterednumberinput=="")
        {
            alert("Please enter your number")
        }
       
        else
        {
            scoree = scoree-1
            score.textContent = "Your score :"+ scoree
            answer.textContent = "Wrong! Guess"
            answer.style.color = "red"

            if(scoree<0)
            {
                alert("Your Session Completed.")
                location.reload()
                document.getElementById("fullDataForm").style.backgroundColor="red"
                document.getElementById("fullDataForm").textContent="you failed you guessing"
            }
         }
         document.getElementById("human").textContent="HUMAN :"+enterednumberinput
         document.getElementById("computer").textContent="COMPUTER :"+randomnumber

         randomnumber = Math.floor(Math.random()*10)+1
         
    }