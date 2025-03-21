document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar nav ul li a");

  // Өмнө нь хадгалсан ID-г авах
  const activeLink = localStorage.getItem("activeLink");

  // Хэрэв хадгалсан ID байгаа бол тухайн линкэд 'active' ангилал нэмнэ
  if (activeLink) {
    const activeElement = document.querySelector(`.sidebar nav ul li a[href="${activeLink}"]`);
    if (activeElement) {
      activeElement.classList.add("active");
    }
  }

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      // Бүх линкүүдээс 'active' классыг арилгах
      links.forEach(l => l.classList.remove("active"));

      // Дарсан линкэнд 'active' класс нэмэх
      this.classList.add("active");

      // Хадгалсан ID-г шинэчлэх
      localStorage.setItem("activeLink", this.getAttribute("href"));
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
    // Popup-ийг body-д нэмэх
    const popupHTML = `
      <div class="settingpasspop" id="password-popup" style="display: none;">
        <div class="popup-content">
          <img class="x" src="img/x.svg" id="close-popup" />
          <h2>Нууц үг өөрчлөх</h2>
          
          <input type="password" placeholder="Одоогийн нууц үг">
          
          
          <input type="password" placeholder="Шинэ нууц үг">
          
          
          <input type="password" placeholder="Шинэ нууц үгээ давтах">
          
          <button id="save-password">Хадгалах</button>
        </div>
      </div>
    `;
  
    document.body.insertAdjacentHTML("beforeend", popupHTML);
  
    // DOM-оос шинээр нэмэгдсэн popup элементүүдийг олно
    const popup = document.getElementById("password-popup");
    const openPopup = document.getElementById("change-password");
    const closePopup = document.getElementById("close-popup");
  
    // Линк дарахад popup гарч ирнэ
    openPopup.addEventListener("click", function (event) {
      event.preventDefault();
      popup.style.display = "flex";
    });
  
    // X товч дарахад popup хаагдана
    closePopup.addEventListener("click", function () {
      popup.style.display = "none";
    });
  
    // Popup гадна дарахад хаагдана
    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Popup-ийн HTML бүтэц
    const popupHTML = `
      <div class="settingtelpop" id="phone-popup" style="display: none;">
        <div class="popup-content">
          <img class="x" src="img/x.svg" id="close-phone-popup" />
          <h2>Утасны дугаар өөрчлөх</h2>
          
          <input type="text" placeholder="Шинэ утасны дугаар">
          
          <input type="text" placeholder="Шинэ утасны дугаараа давтах">
          
          <button id="save-phone">Хадгалах</button>
        </div>
      </div>
    `;
  
    // Popup-ийг body-д нэмэх
    document.body.insertAdjacentHTML("beforeend", popupHTML);
  
    // DOM-оос нэмэгдсэн элементүүдийг авах
    const popup = document.getElementById("phone-popup");
    const openPopup = document.getElementById("change-phone"); // Popup нээх товч
    const closePopup = document.getElementById("close-phone-popup");
  
    // Линк дарсан үед popup гарч ирэх
    openPopup.addEventListener("click", function (event) {
      event.preventDefault();
      popup.style.display = "flex";
    });
  
    // X товч дарсан үед popup хаагдах
    closePopup.addEventListener("click", function () {
      popup.style.display = "none";
    });
  
    // Popup-ийн гадна дарвал хаагдах
    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  
  