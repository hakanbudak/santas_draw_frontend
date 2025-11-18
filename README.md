# 🎅 Santa Draw

> A modern, interactive Secret Santa gift exchange application built with Vue 3 and Vite

<img width="1470" height="835" alt="image" src="https://github.com/user-attachments/assets/f992b5f7-326a-418b-9fa4-ee76820bdf01" />

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 About

Santa Draw is a web-based Secret Santa organizer that makes it easy to set up and manage gift exchanges for any group size. Whether it's for your office party, family gathering, or friend group, Santa Draw handles the random assignments while ensuring everyone gets a perfect match.

<img width="1469" height="833" alt="image" src="https://github.com/user-attachments/assets/82819f7e-d2c8-46f0-8e9b-da8e1c8b7595" />

## ✨ Features

- 🎲 **Random Assignment** - Automated and fair Secret Santa matching
- 👥 **Group Management** - Create and manage multiple Secret Santa groups
- 🔒 **Privacy Focused** - Secure gift assignments that stay secret
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean and intuitive user interface
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🌐 **Multi-language Support** - (if applicable)
- 📧 **Email Notifications** - (if applicable)

<div align="center">
<img width="24%" alt="image" src="https://github.com/user-attachments/assets/09e51023-9b99-4002-8e8b-4000f3c8bc7d" />
<img width="24%" alt="image" src="https://github.com/user-attachments/assets/b58e6bd0-11f6-4368-87dd-d7b85e55df84" />
<img width="24%" alt="image" src="https://github.com/user-attachments/assets/fa161637-3685-4429-b3af-d9ac22390f9c" />
<img width="24%" alt="image" src="https://github.com/user-attachments/assets/7e24215e-e7d0-46a7-913d-f76cdab797d4" />
</div>

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0 or higher)
- **npm** (v8.0 or higher) or **yarn** (v1.22 or higher)

```bash
# Check your Node.js version
node --version

# Check your npm version
npm --version
```

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/santa_draw.git
cd santa_draw
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables** (if needed)

```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your settings
nano .env
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 💻 Usage

### Quick Start Guide

1. **Create a New Draw**
   - Click on "New Draw" button
   - Enter the event name and date
   - Add participant names and email addresses

2. **Generate Assignments**
   - Review your participant list
   - Click "Generate Assignments"
   - The system will randomly match participants

3. **Share Results**
   - Each participant receives their assignment
   - Results remain confidential
   - Share the draw link with participants

### Advanced Usage

```bash
# Run with custom port
npm run dev -- --port 3000

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Development

### Project Setup

```bash
# Install dependencies
npm install
```

### Development Commands

```bash
# Start development server with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run tests (if configured)
npm run test

# Lint and fix files
npm run lint
```

### Code Style

This project follows the Vue.js style guide and uses ESLint for code quality.

```bash
# Check code style
npm run lint

# Auto-fix issues
npm run lint:fix
```

## 🔧 Tech Stack

### Frontend
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript Framework
- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **JavaScript/ES6+** - Modern JavaScript

### Development Tools
- **[Vue DevTools](https://devtools.vuejs.org/)** - Browser DevTools extension
- **ESLint** - Code quality tool
- **Prettier** - Code formatter (if configured)

### Recommended IDE Setup

- **[VS Code](https://code.visualstudio.com/)** with:
  - [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Volar)
  - Disable Vetur if installed

### Browser Extensions

**Chromium-based browsers (Chrome, Edge, Brave):**
- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Custom Object Formatters](http://bit.ly/object-formatters)

**Firefox:**
- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Custom Object Formatters](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 📁 Project Structure

```
santa_draw/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, styles, fonts
│   ├── components/     # Vue components
│   ├── views/          # Page components
│   ├── router/         # Vue Router configuration
│   ├── store/          # State management (if using Pinia/Vuex)
│   ├── utils/          # Utility functions
│   ├── App.vue         # Root component
│   └── main.js         # Application entry point
├── .gitignore
├── index.html          # HTML entry point
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/santa_draw](https://github.com/yourusername/santa_draw)

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Font Awesome](https://fontawesome.com/) - Icon library (if used)
- All contributors who have helped this project grow!

---

<div align="center">
  Made with ❤️ and Vue.js
</div>
