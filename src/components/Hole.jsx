import { useGame } from "../context/GameContext";

export default function Hole({ index }) {
  const { moleIndex, hitMole } = useGame();
  const isMoleHere = index === moleIndex;

  return (
    <div
      className="hole"
      onClick={() => hitMole(index)}
      style={{
        width: "80px",
        height: "80px",
        margin: "10px",
        display: "inline-block",
        position: "relative",
      }}
    >
      {isMoleHere && (
        <div
          className="mole"
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            top: "15px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
    </div>
  );
}
