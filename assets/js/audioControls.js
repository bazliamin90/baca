const audios = document.querySelectorAll('.myAudio');
const playPauseBtns = document.querySelectorAll('.playPauseBtn');

function updateButtonGradient(audio, playPauseBtn) {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const percentage = (currentTime / duration) * 100;
    playPauseBtn.style.background = `linear-gradient(to right, black ${percentage}%, #f6ff42 ${percentage}%)`;
}

playPauseBtns.forEach((btn, index) => {
    const audio = audios[index];

    btn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            btn.textContent = '𝚙𝚊𝚞𝚜𝚎';
            btn.classList.add('playing');
        } else {
            audio.pause();
            btn.textContent = '𝚙𝚕𝚊𝚢';
            btn.classList.remove('playing');
        }
    });

    audio.addEventListener('timeupdate', () => updateButtonGradient(audio, btn));

    audio.addEventListener('ended', function() {
        btn.textContent = '𝚙𝚕𝚊𝚢';
        btn.classList.remove('playing');
        btn.style.background = `linear-gradient(to right, blue 0%, #f6ff42 0%)`;
    });
});
