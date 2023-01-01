function check() {
    const start = () => {
        setTimeout(function () {
            confetti.start();
        }, 1000);
    };
    const stop = () => {
        setTimeout(function () {
            confetti.stop();
        }, 5000);
    }; 
    var c = 0;
    var q1 = document.quiz.q1.value;
    var q2 = document.quiz.q2.value;
    var q3 = document.quiz.q3.value;
    var q4 = document.quiz.q4.value;
    var q5 = document.quiz.q5.value;
    var q6 = document.quiz.q6.value;
    var q7 = document.quiz.q7.value;
    var q8 = document.quiz.q8.value;
    var q9 = document.quiz.q9.value;
    var q10 = document.quiz.q10.value;

    var result = document.getElementById('result');
    var quiz = document.getElementById('quiz');

    if (q1 == "B") {
        c+=5;
    }else if(q1==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q2 == "B") {
        c+=5;
    }else if(q2==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q3 == "A") {
        c+=5;
    }else if(q3==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q4 == "B") {
        c+=5;
    }else if(q4==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q5 == "A") {
        c+=5;
    }else if(q5==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q6 == "B") {
        c+=5;
    }else if(q6==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q7 == "A") {
        c+=5;
    }else if(q7==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q8 == "A") {
        c+=5;
    }else if(q8==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q9 == "D") {
        c+=5;
    }else if(q9==""){
        c+=0;
    }
    else{
        c--;
    }
    if (q10 == "D") {
        c+=5;
    }else if(q10==""){
        c+=0;
    }
    else{
        c--;
    }
    quiz.style.display = "none";
    card1.style.display = "none";
    card.style.display = "block";
    result.style.display = "block";
    container.style.display = "flex";
    nav.style.display = "none";
    secbtn.style.display = "none";
    container.style.alignItems = "center"
    if (c <= 25) {
        result.textContent = `Your result is ${c}. It is not so good please try to work on yourself.😥`
    } else {
        start();
        stop();   
        result.textContent = `Your result is ${c}. It is awesome. Keep it up!.🎉🥳`
    }
}
function test(){
    quiz.style.display = "block";
    card1.style.display = "none";
    result.style.display = "block";
    container.style.display = "flex";
    navcontainer.style.display = "block";
    secbtn.style.display = "block";
    container.style.alignItems = "stretch"
}

document.body.addEventListener('change', function (e) {
    let target = e.target;
    let message;
    switch (target.id) {
        case 'q1':
            box1.style.backgroundColor = "rgb(93, 204, 93)";
            box1.style.color = "#fff";
            break;
        case 'q2':
            box2.style.backgroundColor = "rgb(93, 204, 93)";
            box2.style.color = "#fff";
            break;
        case 'q3':
            box3.style.backgroundColor = "rgb(93, 204, 93)";
            box3.style.color = "#fff";
            break;
        case 'q4':
            box4.style.backgroundColor = "rgb(93, 204, 93)";
            box4.style.color = "#fff";
            break;
        case 'q5':
            box5.style.backgroundColor = "rgb(93, 204, 93)";
            box5.style.color = "#fff";
            break;
        case 'q6':
            box6.style.backgroundColor = "rgb(93, 204, 93)";
            box6.style.color = "#fff";
            break;
        case 'q7':
            box7.style.backgroundColor = "rgb(93, 204, 93)";
            box7.style.color = "#fff";
            break;
        case 'q8':
            box8.style.backgroundColor = "rgb(93, 204, 93)";
            box8.style.color = "#fff";
            break;
        case 'q9':
            box9.style.backgroundColor = "rgb(93, 204, 93)";
            box9.style.color = "#fff";
            break;
        case 'q10':
            box10.style.backgroundColor = "rgb(93, 204, 93)";
            box10.style.color = "#fff";
            break;
    }
    result.textContent = message;
});