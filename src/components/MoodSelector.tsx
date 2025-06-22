import styles from "./MoodSelector.module.css";
import type { MoodType } from "../data/moodSongs";
import { useState } from "react";

interface Props {
  setMood: (mood: MoodType) => void;
}

const moods: MoodType[] = ["Happy", "Sad", "Angry", "Chill", "Energetic","Special"];

export default function MoodSelector({ setMood }: Props) {
  const [activemood, setActiveMood] = useState<MoodType | null>(null); 

  function MoodClicker(mood: MoodType) { 
    setMood(mood);
    setActiveMood(mood);
  }

  return (
    <div className={styles.buttonContainer}>
      {moods.map((mood) => (
        <button
          key={mood}
          onClick={() => MoodClicker(mood)}
          className={`${styles.moodButton} ${activemood === mood ? styles.active : ''}`}
        >
          {mood}
        </button>
      ))}
    </div>
  );
}