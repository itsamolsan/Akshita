document.addEventListener("DOMContentLoaded", function() {
    const teddies = document.querySelectorAll(".teddy");

    function moveTeddy(teddy) {
        let x = Math.random() * window.innerWidth * 0.8;
        let y = Math.random() * window.innerHeight * 0.8;
        teddy.style.transform = `translate(${x}px, ${y}px)`;
    }

    setInterval(() => {
        teddies.forEach(teddy => {
            moveTeddy(teddy);
        });
    }, 5000);
});
const teddyBearCount = 10; // Number of teddy bears to create

function createTeddyBear() {
    const teddyBear = document.createElement('img');
    teddyBear.src = 'images/teddy2.png','images/teddy1.png'; // Replace with a valid teddy bear image URL
    teddyBear.classList.add('teddy');
    teddyBear.style.left = Math.random() * window.innerWidth + 'px';
    teddyBear.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(teddyBear);

    // Remove teddy bear after some time
    setTimeout(() => {
        teddyBear.remove();
    }, 5000);
}

// Create multiple teddy bears
for (let i = 0; i < teddyBearCount; i++) {
    createTeddyBear();
}

// Create a new teddy bear every 2 seconds
setInterval(createTeddyBear, 2000);
document.querySelector('.profile-pic').addEventListener('click', function() {
    this.classList.toggle('frame'); // Toggle the frame class on click
});
// Select all frame options
const frameOptions = document.querySelectorAll('.frame-option');
const profilePic = document.querySelector('.profile-pic');

// Add click event to each frame option
frameOptions.forEach(frame => {
    frame.addEventListener('click', function() {
        const selectedFrame = this.getAttribute('data-frame');
        // Change the profile picture frame based on the selected frame
        profilePic.src = `${selectedFrame}.png`; // Assuming frames are named frame1.png, frame2.png, etc.
    });
});