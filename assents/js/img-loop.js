// ฟังก์ชันเพื่อดึงรูปภาพจากโฟลเดอร์และแสดง
window.onload = function() {
    const imageGallery = document.getElementById('imageGallery');
    
    // ลูปผ่านหมายเลข 1 ถึง 50 และสร้างชื่อไฟล์รูปภาพ
    for (let i = 1; i <= 50; i++) {
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');
      
      const imgElement = document.createElement('img');
      imgElement.src = `../assents/IMG/all-img/${i}.jpg`; // รูปภาพจาก 1.jpg ถึง 50.jpg
      imgElement.alt = `Image ${i}`;
  
      imageContainer.appendChild(imgElement);
      imageGallery.appendChild(imageContainer);
    }
  };
  