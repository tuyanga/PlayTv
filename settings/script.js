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
  document.addEventListener("DOMContentLoaded", function () {
    // 1. Create the popup elements (same as before)
    const popup = document.createElement('div');
    popup.id = 'payment-popup';
    popup.classList.add('popup');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');

    const bagtsSection = document.createElement('section');
    bagtsSection.classList.add('bagts');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    const closeImg = document.createElement('img');
    closeImg.src = 'img/x.svg';
    closeImg.alt = 'Хаах';
    closeButton.appendChild(closeImg);

    // Package 1
    const package1 = document.createElement('article');
    package1.classList.add('package');
    const package1Img = document.createElement('img');
    package1Img.classList.add('image');
    package1Img.src = 'img/image-7.jpg';
    package1Img.alt = 'Багцын зураг';
    const package1Price = document.createElement('p');
    package1Price.classList.add('price');
    package1Price.textContent = '9900₮ / 1 сар';
    const package1Button = document.createElement('button');
    package1Button.classList.add('activate-btn');
    package1Button.textContent = 'Идэвхжүүлэх';

    package1.appendChild(package1Img);
    package1.appendChild(package1Price);
    package1.appendChild(package1Button);

    // Package 2
    const package2 = document.createElement('article');
    package2.classList.add('package');
    const package2Img = document.createElement('img');
    package2Img.classList.add('image');
    package2Img.src = 'img/image-8.jpg';
    package2Img.alt = 'Багцын зураг';
    const package2Price = document.createElement('p');
    package2Price.classList.add('price');
    package2Price.textContent = '4900₮ / 1 сар';
    const package2Button = document.createElement('button');
    package2Button.classList.add('activate-btn');
    package2Button.textContent = 'Идэвхжүүлэх';

    package2.appendChild(package2Img);
    package2.appendChild(package2Price);
    package2.appendChild(package2Button);

    // Assemble the pieces
    containerDiv.appendChild(closeButton);
    containerDiv.appendChild(package1);
    containerDiv.appendChild(package2);
    bagtsSection.appendChild(containerDiv);
    popupContent.appendChild(bagtsSection);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);

    // 2. Get the "Өөрчлөх" link
    const changeLink = document.querySelector('.info-item a');  // Select the <a> inside .info-item

    // 3. Add event listener to the link
    changeLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the link from navigating
        popup.classList.add('show');
    });

    // 4. Close button and outside click handling (same as before)
    closeButton.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
});
  