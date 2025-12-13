document.addEventListener("DOMContentLoaded", () => {

  const players = document.querySelectorAll(".audio-player");

  players.forEach(player => {

    const audio   = player.querySelector("audio");
    const playBtn = player.querySelector(".playBtn");
    const stopBtn = player.querySelector(".stopBtn");
    const loopBtn = player.querySelector(".loopBtn");
    const timeEl  = player.querySelector(".time");
    const progress = player.querySelector(".progress");

    function formatTime(sec) {
      if (isNaN(sec)) return "0:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    }

    // ▶ Play / Pause (only one audio at a time)
    playBtn.addEventListener("click", () => {

      document.querySelectorAll(".audio-player audio").forEach(other => {
        if (other !== audio) {
          other.pause();
          other.currentTime = 0;

          const p = other.closest(".audio-player");
          if (p) p.querySelector(".playBtn").textContent = "▶";
        }
      });

      if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
      } else {
        audio.pause();
        playBtn.textContent = "▶";
      }
    });

    // ⏹ Stop
    stopBtn.addEventListener("click", () => {
      audio.pause();
      audio.currentTime = 0;
      playBtn.textContent = "▶";
    });

    // 🔁 Loop toggle
    loopBtn.addEventListener("click", () => {
      audio.loop = !audio.loop;
      loopBtn.classList.toggle("active", audio.loop);
    });

    // ⏱ Time update
    audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration)) {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
  }

  timeEl.textContent =
    `${formatTime(audio.currentTime)}/${formatTime(audio.duration)}`;
});

    // ⏱ Seek audio
    progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  progress.value = 0;
  playBtn.textContent = "▶";
});

audio.addEventListener("ended", () => {
  progress.value = 0;
  playBtn.textContent = "▶";
});

    // Reset UI on end
    audio.addEventListener("ended", () => {
      playBtn.textContent = "▶";
    });

  });

});
