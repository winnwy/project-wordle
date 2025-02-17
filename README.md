# Wordle Game - React Clone

## Overview

This is my solution to the **Wordle Exercise** built with React. It is a fully functional recreation of the popular online word game, **Wordle**. In this version, you can guess a 5-letter word within six attempts. Each guess is evaluated for correctness, and the status of the guessed letters is displayed in real time, helping you narrow down the possibilities.

You can directly play the game online at: [Wordle Game](https://project-wordle-jet.vercel.app/).

![Demo showing the finished product, our Wordle clone](docs/wordle-demo.gif)
## Features

- **Guess Input**: Submit your guesses by typing directly into the input box or by clicking on a displayed on-screen keyboard.
- **Previous Guesses**: The game keeps track of all your previous guesses and displays them on the screen.
- **Guess Grid**: The game features a 6x5 grid, where each of your guesses will populate the rows with colored feedback.
- **Color Feedback**: After each guess, the letters are color-coded based on their correctness:
  - Green for the correct letter in the correct position
  - Yellow for the correct letter in the wrong position
  - Gray for incorrect letters
- **Keyboard Status**: The on-screen keyboard reflects the status of each letter based on your guesses, providing instant visual feedback.
- **Restart Feature**: Once you have completed the game (either by guessing correctly or using all attempts), you can restart the game with a new word.

## Current Status

- **Playable**: The game is fully functional! You can input your guesses by typing or using the on-screen keyboard.
- **Keyboard Feedback**: **Todo**: There’s currently a feature missing—while the game tracks the status of each letter, the on-screen keyboard doesn’t yet update to reflect the status (correct, misplaced, or incorrect) of the letters typed. I will be implementing this feature soon to enhance the gameplay experience.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (Version 14 or higher)
- **npm** (Node Package Manager)

### Installation Steps

1. **Clone the Repository**:

   Open your terminal or command prompt and run the following command to clone the project:

   ```bash
   git clone git@github.com:winnwy/project-wordle.git
   cd project-wordle
   ```

2.	**Install the Dependencies**:
    After navigating to the project directory, install the required dependencies with:
    ```bash
    npm install
    ```
3. **Start the Development Server**:
    To run the app locally, start the development server using the following command:
    ```bash
    npm run dev
    ```
    Your application will be available at http://localhost:1234 in your browser.