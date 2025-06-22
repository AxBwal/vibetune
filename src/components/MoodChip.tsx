import React from "react"; // It's good practice to import React
import styles from "./MoodChip.module.css"; // Assuming you'll create a CSS module for MoodChip

interface MoodChipProps {
  mood: string; // The type of mood (e.g., "Happy", "Sad")
}

const MoodChip: React.FC<MoodChipProps> = ({ mood }) => {
  return (
  <div className={`${styles.moodChip} ${styles[mood.toLowerCase()]}`}>
      <span>{mood}</span>
    </div>
  );
};

export default MoodChip;