import type { MoodType } from "../src/data/moodSongs";

export function getMoodTheme(mood: MoodType | null): string {
  switch (mood) {
    case "Happy":
      return "happy-theme";
    case "Sad":
      return "sad-theme";
    case "Angry":
      return "angry-theme";
    case "Chill":
      return "chill-theme";
    case "Energetic":
      return "energetic-theme";
    default:
      return "default-theme";
  }
}
