function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
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
