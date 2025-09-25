# Posture.AI

Your AI assistant for everything - a web-based ChatGPT-like interface that you can ask anything.

![Posture.AI Interface](https://github.com/user-attachments/assets/e3a3809b-8307-47ff-808f-c1afeaf7d802)

## Features

- 🤖 **ChatGPT-like Interface** - Clean, modern chat interface similar to popular AI assistants
- 💬 **Interactive Conversations** - Real-time chat with typing indicators and smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations and professional styling
- ⚡ **Fast & Lightweight** - Pure HTML, CSS, and JavaScript - no frameworks required
- 🔄 **Smart Responses** - Context-aware responses based on user input patterns

## Getting Started

### Option 1: Simple File Opening
1. Clone this repository
2. Open `index.html` in your web browser

### Option 2: Local Server (Recommended)
1. Clone this repository
2. Navigate to the project directory
3. Start a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
4. Open `http://localhost:8000` in your browser

## Usage

- Type your question or message in the input field at the bottom
- Press Enter to send (or Shift+Enter for new lines)
- Click the send button to submit your message
- The AI will respond with helpful information and assistance

## Screenshots

### Desktop View
![Desktop Interface](https://github.com/user-attachments/assets/3bfa1dde-1112-4633-99d0-71f349761b10)

### Mobile View
![Mobile Interface](https://github.com/user-attachments/assets/991ecb5b-117d-48a9-86b8-7f6d687325f0)

## Customization

The application is built with vanilla HTML, CSS, and JavaScript, making it easy to customize:

- **Styling**: Edit `styles.css` to change colors, fonts, and layout
- **Responses**: Modify the `generateAIResponse()` function in `script.js` to customize AI responses
- **Features**: Add new functionality by extending the JavaScript code

## File Structure

```
posture.ai/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and AI responses
└── README.md           # This file
```

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## Contributing

Feel free to contribute to this project by:
- Submitting bug reports
- Suggesting new features
- Creating pull requests
- Improving documentation

## License

This project is open source and available under the MIT License.
