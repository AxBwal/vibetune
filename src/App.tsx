import { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import { moodSongs, type MoodType } from "./data/moodSongs";
import { getMoodTheme } from "../utils/getMoodTheme";
import styles from "./App.module.css";
import MoodChip from "./components/MoodChip";

function App() {
  const [mood, setMood] = useState<MoodType | null>(null);
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
    const [moodHistory, setMoodHistory] = useState<MoodType[]>([]);

  function randomizeSongForMood(selectedMood: MoodType) {
    if (!selectedMood) return; 
    const songs = moodSongs[selectedMood];
    const randomIndex = Math.floor(Math.random() * songs.length);
    const newSong = songs[randomIndex];
    setSelectedSong(newSong);
  }

  const handleMoodSelect = (selectedMood: MoodType) => {
    setMood(selectedMood);
    randomizeSongForMood(selectedMood);
    setMoodHistory((prevHistory) => [...prevHistory,selectedMood])
  };

  return (
    <div className={`${styles.appWrapper} ${getMoodTheme(mood)}`}>
      <h1 className={styles.heading}>🎵 VibeTune</h1>
      <MoodSelector setMood={handleMoodSelect} />
     <div className={styles.moodChipContainer}>
        {moodHistory.map((pastMood, index) => (
          <MoodChip key={index} mood={pastMood} />
        ))}
      </div>
      {mood && (
        <>
          <h2 className={styles.subHeading}>Current Mood: {mood}</h2>
          <div className={styles.playerCard}>
            <iframe
              width="100%"
              height="400"
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
