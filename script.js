// creating, initialing, and assigning a value to the variable

// const converseContainer = document.querySelector('.converse-container');
// const userInput = document.getElementById('user-input');
// const containerTrigger = document.getElementsByClassName('containerTrigger');
// const botResponseElement = document.getElementById('botResponse');
// const userMessage = document.querySelector('.userP');






// document.addEventListener('DOMContentLoaded', function () {
//     const userInput = document.getElementById('user-input');
//     const chatContainer = document.querySelector('.converse-container');
//     const triggerIcon = document.querySelector('.containerTrigger');
//     const mainContainer = document.querySelector('.main-container');

//     function addMessage(message, sender) {
//         const messageContainer = document.createElement('div');
//         messageContainer.classList.add(sender === 'user' ? 'containerUser' : 'frameBot');
//         messageContainer.innerHTML = `<div class="containerUser-Text">
//                                           <p class="${sender}P">${message}</p>
//                                       </div>
//                                       <p class="messageTime">${sender === 'user' ? 'Just now・Not seen yet' : 'Bot・Just now'}</p>`;
//         chatContainer.appendChild(messageContainer);
//         chatContainer.scrollTop = chatContainer.scrollHeight;
//     }

//     function botResponse(userMessage) {
//         const botMessage = `👋Hi there!: "${userMessage}".  How can I help you?!`;
//         addMessage(botMessage, 'bot');
//     }

//     userInput.addEventListener('keyup', function (event) {
//         if (event.key === 'Enter') {
//             const userMessage = userInput.value.trim();
//             if (userMessage !== '') {
//                 addMessage(userMessage, 'user');
//                 userInput.value = '';
//                 botResponse(userMessage);
//             }
//         }
//     });

//     triggerIcon.addEventListener('click', function () {
//         mainContainer.classList.toggle('collapsed');
//     });
// });







// const userInput = document.getElementById('user-input');
// const conversationContainer = document.querySelector('.converse-container');
// const trigger = document.getElementById('trigger');

// // Function to toggle conversation container visibility
// function toggleConversation() {
//     conversationContainer.classList.toggle('collapsed');
// }

// // Event listener for keyboard input
// userInput.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter' && userInput.value.trim() !== '') {
//         sendMessage(userInput.value);
//         userInput.value = '';
//     }
// });

// // Function to add user message to the conversation
// function sendMessage(message) {
//     const userMessageContainer = document.createElement('div');
//     userMessageContainer.classList.add('containerUser');

//     const userMessageText = document.createElement('div');
//     userMessageText.classList.add('containerUser-Text');
//     userMessageText.innerHTML = `<p class="userP">${message}</p>`;

//     const messageTime = document.createElement('p');
//     messageTime.classList.add('messageTime');
//     const now = new Date();
//     const time = now.getHours() + ':' + now.getMinutes();
//     messageTime.innerHTML = `Just now・${time}`;

//     userMessageContainer.appendChild(userMessageText);
//     userMessageContainer.appendChild(messageTime);

//     conversationContainer.appendChild(userMessageContainer);
// }




const userInput = document.getElementById('user-input');
        const conversationContainer = document.querySelector('.converse-container');
        const trigger = document.getElementById('trigger');

        // Function to toggle conversation container visibility
        function toggleConversation() {
            conversationContainer.classList.toggle('collapsed');
        }

        // Event listener for keyboard input
        userInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && userInput.value.trim() !== '') {
                const userMessage = userInput.value;
                sendMessage(userMessage);
                simulateBotResponse(userMessage);
                userInput.value = '';
            }
        });

        // Function to add user message to the conversation
        function sendMessage(message) {
            const userMessageContainer = document.createElement('div');
            userMessageContainer.classList.add('containerUser');

            const userMessageText = document.createElement('div');
            userMessageText.classList.add('containerUser-Text');
            userMessageText.innerHTML = `<p class="userP">${message}</p>`;

            const messageTime = document.createElement('p');
            messageTime.classList.add('messageTime');
            const now = new Date();
            const time = now.getHours() + ':' + now.getMinutes();
            messageTime.innerHTML = `Just now・${time}`;

            userMessageContainer.appendChild(userMessageText);
            userMessageContainer.appendChild(messageTime);

            conversationContainer.appendChild(userMessageContainer);
        }

        // Function to simulate a bot response
        function simulateBotResponse(userMessage) {
            const botResponseContainer = document.createElement('div');
            botResponseContainer.classList.add('frameBot1');

            const botImage = document.createElement('img');
            botImage.src = "./img/bot.png";

            const botMessage = document.createElement('div');
            botMessage.classList.add('botMessage');
            botMessage.innerHTML = `<p id="botResponse"></p>`;

            botResponseContainer.appendChild(botImage);
            botResponseContainer.appendChild(botMessage);

            setTimeout(function () {
                botMessage.innerHTML = `<p id="botResponse">👋 Hi there! How can I help?</p>`;
            }, 1000); 

            conversationContainer.appendChild(botResponseContainer);
        }