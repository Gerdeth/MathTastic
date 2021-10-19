const option1=document.getElementById("option1");
const option2=document.getElementById("option2");
const option3=document.getElementById("option3");
const option4=document.getElementById("option4");

let answer=0;


function generate_equation(){
    let num1=Math.floor(Math.random()*100);
    let num2= Math.floor(Math.random()*10);
    let dummyAnswer1=Math.floor(Math.random()*21);
    let dummyAnswer2=Math.floor(Math.random()*21);
    let dummyAnswer3=Math.floor(Math.random()*21);
    let allAnswer=[];
    let switchAnswers=[]

    answer = num1 / num2;
    document.getElementById("num1").innerHTML= num1;
    document.getElementById("num2").innerHTML= num2;

    allAnswer= [answer, dummyAnswer1,dummyAnswer2, dummyAnswer3]

    for(i=allAnswer.length; i--;){
        switchAnswers.push(allAnswer.splice(Math.floor(Math.random()*(i+1),),1)[0])

    }

    option1.innerHTML= switchAnswers[0];
    option2.innerHTML= switchAnswers[1];
    option3.innerHTML= switchAnswers[2];
    option4.innerHTML=switchAnswers[3];
}
option1.addEventListener("click", function(){
    if (option1.innerHTML==answer){
        generate_equation()
    }
    else(
        alert("Try again")
    )
});
option2.addEventListener("click", function(){
    if (option2.innerHTML==answer){
        generate_equation()
    }
    else(
        alert("Try again")
    )
});
option3.addEventListener("click", function(){
    if (option3.innerHTML==answer){
        generate_equation()
    }
    else(
        alert("Try again")
    )
});
option4.addEventListener("click", function(){
    if (option4.innerHTML==answer){
        generate_equation()
    }
    else(
        alert("Try again")
    )
});

generate_equation();