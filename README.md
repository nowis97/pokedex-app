# Pokedex Application

This application is a Pokedex that allows users to browse and search for Pokemon and view their details. It utilizes an external API to fetch Pokemon data.

## Installation

### Prerequisites

*   Node.js (version >= 20.x)
*   npm (version >= 9.x)


### Clone the repository

```bash
git clone https://github.com/nowis97/pokedex-app.git
cd pokedex-app
```

### Install the dependencies:

```bash
npm install
```

### Running the application

#### Before to running the app you have to create a .env file at root project with this variable

```
VITE_API_URL_POKEDEX="http://localhost:3000" #If you're using the backend project (https://github.com/nowis97/pokedex-backend.git)
```

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.



