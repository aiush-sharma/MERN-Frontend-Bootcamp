import React, { useState } from "react";

// 1. The Parent Container
export default function GamePage() {
  const [key, setKey] = useState(0);

  // Every time this runs, key increments (0 -> 1 -> 2), forcing a total reset
  const handleReset = () => setKey((prevKey) => prevKey + 1);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>My Arcade Setup</h2>
      <Game key={key} resetGame={handleReset} />
    </div>
  );
}

// 2. The Actual Game Component
function Game({ resetGame }) {
  // Generate a secret target number between 1 and 10 on initial load
  const [targetNumber] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 10!");
  const [attempts, setAttempts] = useState(0);

  const checkGuess = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess);
    setAttempts((prev) => prev + 1);

    if (userGuess === targetNumber) {
      setMessage(`🎉 Correct! You got it in ${attempts + 1} tries!`);
    } else if (userGuess < targetNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  };

  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "20px",
        display: "inline-block",
        borderRadius: "8px",
      }}
    >
      <h3>🔢 Number Guessing Game</h3>
      <p>{message}</p>

      <form onSubmit={checkGuess}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          style={{ padding: "8px", width: "60px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 12px" }}>
          Guess
        </button>
      </form>

      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #eee",
          paddingTop: "15px",
        }}
      >
        {/* This button talks to the parent, shifts the key, and blows up this entire component */}
        <button
          onClick={resetGame}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reset Game (Change Key)
        </button>
      </div>
    </div>
  );
}
