function pauseAllPlayers() {
    const videoWrapper = document.querySelectorAll('[f-data-video="wrapper"]');

    videoWrapper.forEach((vid) => {
        let video = vid.querySelector("video, iframe");

        if (video) {
            if (video.tagName === "VIDEO") {
                video.pause();
            } else if (video.tagName === "IFRAME") {
                // Check if it's a YouTube or Vimeo iframe
                const src = video.getAttribute("src");
                if (src) {
                    if (src.includes("youtube")) {
                        // For YouTube, post a message to pause the video
                        video.contentWindow.postMessage(
                            '{"event":"command","func":"pauseVideo","args":""}',
                            "*"
                        );
                    } else if (src.includes("vimeo")) {
                        // For Vimeo, post a message to pause the video
                        video.contentWindow.postMessage('{"method":"pause"}', "*");
                    }
                }
            }
        }
    });

    $('[f-data-video="play-icon"]').show();
    $('[f-data-video="play-button"]').show();
    $('[f-data-video="pause-icon"]').hide();
    $('[f-data-video="pause-button"]').hide();
}

const rangeSlider = new Event("input", {
    bubbles: true,
    cancelable: true,
});

let currentVideo = null;

function initializeVideoPlayer(video) {
    // Get DOM elements
    const wrapper = video.closest('[f-data-video="wrapper"]');
    const posterBtn = wrapper.querySelector('[f-data-video="poster-button"]');
    const poster = wrapper.querySelector('[f-data-video="overlay"]');
    const posterBg = wrapper.querySelector('[f-data-video="poster"]');
    const keyboardShortcuts = wrapper.getAttribute("f-data-video-shortcut");
    const playBtn = wrapper.querySelector('[f-data-video="play-button"]');
    const pauseBtn = wrapper.querySelector('[f-data-video="pause-button"]');
    const forwardBtn = wrapper.querySelector('[f-data-video="forward-button"]');
    const backwardBtn = wrapper.querySelector('[f-data-video="backward-button"]');
    const replayBtn = wrapper.querySelector('[f-data-video="replay-button"]');
    const pauseIcon = wrapper.querySelector('[f-data-video="pause-icon"]');
    const playIcon = wrapper.querySelector('[f-data-video="play-icon"]');
    const progress = wrapper.querySelector('[f-data-video="progress"]');
    const progressBar = wrapper.querySelector('[f-data-video="progress-bar"]');
    const videoLoading = wrapper.querySelector('[f-data-video="loading"]');
    const fullscreenBtn = wrapper.querySelector('[f-data-video="fullscreen"]');
    const minimizeBtn = wrapper.querySelector('[f-data-video="minimize"]');
    const currentTime = wrapper.querySelector('[f-data-video="current-time"]');
    const duration = wrapper.querySelector('[f-data-video="duration"]');
    const volumeSlider = wrapper.querySelector('[f-data-video="volume-slider"]');
    const volumeBtn = wrapper.querySelector('[f-data-video="volume-button"]');
    const playbackSpeedBtn = wrapper.querySelectorAll("[f-data-video-speed]");
    const vidQualityBtn = wrapper.querySelectorAll("[f-data-video-quality]");
    const defaultQuality = wrapper.querySelector('[f-data-quality="default"]');
    const preview = wrapper.querySelector('[f-data-video="video-preview"]');
    const qualityText = wrapper.querySelector('[f-data-video="quality-text"]');
    const speedText = wrapper.querySelector('[f-data-video="speed-text"]');
    const previewWrapper = wrapper.querySelector(
        '[f-data-video="preview-wrapper"]'
    );
    const posterClickOnce = wrapper.querySelector("[f-data-poster-once]") ?
        wrapper
        .querySelector("[f-data-poster-once]")
        .getAttribute("f-data-poster-once") :
        false;
    const loader = wrapper.querySelector('[f-data-video="loader"]');
    const showPause = wrapper.querySelectorAll('[f-data-video="show-pause"]');
    const showPlay = wrapper.querySelectorAll('[f-data-video="show-play"]');
    // console.log("poster once", posterClickOnce);
    //variables
    let track = 0;
    let lastVol = 0;
    const forwardTime = 10; // Amount of time to forward (in seconds)
    const backwardTime = 10; // Amount of time to backward (in seconds)
    let curTime = 0;
    let isDragging = false;
    let posterClicked = false;
    let isPlaying = false;
    const previewOffsetLeft = wrapper.querySelector(
            "[f-data-video-preview-offset-left]"
        ) ?
        Number(
            wrapper
            .querySelector("[f-data-video-preview-offset-left]")
            .getAttribute("f-data-video-preview-offset-left")
        ) :
        "";

    function formatTime(time) {
        // Format time in MM:SS format
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    function playVideoUi() {
        if (playBtn) {
            playBtn.style.display = "none";
        }
        if (playIcon) {
            playIcon.style.display = "none";
        }
        if (pauseIcon) {
            pauseIcon.style.display = "";
        }
        // if (posterBtn) {
        //   posterBtn.style.opacity = "0";
        // }
        if (pauseBtn) {
            pauseBtn.style.display = "";
        }
        if (replayBtn) {
            replayBtn.style.display = "none";
        }
        if (posterBg) {
            if (posterClickOnce === "true") {
                if (!posterClicked) {
                    posterBg.style.display = "none";
                    posterClicked = true;
                }
            } else {
                posterBg.style.display = "none";
            }
        }
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
            duration.textContent = formatTime(video.duration);
        }
        if (previewWrapper) {
            previewWrapper.style.opacity = 0;
        }
        if (volumeSlider) {
            video.volume = volumeSlider ? volumeSlider.value : 1;
        }
        if (loader) {
            loader.style.display = "none";
        }
        showPause.forEach((el) => {
            el.classList.add("show");
            el.classList.remove("hide");
        });
        showPlay.forEach((el) => {
            el.classList.remove("show");
            el.classList.add("hide");
        });
        video.addEventListener("loadedmetadata", function() {
            if (!video.paused && video.readyState === 4) {
                playVideoUi();
            }
        });
        if (video.autoplay) {
            playVideoUi()
        }

        if (video.muted) {
            handleVolumeVideo()
        }
    }

    function playVideo() {
        // Play the video and update UI
        pauseAllPlayers();
        video.play();
        currentVideo = video;
        // console.log("current video:", currentVideo);

        // console.log(currentVideo === video);
        playVideoUi();
    }

    function pauseVideo() {
        // Pause the video and update UI
        video.pause();
        currentVideo = video;
        // console.log("current video:", currentVideo);

        if (playBtn) {
            playBtn.style.display = "";
        }
        if (playIcon) {
            playIcon.style.display = "";
        }
        if (pauseIcon) {
            pauseIcon.style.display = "none";
        }
        // if (posterBtn) {
        //   posterBtn.style.opacity = "1";
        // }
        if (pauseBtn) {
            pauseBtn.style.display = "none";
        }
        if (posterBg) {
            if (posterClickOnce) {
                if (!posterClicked) {
                    posterBg.style.display = "";
                }
            } else {
                posterBg.style.display = "";
            }
        }
        showPause.forEach((el) => {
            el.classList.add("show");
            el.classList.remove("hide");
        });
        showPlay.forEach((el) => {
            el.classList.remove("show");
            el.classList.add("hide");
        });
    }

    video.addEventListener("loadstart", () => {
        if (loader) {
            loader.style.display = "";
        }
    });

    video.addEventListener("canplaythrough", () => {
        if (loader) {
            loader.style.display = "none";
        }
    });

    function forward() {
        video.currentTime += forwardTime;
    }

    function backward() {
        video.currentTime -= backwardTime;
    }

    function toggleFullscreen() {
        // Toggle fullscreen mode
        if (!document.fullscreenElement) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                // Chrome, Safari, and Opera
                video.webkitRequestFullscreen();
            }
        } else {
            document.exitFullscreen();
        }
    }

    function handlePosterClick() {
        // Handle click on poster to play/pause
        if (video.paused) {
            playVideo();
        } else {
            pauseVideo();
        }
    }

    function handleReplayClick() {
        // Handle click on replay button
        video.currentTime = 0;
        playVideo();
    }

    function updateLoadingProgress(e) {
        if (video.buffered.length > 0) {
            const bufferedEnd = e.target.buffered.end(e.target.buffered.length -
                1); // Get the end time of the buffered range
            const bufferedPercentage = (bufferedEnd / video.duration) * 100;

            if (videoLoading) {
                videoLoading.style.width = `${bufferedPercentage}%`;
            }
        }
    }

    function handleProgressBarClick(e) {
        // Handle click on progress bar to seek
        const x = e.pageX - progressBar.getBoundingClientRect().left;
        const clickedTime = (x * video.duration) / progressBar.offsetWidth;

        video.currentTime = clickedTime;
        handleTimeUpdate();
        //updateLoadingProgress();
    }

    if (progressBar) {
        isDragging = false;
        let isThrottled = false;

        const throttleTime = 50; // Adjust this value for smoother or faster tracking

        function throttle(callback, delay) {
            if (!isThrottled) {
                callback();
                isThrottled = true;
                setTimeout(() => {
                    isThrottled = false;
                }, delay);
            }
        }

        function handleProgressBarStart(event) {
            event.preventDefault();
            // Pause video or other actions if needed.
            isDragging = true;
            const eventObject = isTouchDevice ? event.touches[0] : event;
            handleProgressBarClick(eventObject);
        }

        function handleProgressBarMove(event) {
            event.preventDefault();
            if (isDragging) {
                const eventObject = isTouchDevice ? event.touches[0] : event;
                handleProgressBarClick(eventObject);
            }
        }

        function handleProgressBarEnd() {
            isDragging = false;
        }

        const isTouchDevice = "ontouchstart" in document.documentElement;

        if (isTouchDevice) {
            progressBar.addEventListener("touchstart", handleProgressBarStart);
            progressBar.addEventListener("touchmove", handleProgressBarMove);
            progressBar.addEventListener("touchend", handleProgressBarEnd);
        } else {
            progressBar.addEventListener("mousedown", handleProgressBarStart);
            wrapper.addEventListener("mousemove", handleProgressBarMove);
            wrapper.addEventListener("mouseup", handleProgressBarEnd);
        }
    }

    function handlePlaybackSpeed(speed) {
        // console.log(Number(speed));
        video.playbackRate = speed;

        if (speedText) {
            if (Number(speed) === 1) {
                speedText.textContent = "Normal";
            } else {
                speedText.textContent = speed + "x";
            }
        }
    }

    function handleVideoQuality(quality) {
        curTime = video.currentTime;
        if (qualityText) {
            qualityText.textContent = quality;
        }
        // Find the corresponding source with the selected quality
        var selectedSource = video.querySelector(
            'source[f-data-video-src-quality="' + quality + '"]'
        );

        // Update the video source and reload
        video.src = selectedSource.src;
        video.load();
        video.currentTime = curTime;
        //playVideo();
    }

    function handleTimeUpdate() {
        // Update progress bar, current time, and handle video end
        track = (video.currentTime / video.duration) * 100;
        if (progress) {
            progress.style.width = `${track}%`;
        }
        if (currentTime) {
            currentTime.textContent = formatTime(video.currentTime);
        }
        if (video.currentTime >= video.duration) {
            if (replayBtn) {
                replayBtn.style.display = "";
            }
            pauseVideo();
        }
    }

    video.addEventListener("loadedmetadata", () => {
        // Update duration once metadata is loaded
        if (duration) {
            duration.textContent = formatTime(video.duration);
        }
    });

    function handleVolumeSliderInput() {
        // Handle volume slider input
        if (volumeSlider) {
            if (video.muted) {
                video.muted = false;
            }
            video.volume = volumeSlider.value
        }
        updateVolumeSlider()
    }

    function handleVolumeVideo() {
        if (volumeSlider) {
            if (video.volume > 0) {
                lastVol = video.volume
                volumeSlider.value = 0;
                video.volume = 0;
                volumeBtn.style.opacity = 0.5;
            } else {
                volumeSlider.value = lastVol;
                video.volume = lastVol;
                volumeBtn.style.opacity = 1;
            }
        }
    }

    function updateVolumeSlider() {
        if (volumeSlider) {
            volumeSlider.value = video.volume;
            if (video.volume <= 0) {
                volumeBtn.style.opacity = 0.5;
            } else {
                lastVol = video.volume
                volumeBtn.style.opacity = 1;
            }
        }
    }

    // Keyboard controls
    function handleKeyboardControls(event) {
        // console.log(video);
        if (keyboardShortcuts) {
            const key = event.key.toLowerCase();
            if (key === " " || key === "arrowdown" || key === "arrowup") {
                event.preventDefault();
            }
            // console.log(video === currentVideo, video, currentVideo);
            // currentVideo.pause();
            // video = currentVideo;
            if (video === currentVideo) {
                switch (key) {
                    case "0":
                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                    case "9":
                        {
                            const percentage = parseInt(key) * 10;
                            const seekTime = (percentage / 100) * video.duration;
                            video.currentTime = seekTime;
                            break;
                        }
                    case " ":
                        video.paused ? playVideo() : pauseVideo();
                        break; // Spacebar
                    case "k": // K
                        video.paused ? playVideo() : pauseVideo();
                        break;
                    case "arrowleft": // Left arrow
                        backward();
                        break;
                    case "arrowright": // Right arrow
                        forward();
                        break;
                    case "arrowup": // Up arrow
                        if (video.volume !== 1) {
                            video.volume += 0.1;
                            updateVolumeSlider(); // Add this line to update the volume slider
                        }
                        break;
                    case "arrowdown": // Down arrow
                        if (video.volume !== 0) {
                            video.volume -= 0.1;
                            updateVolumeSlider(); // Add this line to update the volume slider
                        }
                        break;
                    case "m": // M
                        video.muted = !video.muted;
                        break;
                    case "f": // F
                        toggleFullscreen();
                        break;
                    case "l": // L
                        video.loop = !video.loop;
                        break;
                }
            }
        }
    }

    // New function to handle video preview on progress bar hover
    function handleProgressBarHover(e) {
        if (preview) {
            const x = e.pageX - progressBar.getBoundingClientRect().left;
            const hoveredTime = (x * video.duration) / progressBar.offsetWidth;
            preview.currentTime = hoveredTime;

            // Set the preview div to follow the scrolled progress bar
            const progressBarWidth = progressBar.offsetWidth;
            const scrolledX =
                (hoveredTime / video.duration) * progressBarWidth + previewOffsetLeft;
            if (previewWrapper) {
                previewWrapper.style.display = "";
                previewWrapper.style.left = `${scrolledX}px`;
                previewWrapper.style.opacity = 1;
            }
        }
    }

    function handleProgressBarHoverOut() {
        // Hide the preview when not hovering
        if (preview) {
            previewWrapper.style.display = "none";
            previewWrapper.style.opacity = 0;
        }
    }

    // Add event listeners
    if (posterBtn) {
        posterBtn.addEventListener("click", handlePosterClick);
    }
    if (playBtn) {
        playBtn.addEventListener("click", playVideo);
    }
    if (pauseBtn) {
        pauseBtn.addEventListener("click", pauseVideo);
    }
    if (forwardBtn) {
        forwardBtn.addEventListener("click", forward);
    }
    if (backwardBtn) {
        backwardBtn.addEventListener("click", backward);
    }
    if (replayBtn) {
        replayBtn.addEventListener("click", handleReplayClick);
    }
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", toggleFullscreen);
    }
    if (progressBar) {
        progressBar.addEventListener("click", handleProgressBarClick);
    }
    if (volumeSlider) {
        volumeSlider.addEventListener("input", handleVolumeSliderInput);
        volumeSlider.addEventListener("click", handleVolumeSliderInput);
        volumeSlider.addEventListener("touchstart", handleVolumeSliderInput);
    }
    if (progressBar) {
        progressBar.addEventListener("mousemove", handleProgressBarHover);
    }
    if (progressBar) {
        progressBar.addEventListener("mouseout", handleProgressBarHoverOut);
    }
    if (volumeBtn) {
        volumeBtn.addEventListener("click", handleVolumeVideo);
    }
    if (playbackSpeedBtn) {
        playbackSpeedBtn.forEach(function(button) {
            button.addEventListener("click", function() {
                var speed = this.getAttribute("f-data-video-speed");
                // Do something with the speed value
                // console.log("Clicked on button with speed:", speed);
                handlePlaybackSpeed(speed);
            });
        });
    }
    if (vidQualityBtn) {
        vidQualityBtn.forEach(function(button) {
            button.addEventListener("click", function() {
                var quality = this.getAttribute("f-data-video-quality");
                handleVideoQuality(quality);
            });
        });
    }
    if (video) {
        video.addEventListener("timeupdate", handleTimeUpdate);
    }
    if (videoLoading) {
        video.addEventListener("progress", updateLoadingProgress);
    }

    defaultBehavior();

    if (defaultQuality) {
        handleVideoQuality(defaultQuality.getAttribute("f-data-video-quality"));
    }
    document.addEventListener("keydown", handleKeyboardControls);
}

const htmlVids = document.querySelectorAll('[f-data-video="video-element"]');
const maxIterations = 2;
const ytEl = document.querySelectorAll('[f-data-video="youtube-element"]');
const vimEl = document.querySelectorAll('[f-data-video="vimeo-element"]');

if (htmlVids.length > maxIterations || vimEl.length > 0 || ytEl.length > 0) {
    htmlVids.forEach((vid, index) => {
        if (index >= maxIterations) {
            vid.parentNode.parentNode.parentNode.style.display = "none";
        }
    });
    alert(
        "You have exceeded the free plan. Kindly consider upgrading your subscription to enable the inclusion of more than five HTML videos and to utilize the functionality of both Vimeo and YouTube platforms.",
    );
}

for (let i = 0; i < Math.min(maxIterations, htmlVids.length); i++) {
    const htmlVid = htmlVids[i];
    initializeVideoPlayer(htmlVid);
}

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