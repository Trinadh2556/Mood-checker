function showMood() {
  const mood = document.getElementById("moodSelect").value;
  const message = document.getElementById("message");

  const moodMessages = {
    happy: "Keep smiling! Life loves your energy 😊",
    sad: "It’s okay to feel sad. Brighter days are coming 🌤️",
    excited: "Your excitement is contagious! ✨",
    stressed: "Take a deep breath. You got this 💪"
  };

  message.textContent = moodMessages[mood] || "Please select a mood!";
}