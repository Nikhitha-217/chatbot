// A simple chatbot that responds with some predefined answers
function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if(input.includes("hello") || input.includes("hi")) {
        output = "Hello, nice to meet you!";
    }else if (input.includes("how are you")) {
        output = "I'm doing fine, thankyou for asking.";
    }else if (input.includes("will you be my friend")) {
        output = "Yes, feel me as your friend";
    }else if (input.includes("then what is your name")) {
        output = "my name is ravitheja, I am a chatbot";
    }else if (input.includes("what is your favorite food")) {
        output = "My favorite food is chicken curry";
    }else if (input.includes("where is your native place")) {
        output = "I dont have any native place";
    }else if (input.includes("what is your favorite game")) {
        output = "I love indoor games";
    }else if (input.includes("Do you love to use mobile")) {
        output = "No i wont use phone";
    }else if (input.includes("who is your hero")) {
        output = "my hero is my father";
    }else if (input.includes("will you get angry")) {
        output = "No I won't have feelings";
    }else if (input.includes("what is your favorite occupation")) {
        output = "i love to designing";
    }else if (input.includes("what designs you like to make")) {
        output = "i will design and develop websites for you";
    }else if (input.includes("how many websites did you developed")) {
        output = "i have developed infinity websites imy libraries";
    }
    return output;
}

// Display the user message on the chat
function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
}

//Display the bot message on the chat
function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("Text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
}

//send the user message and get the bot response
function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
        displayUserMessage(input);
        let output = chatbot(input);
        setTimeout(function() {
            displayBotMessage(output);
      },  1000);
            document.getElementById("input").value = "";
    }
}

//Add a click event listener to the button
document.getElementById("button").addEventListener("click", sendMessage);

//Add a keypress event listener to the input
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        sendMessage();
    }
});