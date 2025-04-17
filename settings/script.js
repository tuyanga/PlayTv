
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
document.addEventListener('DOMContentLoaded', function(){
  const headerSearchBox = document.getElementById('headerSearchBox');
  const headerSearchInput = document.getElementById('headerSearchInput');
headerSearchBox.addEventListener('click', () => {
  headerSearchBox.classList.toggle('active');
  headerSearchInput.focus();
});
document.addEventListener('click', (event) => {
  if (!headerSearchBox.contains(event.target) && event.target !== headerSearchBox) {
      headerSearchBox.classList.remove('active');
  }
});
});
  