function setGreeting() {
    let now = new Date(); //built in class in javascript
    console.log("I am now printin the time " + now.getHours());

    let hours = now.getHours();
    //good moring if < 12
    // good afternoon if <18
    // good night - otherwise

    if (hours < 12) {
        greeting = "Good morning";
    }
    else if (hour < 18) {
        greeting = "Good afternoon";
    }
    else {
        greeting = "Good night";
    }
    console.log(greeting)
    document.getElementById("greetingOutput").textContent = greeting

    console.log(greeting)
     document.getElementById("ex4").textContent = greeting

}

function setButtonText(){
    document.getElementById("buttonClickText").textContent = "whazz up"
}

function setButtonDate(){
    let now = new Date();
    document.getElementById("buttonClickDate").textContent = now.toLocaleDateString()
}
function buttonClickSum(){
    let null1 = parseInt(document.getElementById("null1").value);
    let null2 = parseInt(document.getElementById("null2").value);
    let result = null1 + null2;
    document.getElementById("buttonClickSum").textContent= result
}

window.onload = function () {
    setGreeting();
}

