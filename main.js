// Function to send a message to Discord webhook
function sendMessageToWebhook(message) {
    fetch('https://discord.com/api/webhooks/1303152842726441060/CMZI50Nf7osGWSo7KFSVKv0IS6ikxkEEOvO5bh6GSk_LFkSSdJKrSIy-bHSsXp95zJpn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: message }),
    })
    .then(response => {
        if (response.ok) {
            console.log('Message sent to Discord webhook successfully.');
        } else {
            console.error('Failed to send message to Discord webhook.');
        }
    })
    .catch(error => console.error('Error sending message:', error));
}

// Send a message to Discord webhook when someone visits the website
sendMessageToWebhook('Someone has visited your website');
