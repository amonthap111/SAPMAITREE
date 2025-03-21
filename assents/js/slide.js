// script.js
let currentIndex = 0;
const reviews = document.querySelector('.reviews');
const totalReviews = document.querySelectorAll('.review').length;

function moveSlide(direction) {
  currentIndex += direction;
  
  if (currentIndex < 0) {
    currentIndex = totalReviews - 1; // ไปที่รีวิวสุดท้ายเมื่อเลื่อนเกินไป
  } else if (currentIndex >= totalReviews) {
    currentIndex = 0; // ไปที่รีวิวแรกเมื่อเลื่อนเกินไป
  }

  const offset = -currentIndex * 100; // คำนวณการเลื่อนในแนวนอน
  reviews.style.transform = `translateX(${offset}%)`;
}

document.getElementById("menuToggle").addEventListener("click", function() {
  var mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none"; // ซ่อนเมนู
  } else {
      mobileMenu.style.display = "flex"; // แสดงเมนู
  }
});

