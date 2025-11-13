import { useGame } from "../context/GameContext";
import Hole from "./Hole.jsx";

export default function Field() {
  const { isPlaying } = useGame(); // ✅ use the hook
  const NUM_HOLES = 9;
  const holes = Array.from({ length: NUM_HOLES });

  if (!isPlaying) return null; // optionally hide the field when game isn’t started

  return (
    <section className="field">
      {holes.map((_, index) => (
        <Hole key={index} index={index} />
      ))}
    </section>
  );
}
