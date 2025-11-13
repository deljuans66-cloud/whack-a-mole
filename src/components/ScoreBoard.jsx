import { useGame } from "../context/GameContext";

//Create function for score board component
export default function Scoreboard() {
  const { score, timeLeft, restartGame, isPlaying } = useGame();

  return (
    <div className="scoreboard">
      <p>⏱ Time Left: {timeLeft}s</p>
      <p>🎯 Score: {score}</p>
      {isPlaying && (
        <button onClick={restartGame} className="restart-btn">
          Restart
        </button>
      )}
    </div>
  );
}
