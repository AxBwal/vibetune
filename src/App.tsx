import { useEffect, useState } from "react";
import MoodSelector from "./components/MoodSelector";
import { moodSongs, type MoodType } from "./data/moodSongs";
import { getMoodTheme } from "../utils/getMoodTheme";
import styles from "./App.module.css";

function App() {
  const [mood, setMood] = useState<MoodType | null>(null);
  const [selectedSong, setSelectedSong] = useState<string | null>(null);

  function randomizeSongForMood(selectedMood: MoodType) {
    if (!selectedMood) return; // Should not happen if called correctly
    const songs = moodSongs[selectedMood];
    const randomIndex = Math.floor(Math.random() * songs.length);
    const newSong = songs[randomIndex];
    setSelectedSong(newSong);
  }

   const handleMoodSelect = (selectedMood: MoodType) => {
    setMood(selectedMood);
    randomizeSongForMood(selectedMood);
  };

  return (
    <div className={`${styles.appWrapper} ${getMoodTheme(mood)}`}>
      <h1 className={styles.heading}>🎵 VibeTune</h1>
      <MoodSelector setMood={handleMoodSelect} />
      {mood && (
        <>
          <h2 className={styles.subHeading}>Current Mood: {mood}</h2>
          <div style={{ marginTop: "24px" }}>
            <iframe
              width="560"
              height="315"
              src={selectedSong ?? undefined}
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
