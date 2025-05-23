# 🧠 AI-Powered Code Reviewer

An intelligent code review assistant built using the **MERN stack** and **Gemini API**. It analyzes code snippets, detects loopholes, and suggests improvements in real-time — like having an AI code mentor!

## 🚀 Features

- ✅ Accepts JavaScript code (easily extendable to other languages)
- 💡 Provides suggestions for code improvement
- 🐞 Detects bugs, bad practices, and potential optimizations
- 📦 Built with modern web technologies (MongoDB, Express.js, React, Node.js)
- 🔐 Secure Gemini API integration with `.env` support
- 🌐 Clean and responsive UI

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** Google Gemini API
- **Other Tools:** dotenv, axios, react-markdown

## ⚙️ How It Works

1. User inputs a JavaScript code snippet.
2. Code is sent to the backend via a POST request.
3. Backend forwards the code to Google’s Gemini API.
4. AI responds with an analysis and improvement suggestions.
5. Output is displayed in markdown format on the frontend.
