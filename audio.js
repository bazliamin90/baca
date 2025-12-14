document.addEventListener("DOMContentLoaded", () => {

  const players = document.querySelectorAll(".audio-player");

  players.forEach(player => {

    /* ===============================
       1️⃣ Build player HTML dynamically
       =============================== */
    const src = player.dataset.src;

    player.innerHTML = `
      <audio src="${src}"></audio>
      <div class="controls">
        <button class="playBtn">▶</button>
        <button class="stopBtn">⏹</button>
        <button class="loopBtn">∞</button>
        <span class="time">0:00/0:00</span>
      </div>
      <input type="range" class="progress" min="0" value="0" step="0.1">
    `;

    /* ===============================
       2️⃣ Get elements
       =============================== */
    const audio    = player.querySelector("audio");
    const playBtn  = player.querySelector(".playBtn");
    const stopBtn  = player.querySelector(".stopBtn");
    const loopBtn  = player.querySelector(".loopBtn");
    const timeEl   = player.querySelector(".time");
    const progress = player.querySelector(".progress");

    function formatTime(sec) {
      if (isNaN(sec)) return "0:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    }

    /* ===============================
       ▶ Play / Pause (ONE at a time)
       =============================== */
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

    /* ===============================
       ⏹ Stop
       =============================== */
    stopBtn.addEventListener("click", () => {
      audio.pause();
      audio.currentTime = 0;
      progress.value = 0;
      playBtn.textContent = "▶";
    });

    /* ===============================
       🔁 Loop toggle
       =============================== */
    loopBtn.addEventListener("click", () => {
      audio.loop = !audio.loop;
      loopBtn.classList.toggle("active", audio.loop);
    });

    /* ===============================
       ⏱ Metadata loaded
       =============================== */
    audio.addEventListener("loadedmetadata", () => {
      progress.max = audio.duration;
      timeEl.textContent =
        `0:00/${formatTime(audio.duration)}`;
    });

    /* ===============================
       ⏱ Time update
       =============================== */
    audio.addEventListener("timeupdate", () => {
      if (!isNaN(audio.duration)) {
        progress.value = audio.currentTime;
      }

      timeEl.textContent =
        `${formatTime(audio.currentTime)}/${formatTime(audio.duration)}`;
    });

    /* ===============================
       ⏱ Seek audio
       =============================== */
    progress.addEventListener("input", () => {
      audio.currentTime = progress.value;
    });

    /* ===============================
       🔚 Reset UI on end
       =============================== */
    audio.addEventListener("ended", () => {
      progress.value = 0;
      playBtn.textContent = "▶";
    });

  });

});
