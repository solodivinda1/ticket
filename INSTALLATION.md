# eGotickets Clone - Installation Guide

## Prerequisites

Before you can run this project, you need to install Node.js and npm.

### Installing Node.js

1. **Download Node.js:**
   - Go to https://nodejs.org/
   - Download the LTS version (recommended for most users)
   - Run the installer and follow the setup wizard

2. **Verify Installation:**
   Open a new terminal/command prompt and run:
   ```bash
   node --version
   npm --version
   ```

   You should see version numbers like:
   ```
   v18.17.0
   9.6.7
   ```

## Project Setup

### 1. Clone or Download the Project
Make sure you have all the project files in your directory.

### 2. Install Dependencies
Open a terminal in the project directory and run:
```bash
npm install
```

This will install all required dependencies including:
- React.js
- TailwindCSS
- Framer Motion
- React Router
- And other dependencies

### 3. Start the Development Server
```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`

### 4. Build for Production (Optional)
```bash
npm run build
```

## Troubleshooting

### Common Issues:

1. **"npm is not recognized"**
   - Node.js is not installed or not in PATH
   - Restart your terminal after installing Node.js
   - Make sure Node.js is properly installed

2. **"Module not found" errors**
   - Run `npm install` to install missing dependencies
   - Delete `node_modules` folder and `package-lock.json`, then run `npm install`

3. **Port 3000 is already in use**
   - The development server will automatically try port 3001
   - Or kill the process using port 3000

4. **Build errors**
   - Make sure all files are in the correct directory structure
   - Check that all imports are correct
   - Verify that all dependencies are installed

## Project Structure

```
ticket/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── EventCard.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Events.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   ├── Profile.js
│   │   ├── CreateEvent.js
│   │   ├── Checkout.js
│   │   ├── Success.js
│   │   └── EventDetail.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## Features

Once the application is running, you can:

- Browse events on the home page
- Search and filter events
- Register/login as a user
- Create events (organizer features)
- Book tickets
- Complete checkout process
- View user dashboard and profile

## Support

If you encounter any issues:

1. Make sure Node.js is properly installed
2. Check that all dependencies are installed (`npm install`)
3. Verify the project structure matches the expected layout
4. Check the browser console for any JavaScript errors

The application should work perfectly once Node.js is installed and dependencies are properly set up! 