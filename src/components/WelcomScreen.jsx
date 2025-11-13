import { useGame } from "../context/GameContext";

export default function WelcomeScreen() {
  const { startGame } = useGame();
  return (
    <div className="welcome-screen">
      <h1>Whack-a-Mole</h1>
      <h2>Welcome to Whack-a-Mole</h2>
      <h3>Click "Start Game" to begin!</h3>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
}
