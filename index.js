function reveal() {
    var reveals = document.querySelectorAll(".content-section");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("visible");
        } else {
            reveals[i].classList.remove("visible");
        }
    }
}

window.addEventListener("scroll", reveal);


document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById('myVideo');
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  // Adjust this value based on when you want the video to start playing
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, options);

    observer.observe(video);

    // Event listener for when the video ends
    video.addEventListener('ended', function () {
        this.currentTime = 0; // Reset video time to 0
        this.play(); // Play the video again
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var videotwo = document.getElementById('myVideotwo');
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  // Adjust this value based on when you want the video to start playing
    };

    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videotwo.play();
            } else {
                videotwo.pause();
            }
        });
    }, options);

    observer.observe(videotwo);

    // Event listener for when the video ends
    videotwo.addEventListener('ended', function () {
        this.currentTime = 0; // Reset video time to 0
        this.play(); // Play the video again
    });
});

