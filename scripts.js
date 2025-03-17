// Show Surprise Message
function showMessage() {
    document.getElementById("hidden-message").style.display = "block";
}

// Generate Floating Hearts
function generateHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.querySelector(".floating-hearts").appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 3 + "s";

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate Hearts Every 500ms
setInterval(generateHeart, 500);
document.addEventListener("mousemove", function(e) {
    let trail = document.getElementById("cursor-trail");
    trail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Cursor Heart Effect
document.addEventListener("mousemove", function(e) {
    let heartCursor = document.getElementById("cursor-heart");
    heartCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Floating Hearts on Click
document.addEventListener("click", function(e) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    setTimeout(() => {
        heart.remove();
    }, 1500);
});

// Generate Falling Hearts
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Create a heart every 500ms
setInterval(createFallingHeart, 500);

// Pop-up Hearts on Click
document.addEventListener("click", function(e) {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("popup-heart");
    document.body.appendChild(heart);

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
// Cursor Heart Effect
document.addEventListener("mousemove", function(e) {
    let heartCursor = document.getElementById("cursor-heart");
    heartCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    // Create Floating Mini Hearts
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart-trail");
    document.body.appendChild(heart);

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
// Get the cat image
const cat = document.getElementById("cat");

// Make the cat follow the cursor
document.addEventListener("mousemove", (e) => {
    setTimeout(() => {
        cat.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, 50);  // Small delay for smooth effect
});
