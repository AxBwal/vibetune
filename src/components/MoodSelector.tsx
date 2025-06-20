
import styles from "./MoodSelector.module.css";
import type { MoodType } from "../data/moodSongs";

interface Props {
  setMood: (mood: MoodType) => void;
}

const moods: MoodType[] = ["Happy", "Sad", "Angry", "Chill", "Energetic"];

export default function MoodSelector({ setMood }: Props) {
  return (
    <div className={styles.buttonContainer}>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => setMood(mood)}
          className={styles.moodButton}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}
