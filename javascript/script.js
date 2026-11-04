
// Example 1: Greeting based on the time
function setGreeting() {
    let now = new Date();
    console.log("I am now printing the time " + now.getHours());

    // getHours gets the hour from the computer
    let hours = now.getHours();

    // checks the hour to see what greeting to use
    if (hours < 12) {
        greeting = "Good morning";
    }
    else if (hours < 18) {
        greeting = "Good afternoon";
    }
    else {
        greeting = "Good night";
    }

    console.log(greeting);

    // textContent changes the text in the HTML div
    document.getElementById("greetingOutput").textContent = greeting;
    document.getElementById("ex4").textContent = greeting;
}


// Example 2: Changes text when button clicked
function setButtonText() {

    // getElementById finds the HTML div and textContent changes its text
    document.getElementById("buttonClickText").textContent = "whazz up";
}


// Example 3: Shows the current date
function setButtonDate() {

    // new Date gets the date from the computer
    let now = new Date();

    // toLocaleDateString makes the date readable and shows it in HTML
    document.getElementById("buttonClickDate").textContent = now.toLocaleDateString();
}


// Example 4: Adds two numbers
function buttonClickSum() {

    // .value gets what the user typed in HTML and parseInt makes it a number
    let null1 = parseInt(document.getElementById("null1").value);
    let null2 = parseInt(document.getElementById("null2").value);

    // adds the two numbers together
    let result = null1 + null2;

    // textContent puts the answer into the HTML div
    document.getElementById("buttonClickSum").textContent = result;
}


// Example 5: Counts characters in text
function buttonClickLength() {

    // finds the HTML input and .value gets the text typed in
    const userInput = document.getElementById("null");
    const userText = userInput.value;

    // .length counts the characters including spaces
    const characterCount = userText.length;

    // textContent displays the answer in the HTML div
    document.getElementById("buttonClickLength").textContent =
        userText + ' is ' + characterCount + ' characters long';
}


// Example 6: Shows or hides password
function buttonClickPassword() {

    // finds the password input from HTML
    let passwordInput = document.getElementById("null3");

    // .checked checks if the HTML checkbox is checked (true or false)
    let isChecked = document.getElementById("buttonClickPassword").checked;

    // .type changes the HTML input to text or password depending on checkbox
    if (isChecked) {
        passwordInput.type = "text";
    }
    else {
        passwordInput.type = "password";
    }
}


// Example 7: Changes font size and color
function buttonClickFont() {

    // .style.color changes the HTML text color to red
    document.getElementById("buttonClickFont").style.color = "orange";

    // .style.fontSize changes the text size to 50 pixels
    document.getElementById("buttonClickFont").style.fontSize = "40px";
}


// Example 8: Hides and shows a message
function buttonClickDisplay() {

    // finds the message div in HTML
    let message = document.getElementById("buttonClickDisplay");

    // .style.display checks if the HTML message is hidden
    if (message.style.display == "none") {

        // block shows it and none hides it
        message.style.display = "block";
    }
    else {
        message.style.display = "none";
    }
}


// runs the greeting when HTML page loads
window.onload = function () {
    setGreeting();
}
