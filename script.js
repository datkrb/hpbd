document.getElementById("revealBtn").addEventListener("click", function () {
  const messageElement = document.getElementById("message");
  // Thêm hoặc ẩn lời chúc khi nút được nhấn
  if (messageElement.style.display === "none") {
    messageElement.style.display = "block";
  } else {
    messageElement.style.display = "none";
  }
});
