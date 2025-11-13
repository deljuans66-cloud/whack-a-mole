import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [moleIndex, setMoleIndex] = useState(null);

  // Start game
  function startGame() {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    setMoleIndex(Math.floor(Math.random() * 9)); // random hole at start
  }

  // Restart game
  function restartGame() {
    startGame();
  }

  // Countdown timer (30s)
  useEffect(() => {
    if (!isPlaying) return;

    if (timeLeft === 0) {
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [isPlaying, timeLeft]);

  // Click mole to increase score & move to new hole
  function hitMole(index) {
    if (!isPlaying) return;

    if (index === moleIndex) {
      setScore((s) => s + 1);

      // Move mole to a *different* random hole
      setMoleIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * 9);
        } while (newIndex === prevIndex); // ensure it moves
        return newIndex;
      });
    }
  }

  return (
    <GameContext.Provider
      value={{
        score,
        timeLeft,
        isPlaying,
        moleIndex,
        startGame,
        restartGame,
        hitMole,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
