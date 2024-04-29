function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function playVideo(videoFileName) {
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.innerHTML = `
        <video controls>
            <source src="./assest/${videoFileName}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
}
