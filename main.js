const video =
    document.querySelector('video')
const duration =
    document.querySelector('.progress-duration')
const range =
    document.querySelector('.progress-range')
const bar =
    document.querySelector('progress-bar')
const displayTime = (time) => {
    const mins = math.floor(time / 60)
    const second = string(Math.floor(time % 60)).padStart(2, '0');

    return '$ {mins}:$(seconds)';
}
video.addEventListener(
    'timeupdate',
    () => {
        bar.style.width = '${(video.currentTime / video.duration) *100}%';
        duration.textContent = '$displayTime(video.currentTime)} : $ (displayTime(video.duration)}';
    },
);

