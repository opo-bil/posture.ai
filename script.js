// DOM elements
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Chat state
let isTyping = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    messageInput.focus();
    updateSendButton();
});

// Event listeners
messageInput.addEventListener('input', function() {
    updateSendButton();
    autoResize();
});

messageInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

sendButton.addEventListener('click', sendMessage);

// Functions
function updateSendButton() {
    const hasText = messageInput.value.trim().length > 0;
    sendButton.disabled = !hasText || isTyping;
}

function autoResize() {
    messageInput.style.height = 'auto';
    messageInput.style.height = Math.min(messageInput.scrollHeight, 120) + 'px';
}

function sendMessage() {
    const message = messageInput.value.trim();
    if (!message || isTyping) return;

    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    messageInput.value = '';
    messageInput.style.height = 'auto';
    updateSendButton();
    
    // Show typing indicator and get response
    showTypingIndicator();
    setTimeout(() => {
        getAIResponse(message);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
}

function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'user' ? '👤' : '🤖';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    // Handle multi-line content
    const paragraphs = content.split('\n').filter(p => p.trim());
    paragraphs.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        messageContent.appendChild(p);
    });
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function showTypingIndicator() {
    if (isTyping) return;
    
    isTyping = true;
    updateSendButton();
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🤖';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    content.innerHTML = `
        <div class="typing-indicator">
            <span>Thinking</span>
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        </div>
    `;
    
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(content);
    
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
    isTyping = false;
    updateSendButton();
}

function getAIResponse(userMessage) {
    // Simulate AI response generation
    const responses = generateAIResponse(userMessage);
    
    hideTypingIndicator();
    addMessage(responses, 'assistant');
    messageInput.focus();
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Simple response generation based on keywords
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! Great to meet you. I'm Posture.AI, and I'm here to help with any questions or tasks you have. What can I assist you with today?";
    }
    
    if (message.includes('what') && message.includes('you')) {
        return "I'm Posture.AI, an AI assistant designed to help you with a wide variety of tasks. I can:\n\n• Answer questions on many topics\n• Help with analysis and research\n• Assist with writing and creative tasks\n• Provide explanations and tutorials\n• Help solve problems\n• And much more!\n\nWhat would you like to explore together?";
    }
    
    if (message.includes('help')) {
        return "I'm here to help! You can ask me about:\n\n📚 General knowledge and facts\n💡 Problem-solving and analysis\n✍️ Writing and creative projects\n🔬 Science and technology\n📊 Data analysis and math\n🎨 Creative ideas and brainstorming\n📖 Learning new topics\n\nJust ask me anything, and I'll do my best to provide helpful, accurate information!";
    }
    
    if (message.includes('time') || message.includes('date')) {
        const now = new Date();
        return `The current time is ${now.toLocaleTimeString()} and today's date is ${now.toLocaleDateString()}. Is there something specific you'd like to know about time or dates?`;
    }
    
    if (message.includes('weather')) {
        return "I don't have access to real-time weather data, but I'd be happy to help you understand weather patterns, climate science, or suggest reliable weather apps and websites you can use to get current conditions for your area!";
    }
    
    if (message.includes('code') || message.includes('programming')) {
        return "I'd love to help with programming! I can assist with:\n\n• Explaining programming concepts\n• Code review and debugging\n• Writing code snippets\n• Discussing best practices\n• Learning new languages or frameworks\n\nWhat programming topic or challenge are you working on?";
    }
    
    if (message.includes('math') || message.includes('calculate')) {
        return "I can help with mathematics! Whether it's basic arithmetic, algebra, calculus, statistics, or applied math problems, I'm here to assist. What mathematical concept or problem would you like to work on?";
    }
    
    if (message.includes('write') || message.includes('essay') || message.includes('story')) {
        return "I'd be happy to help with writing! I can assist with:\n\n• Essays and academic writing\n• Creative writing and storytelling\n• Business communications\n• Editing and proofreading\n• Brainstorming ideas\n• Structure and organization\n\nWhat type of writing project are you working on?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
        return "You're very welcome! I'm glad I could help. Feel free to ask me anything else - I'm always here and ready to assist with whatever you need.";
    }
    
    // Default responses for various types of questions
    const defaultResponses = [
        "That's an interesting question! While I don't have access to real-time data or the internet, I can share what I know about this topic. Could you provide a bit more context so I can give you the most helpful response possible?",
        
        "I appreciate you asking! Based on what you've shared, I can offer some insights. However, I'd love to understand more about what specifically you're looking for so I can provide the most relevant information.",
        
        "Great question! I'm designed to be helpful across many different topics. While I may not have access to the most current information, I can certainly share knowledge and help you think through this. What particular aspect interests you most?",
        
        "Thank you for your question! I'm here to help you explore ideas and find information. Could you tell me a bit more about what you're trying to accomplish or learn? That way I can tailor my response to be most useful for you.",
        
        "I find that topic fascinating! While I don't have real-time access to current events or the internet, I'd be happy to discuss what I know and help you think through different perspectives. What specific angle are you most curious about?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add some keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Focus input when typing (if not already focused)
    if (e.target !== messageInput && e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        messageInput.focus();
    }
});