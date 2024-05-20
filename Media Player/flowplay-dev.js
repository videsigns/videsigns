function pauseAllPlayers() {
    // Get all audio elements with the data attribute 'audio-wrapper'
    const audioWrappers = document.querySelectorAll('[f-data-audio="wrapper"]');

    audioWrappers.forEach((wrapper) => {
        // Check if the wrapper contains an audio element
        const audio = wrapper.querySelector('[f-data-audio="audio-element"]');
        if (audio instanceof HTMLAudioElement) {
            // Pause the audio element
            audio.pause();
        }
    });

    // Show play icons and buttons for all audio elements
    $('[f-data-audio="play-icon"]').show();
    $('[f-data-audio="play-button"]').show();
    $('[f-data-audio="pause-icon"]').hide();
    $('[f-data-audio="pause-button"]').hide();
}

// Create a custom event for input range slider
const rangeSlider = new Event("input", {
    bubbles: true,
    cancelable: true,
});

let currentAudio = null;

///////////////////////////////HTML AUDIO///////////////////////////////////
function initializeAudioPlayer(audio) {
    // Get DOM elements related to the audio player
    const wrapper = audio.closest('[f-data-audio="wrapper"]');
    const playBtn = wrapper.querySelector('[f-data-audio="play-button"]');
    const pauseBtn = wrapper.querySelector('[f-data-audio="pause-button"]');
    const forwardBtn = wrapper.querySelector('[f-data-audio="forward-button"]');
    const backwardBtn = wrapper.querySelector('[f-data-audio="backward-button"]');
    const replayBtn = wrapper.querySelector('[f-data-audio="replay-button"]');
    const pauseIcon = wrapper.querySelector('[f-data-audio="pause-icon"]');
    const playIcon = wrapper.querySelector('[f-data-audio="play-icon"]');
    const progress = wrapper.querySelector('[f-data-audio="progress"]');
    const progressBar = wrapper.querySelector('[f-data-audio="progress-bar"]');
    const audioLoading = wrapper.querySelector('[f-data-audio="loading"]');
    const fullscreenBtn = wrapper.querySelector('[f-data-audio="fullscreen"]');
    const minimizeBtn = wrapper.querySelector('[f-data-audio="minimize"]');
    const currentTime = wrapper.querySelector('[f-data-audio="current-time"]');
    const duration = wrapper.querySelector('[f-data-audio="duration"]');
    const volumeSlider = wrapper.querySelector('[f-data-audio="volume-slider"]');
    const volumeBtn = wrapper.querySelector('[f-data-audio="volume-button"]');
    const speedText = wrapper.querySelector('[f-data-audio="speed-text"]');
    const playbackSpeedBtn = wrapper.querySelectorAll("[f-data-audio-speed]");
    const showPause = wrapper.querySelectorAll('[f-data-audio="show-pause"]');
    const showPlay = wrapper.querySelectorAll('[f-data-audio="show-play"]');

    // Other variables and functions related to audio playback
    let isPlaying = false;
    let isDragging = false;
    let lastVol = 1;
    const forwardTime = 10; // Amount of time to forward (in seconds)
    const backwardTime = 10; // Amount of time to backward (in seconds)

    // Function to format time in MM:SS format
    function formatTime(time) {
        const minutes = Math.floor(time / 60).toString().padStart(2, "0");
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    // Function to update UI when audio is playing
    function playAudioUi() {
        if (playBtn) {
            playBtn.style.display = "none";
        }
        if (playIcon) {
            playIcon.style.display = "none";
        }
        if (pauseIcon) {
            pauseIcon.style.display = "";
        }
        if (pauseBtn) {
            pauseBtn.style.display = "";
        }
        if (replayBtn) {
            replayBtn.style.display = "none";
        }
        // Hide play icons and buttons, show pause icons and buttons
        showPlay.forEach((el) => {
            el.classList.remove("show");
            el.classList.add("hide");
        });
        showPause.forEach((el) => {
            el.classList.add("show");
            el.classList.remove("hide");
        });
    }

    // Function to update UI when audio is paused
    function pauseAudioUi() {
        if (playBtn) {
            playBtn.style.display = "";
        }
        if (playIcon) {
            playIcon.style.display = "";
        }
        if (pauseIcon) {
            pauseIcon.style.display = "none";
        }
        if (pauseBtn) {
            pauseBtn.style.display = "none";
        }
        // Show play icons and buttons, hide pause icons and buttons
        showPause.forEach((el) => {
            el.classList.remove("show");
            el.classList.add("hide");
        });
        showPlay.forEach((el) => {
            el.classList.add("show");
            el.classList.remove("hide");
        });
    }

    function defaultBehavior() {
        if (pauseIcon) {
            pauseIcon.style.display = "none";
        }
        if (pauseBtn) {
            pauseBtn.style.display = "none";
        }
        if (minimizeBtn) {
            minimizeBtn.style.display = "none";
        }
        if (replayBtn) {
            replayBtn.style.display = "none";
        }
        if (duration) {
            duration.textContent = formatTime(audio.duration);
        }
        if (volumeSlider) {
            audio.volume = volumeSlider ? volumeSlider.value : 1;
        }
        showPause.forEach((el) => {
            el.classList.add("show");
            el.classList.remove("hide");
        });
        showPlay.forEach((el) => {
            el.classList.remove("show");
            el.classList.add("hide");
        });

        if (audio.autoplay) {
            playAudioUi()
        }

        if (audio.muted) {
            handleVolumeAudio()
        }
    }

    // Function to handle time update of audio
    function handleTimeUpdate() {
        // Update progress bar and current time
        const track = (audio.currentTime / audio.duration) * 100;
        if (progress) {
            progress.style.width = `${track}%`;
        }
        if (currentTime) {
            currentTime.textContent = formatTime(audio.currentTime);
        }
    }

    // Function to handle progress bar click
    function handleProgressBarClick(e) {
        // Calculate clicked time and update audio current time
        const x = e.pageX - progressBar.getBoundingClientRect().left;
        const clickedTime = (x * audio.duration) / progressBar.offsetWidth;
        audio.currentTime = clickedTime;
        handleTimeUpdate();
    }

    // Function to handle volume slider input
    function handleVolumeSliderInput() {
        // Update audio volume based on volume slider value
        audio.volume = volumeSlider.value;
        updateVolumeSlider();
    }

    // Function to handle volume button click
    function handleVolumeAudio() {
        // Toggle mute/unmute and update volume button opacity
        if (audio.volume > 0) {
            lastVol = audio.volume;
            volumeSlider.value = 0;
            audio.volume = 0;
            volumeBtn.style.opacity = 0.5;
        } else {
            volumeSlider.value = lastVol;
            audio.volume = lastVol;
            volumeBtn.style.opacity = 1;
        }
    }

    // Function to update volume slider based on audio volume
    function updateVolumeSlider() {
        volumeSlider.value = audio.volume;
        if (audio.volume <= 0) {
            volumeBtn.style.opacity = 0.5;
        } else {
            lastVol = audio.volume;
            volumeBtn.style.opacity = 1;
        }
    }

    function forward() {
        audio.currentTime += forwardTime;
    }

    function backward() {
        audio.currentTime -= backwardTime;
    }

    function handlePlaybackSpeed(speed) {
        // console.log(Number(speed));
        audio.playbackRate = speed;

        if (speedText) {
            if (Number(speed) === 1) {
                speedText.textContent = "Normal";
            } else {
                speedText.textContent = speed + "x";
            }
        }
    }

    // Event listeners for play, pause, volume, and progress bar
    if (playBtn) {
        playBtn.addEventListener("click", () => {
            pauseAllPlayers();
            audio.play();
        });
    }

    if (pauseBtn) {
        pauseBtn.addEventListener("click", () => {
            audio.pause();
        });
    }

    if (progressBar) {
        progressBar.addEventListener("click", handleProgressBarClick);
    }

    if (volumeSlider) {
        volumeSlider.addEventListener("input", handleVolumeSliderInput);
        volumeSlider.addEventListener("click", handleVolumeSliderInput);
    }

    if (volumeBtn) {
        volumeBtn.addEventListener("click", handleVolumeAudio);
    }

    if (forwardBtn) {
        forwardBtn.addEventListener("click", forward);
    }

    if (backwardBtn) {
        backwardBtn.addEventListener("click", backward);
    }

    if (playbackSpeedBtn) {
        playbackSpeedBtn.forEach(function(button) {
            button.addEventListener("click", function() {
                var speed = this.getAttribute("f-data-audio-speed");
                // Do something with the speed value
                // console.log("Clicked on button with speed:", speed);
                handlePlaybackSpeed(speed);
            });
        });
    }

    // Event listener for time update to update UI
    audio.addEventListener("timeupdate", handleTimeUpdate);

    // Event listener for audio playback to update UI accordingly
    audio.addEventListener("play", () => {
        playAudioUi();
    });

    audio.addEventListener("pause", () => {
        pauseAudioUi();
    });

    // Event listener for loaded metadata to update duration
    audio.addEventListener("loadedmetadata", () => {
        if (duration) {
            duration.textContent = formatTime(audio.duration);
        }
    });

    defaultBehavior()
}

// Initialize audio players
const HTMLaudios = document.querySelectorAll('[f-data-audio="audio-element"]');
HTMLaudios.forEach((audio) => {
    if (audio.closest('[f-data-audio="wrapper"]')) {
        initializeAudioPlayer(audio);
        console.log('youtubeScript')
    }
});
////////////////////////////END OF HTML AUDIO////////////////////////////////

// Function to update the counter
function updateCounter(newCounterValue) {
    // Get the current date
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth(); // Get the current month

    // Encode the counter key and the current month value in Base64
    var encodedCounterKey = btoa("flowplaycounter");
    var encodedMonth = btoa(currentMonth.toString());

    // Check if the counter cookie exists
    var counterCookie = getCookie(encodedCounterKey);

    // If the counter cookie doesn't exist or it's for a different month, update the counter
    if (!counterCookie || counterCookie !== encodedMonth) {
        //Send a POST request to update the counter
        $.post('https://videsigns-staging.co.uk/flowplay-counter', function(data) {
            console.log(data);
            // Store the encoded month in a cookie to mark that the counter has been updated for this month
            document.cookie = encodedCounterKey + "=" + encodedMonth;
        }).fail(function(xhr, status, error) {
            console.error('Failed to update counter:', error);
        });
    } else {
        console.log("Counter already updated for this month.");
    }
}

// Function to get a cookie by name
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// getLiveCounter();
updateCounter();