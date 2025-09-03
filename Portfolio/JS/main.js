// --- Quote of the Day ---
async function loadQuote() {
  try {
    const res = await fetch(
      "https://corsproxy.io/?" + encodeURIComponent("https://zenquotes.io/api/today")
    );
    const data = await res.json();
    document.getElementById("quote").innerText = `"${data[0].q}"`;
    document.getElementById("author").innerText = `- ${data[0].a}`;
  } catch (err) {
    document.getElementById("quote").innerText = "Could not load quote.";
    console.error(err);
  }
}
loadQuote();

// --- Slideshow ---
const images = [
  "images/picture.jpg",
  "images/desktop-background.jpg",
  "images/course-banner.jpg"
];
let currentIndex = 0;

function changeSlide() {
  const slide = document.getElementById("slide-image");
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
}

// Change image every 4 seconds
setInterval(changeSlide, 4000);
