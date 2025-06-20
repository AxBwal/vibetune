import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import { moodSongs, type MoodType } from "./data/moodSongs";
import { getMoodTheme } from "../utils/getMoodTheme";
import styles from "./App.module.css";

function App() {
  const [mood, setMood] = useState<MoodType | null>(null);

  return (
    <div className={`${styles.appWrapper} ${getMoodTheme(mood)}`}>
      <h1 className={styles.heading}>🎵 VibeTune</h1>
      <MoodSelector setMood={setMood} />
      {mood && (
        <>
          <h2 className={styles.subHeading}>Current Mood: {mood}</h2>
          <div style={{ marginTop: "24px" }}>
            <iframe
              width="560"
              height="315"
              src={moodSongs[mood][0]}
              title="Music Player"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
