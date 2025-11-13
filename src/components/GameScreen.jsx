import "../GameScreen.css";
import { useGame } from "../context/GameContext";
import WelcomeScreen from "./WelcomeScreen";
import Field from "./Field";
import Scoreboard from "./ScoreBoard";

export default function GameScreen() {
  const { isPlaying } = useGame();

  return (
    <div className="app">
      {isPlaying ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <WelcomeScreen />
      )}
    </div>
  );
}
