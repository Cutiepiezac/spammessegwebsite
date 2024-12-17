// Spamming a message visibly on the webpage with a close button
(function spamMessageOnPage() {
    const message = "This is a test message!"; // The message to spam
    const interval = 200; // Time interval in milliseconds (e.g., 200ms = 0.2 seconds)

    console.log("Starting on-page message spam...");

    // Set up an interval to repeatedly display the message
    const spamInterval = setInterval(() => {
        // Create a new container div for the message and the button
        const messageDiv = document.createElement("div");
        messageDiv.style.position = "fixed";
        messageDiv.style.top = Math.random() * window.innerHeight + "px"; // Random vertical position
        messageDiv.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
        messageDiv.style.backgroundColor = "yellow";
        messageDiv.style.color = "black";
        messageDiv.style.padding = "10px";
        messageDiv.style.fontSize = "16px";
        messageDiv.style.border = "1px solid black";
        messageDiv.style.zIndex = 9999;
        messageDiv.style.display = "flex";
        messageDiv.style.alignItems = "center";
        messageDiv.style.gap = "10px";

        // Add the message text
        const textSpan = document.createElement("span");
        textSpan.textContent = message;
        messageDiv.appendChild(textSpan);

        // Create the close button
        const closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.style.backgroundColor = "red";
        closeButton.style.color = "white";
        closeButton.style.border = "none";
        closeButton.style.padding = "5px";
        closeButton.style.cursor = "pointer";

        // Add the close functionality
        closeButton.onclick = () => {
            document.body.removeChild(messageDiv);
        };

        // Add the button to the message div
        messageDiv.appendChild(closeButton);

        // Add the message to the page
        document.body.appendChild(messageDiv);

        // Optionally remove the message after a short time
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
            }

    // Stop spamming after a certain time (optional)
    setTimeout(() => {
        clearInterval(spamInterval);
        console.log("Stopped on-page message spam.");
    }, 1000000000); // Stop after 10 seconds (adjust as needed)
})();

