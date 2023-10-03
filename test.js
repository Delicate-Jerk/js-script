const myDiv = document.getElementById('myDiv');
        const inputWidth = "220px";
        const messageContainerWidth = "160px";

        // Add inline style to the myDiv
        myDiv.style.position = "fixed";
        myDiv.style.bottom = "0";
        myDiv.style.right = "0";
        myDiv.style.width = "65px";
        myDiv.style.padding = "20px";

        const styleElement = document.createElement("style");
        document.body.appendChild(styleElement);
        const styleSheet = styleElement.sheet;

        styleSheet.insertRule(`
            .message-timestamp {
                font-size: 12px;
                color: #777;
                text-align: center;
                margin-bottom: 0px;
                padding: 00px;
            }
        `);

        styleSheet.insertRule(`
        .user-message, .bot-message {
            font-size: 13px; 
        }

        `);

        styleSheet.insertRule(`
        .bot-message .message-timestamp {
            position: relative;
            top: -15px; /* Adjust the vertical position as needed */
            display: block;
            margin-bottom: 5px; /* Add some spacing between the timestamp and the message */
            text-align: right; /* Align the timestamp to the right */
        }
        `);

        styleSheet.insertRule(`
            .bot-message-logo {
                position: absolute;
                bottom: -55px; 
                left: -30px; 
                padding: 30px;
            }
        `);

        styleSheet.insertRule(`
            .bot-message {
                margin-bottom: 25px; 
            }
        `);

        styleSheet.insertRule(`
            .user-message {
                margin-bottom: 10px; /* Adjust the margin as needed */
            }
        `);

        styleSheet.insertRule(`
            .chat-header {
                background-color: rgba(23, 73, 77);
                color: white;
                display: flex;
                align-items: center;
                padding: 10px;
                border-bottom: 1px solid #ccc;
                padding-bottom: 5px;
            }
        `);

        // Create the chat container div
        const chatContainer = document.createElement("div");
        chatContainer.className = "chat-container";
        chatContainer.id = "chatContainer";
        chatContainer.style.position = "absolute";
        chatContainer.style.bottom = "100px";
        chatContainer.style.right = "20px"; // Adjusted the right position
        chatContainer.style.width = "320px"; // Reduced the width
        chatContainer.style.height = "0"; // Set height to auto
        chatContainer.style.overflow = "hidden"; // Hide overflow
        chatContainer.style.backgroundColor = "#f2f2f2"; // Background color change
        chatContainer.style.border = "1px solid #ccc"; // Border added
        chatContainer.style.borderRadius = "10px"; // Rounded corners
        chatContainer.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
        chatContainer.style.transition = "height 0.3s ease-in-out";
        chatContainer.style.display = "flex";
        chatContainer.style.flexDirection = "column";

        // Create the chat header
        const chatHeader = document.createElement("div");
        chatHeader.className = "chat-header"; // Apply the CSS class
        chatHeader.style.color = "black";
        chatHeader.style.textAlign = "center";
        chatHeader.style.marginTop = "1px"; // Reduced margin-top

        // Create the logo image
        const logoImg = document.createElement("img");
        logoImg.src = "pic.png"; // Replace with your logo image URL
        logoImg.alt = "Antier Bot Logo";
        logoImg.style.width = "24px"; // Set the logo width (adjust as needed)
        logoImg.style.height = "24px"; // Set the logo height (adjust as needed)
        logoImg.style.marginRight = "5px"; // Add margin to separate from heading

        // Set the text content of the chat header
        chatHeader.textContent = "Antier Bot";
        chatHeader.style.color = "white";

        // Append the logo and chat header to the chatContainer
        chatHeader.insertBefore(logoImg, chatHeader.firstChild); // Insert the logo at the beginning
        chatContainer.appendChild(chatHeader);

        // Create the message container div
        const messageContainer = document.createElement("div");
        messageContainer.className = "message-container";
        messageContainer.className = "message-container hide-scrollbar";
        messageContainer.id = "messageContainer";
        messageContainer.style.flex = "1";
        messageContainer.style.display = "flex";
        messageContainer.style.flexDirection = "column"; // Reverse message order
        messageContainer.style.overflowY = "auto"; // Enable vertical scrollbar
        messageContainer.style.maxHeight = "calc(100% - 100px)"; // Adjust the maximum height as needed
        messageContainer.style.overflowX = "none";

        // Create the input form
        const questionForm = document.createElement("form");
        questionForm.id = "questionForm";
        questionForm.style.marginTop = "auto";

        // Add an arrow button inside the input container
        const inputContainer = document.createElement("div");
        inputContainer.style.position = "relative";

        const attachmentIcon = document.createElement("div");
        attachmentIcon.innerHTML = "&#128206;"; // You can use any suitable icon here
        attachmentIcon.style.position = "absolute";
        attachmentIcon.style.left = "5px"; // Adjust the left position for padding
        attachmentIcon.style.top = "50%";
        attachmentIcon.style.transform = "translateY(-50%)";

        const buttonAndFileContainer = document.createElement("div");
        buttonAndFileContainer.style.position = "relative";

        attachmentIcon.addEventListener("click", function () {
            fileInput.click(); // Trigger a click event on the hidden file input
        });

        const chatInput = document.createElement("input");
        chatInput.type = "text";
        chatInput.id = "chatInput";
        chatInput.name = "question";
        chatInput.placeholder = "Type your message here";
        chatInput.style.flex = "1"; // Allow input to grow
        chatInput.style.padding = "10px 10px 10px 30px"; // Add padding to the input
        chatInput.style.border = "1px solid #ccc";
        chatInput.style.borderRadius = "10px"; // Added border-radius for curve
        chatInput.style.marginBottom = "10px"; // Added margin-bottom
        chatInput.style.marginRight = "0"; // Removed margin-right
        chatInput.style.width = "100%";
        
        const sendButton = document.createElement("button");
        sendButton.id = "sendButton";
        sendButton.style.position = "absolute";
        sendButton.style.right = "5px";
        sendButton.style.top = "5px";
        sendButton.style.width = "30px";
        sendButton.style.height = "50%";

        sendButton.style.border = "2px";
        sendButton.style.cursor = "pointer";
        sendButton.innerHTML = "&#10148;"; // Unicode right arrow character

        inputContainer.appendChild(attachmentIcon);
        inputContainer.appendChild(chatInput);
        inputContainer.appendChild(sendButton);
        

        // Append the input container to the questionForm
        questionForm.appendChild(inputContainer);

        // Append the message container and questionForm to the chatContainer
        chatContainer.appendChild(messageContainer);
        chatContainer.appendChild(questionForm);

        // Append the chatContainer to myDiv
        myDiv.appendChild(chatContainer);

        // Create the button element dynamically
        const openChatBtn = document.createElement("button");
        openChatBtn.id = "openChatBtn";
        openChatBtn.style.display = "block";
        openChatBtn.style.backgroundColor = "rgba(23, 73, 77)";
        openChatBtn.style.color = "white";
        openChatBtn.style.width = "50px";
        openChatBtn.style.height = "50px";
        openChatBtn.style.border = "none";
        openChatBtn.style.cursor = "pointer";
        openChatBtn.style.borderRadius = "50%";
        openChatBtn.style.position = "fixed";
        openChatBtn.style.bottom = "20px"; // Adjust the vertical position
        openChatBtn.style.right = "20px"; // Adjust the horizontal position

        const span = document.createElement("span");
        span.style.position = "absolute";
        span.style.top = "50%";
        span.style.left = "50%";
        span.style.transform = "translate(-50%, -50%)";
        span.textContent = "+";

        openChatBtn.appendChild(span);

        // Append the button to the body element
        document.body.appendChild(openChatBtn);

        document.body.appendChild(buttonAndFileContainer);
        
        // Create the hidden file input element
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.style.display = "none"; // Hide the file input initially
        fileInput.id = "fileInput";

        // Append the file input to the button and file container
        buttonAndFileContainer.appendChild(fileInput);

        let chatOpen = false;

        function toggleChatWindow() {
            chatOpen = !chatOpen;
            chatContainer.style.height = chatOpen ? '400px' : '0';
        }

        function addMessage(content, isUser) {
            const message = document.createElement("div");
            message.classList.add(isUser ? "user-message" : "bot-message");

            // Create a message content element
            const messageContent = document.createElement("div");
            messageContent.textContent = content;

            message.appendChild(messageContent); // Append the message content to the message

            message.style.padding = "10px"; // Add padding to messages
            message.style.position = "relative"; // Add relative positioning

            if (isUser) {
                message.style.alignSelf = "flex-end";
                message.style.backgroundColor = "rgba(23, 73, 77)"; // User message background color
                message.style.color = "white";
                message.style.borderRadius = "15px"; // Rounded corners
                message.style.marginRight = "10px"; // Adjust margin for user messages
            } else {
                message.style.alignSelf = "flex-start";
                message.style.backgroundColor = "#E2DEDE"; // Bot message background color
                message.style.color = "black";
                message.style.borderRadius = "15px"; // Rounded corners
                message.style.marginLeft = "10px"; // Adjust margin for bot messages

                if (!isUser) {
                    // Create the logo for bot messages
                    const logoImg = document.createElement("img");
                    logoImg.src = "pic.png"; // Replace with your logo image URL
                    logoImg.alt = "Bot Logo";
                    logoImg.style.width = "24px"; // Set the logo width (adjust as needed)
                    logoImg.style.height = "24px"; // Set the logo height (adjust as needed)
                    logoImg.style.marginTop = "5px"; // Adjust top margin for spacing

                    // Add a CSS class to the logo for positioning
                    logoImg.classList.add("bot-message-logo");

                    // Append the logo to the bot message
                    message.appendChild(logoImg);

                    // Create a timestamp element for bot messages
                    const timestamp = document.createElement("div");
                    timestamp.classList.add("message-timestamp");
                    timestamp.textContent = getCurrentTime(); // Get the current time as a string
                    timestamp.style.position = "absolute"; // Set absolute positioning
                    timestamp.style.bottom = "0"; // Align to the bottom
                    timestamp.style.right = "0"; // Align to the right
                    timestamp.style.fontSize = "12px"; // Adjust font size
                    timestamp.style.color = "black"; // Adjust text color

                    // Append the timestamp to the message
                    message.appendChild(timestamp);
                }
            }

            messageContainer.appendChild(message);
        }

        // Function to get the current time as a string
        function getCurrentTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        }

        openChatBtn.addEventListener('click', function() {
            toggleChatWindow();
        });

        // Modify the event listener for the send button (arrow)
        document.getElementById('sendButton').addEventListener('click', function(event) {
            event.preventDefault();
            const chatInput = document.getElementById('chatInput');
            const question = chatInput.value;

            addMessage(question, true);

            // Simulated response for demonstration
            const answer = "This is a sample response.";
            addMessage(answer, false);

            chatInput.value = '';
        });
