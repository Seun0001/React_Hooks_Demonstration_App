# React Hooks Demo

This project demonstrates the use of various React hooks (`useState`, `useEffect`, and `useRef`) to manage state and side effects in a simple React application. Additionally, it showcases a custom hook (`useLocalStorage`) for persisting state to local storage.

## Features

- **Counter**: A simple counter that increments and decrements, with the state persisted to local storage.
- **Name List**: A list where users can add and remove names, with the state also persisted to local storage.
- **Local Storage**: The custom hook `useLocalStorage` is used to manage state persistence.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/react-hooks-demo.git
    cd react-hooks-demo
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Usage

Once the development server is running, open your browser and navigate to `http://localhost:3000`. You will see the React Hooks Demo application with two main sections: Counter and Name List.

### Counter

- **Increment**: Click the "Increment" button to increase the counter by 1.
- **Decrement**: Click the "Decrement" button to decrease the counter by 1.
- The counter value is displayed in different colors based on its value (zero, positive, or negative).

### Name List

- **Add Name**: Enter a name in the input field and click "Add Name" to add it to the list.
- **Remove Name**: Click the "x" button next to a name to remove it from the list.

## Code Overview

### Custom Hook: `useLocalStorage`

The `useLocalStorage` hook manages state with local storage persistence.
