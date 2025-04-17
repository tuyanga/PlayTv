class PasswordChangePopup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    console.log("PasswordChangePopup connected!");
    this.render();
    this.addEvents();
  }

  render() {
    this.shadowRoot.innerHTML = `<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    .popup {
      display: none;
      position: fixed;
      z-index: 1000;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
    }
    .popup-content {
      background: #07131c;
      padding: 20px;
      width: 90%;
      max-width: 400px;
      border-radius: 10px;
      text-align: center;
      position: relative;
    }
    .popup-content input {
      width: 90%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #838383;
      border-radius: 5px;
      background-color: #172630;
      color: white;
    }
    .popup-content button {
        background: #02bcb5;
        color: white;
        width: 90%;
        margin: 20px;
        padding: 10px;
        border: none;
        cursor: pointer;
        border-radius: 7px;
        font-size: 16px;
    }
    .error {
      color: red;
      font-size: 0.9em;
    }

    #close-popup {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      color: white;
      cursor: pointer;
    }
    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #172630;
      padding: 10px 20px;
      border-radius: 10px;
    }

    .info-item span{
      font-family: "League Spartan-Regular", Helvetica;
      font-weight: 400;
      color: #ffffff;
      font-size: 20px;
    }

    .info-item a {
      font-family: "League Spartan-Regular", Helvetica;
      font-weight: 400;
      color: #ffffff;
      font-size: 16px;
      text-decoration: none;
    }
    .info-item:hover a{
      color: var(--variable-collection-main);
      cursor: pointer;
    }
    .info-item:hover{

      color: var(--variable-collection-main);
      border-width: 3px;
      border-style: solid;
      border-color: var(--variable-collection-main);
    }
  </style>
</head>

<body>

  <div class="info-item">
    <span>Нууц үг</span>
    <a id="openlink">Нууц үг өөрчлөх</a>
    <div class="popup" id="popup">
      <div class="popup-content">
        <i class="fa-solid fa-xmark" id="close-popup"></i>
        <h3>Нууц үг өөрчлөх</h3>
        <input type="password" id="current" placeholder="Одоогийн нууц үг" />
        <input type="password" id="new" placeholder="Шинэ нууц үг" />
        <input type="password" id="repeat" placeholder="Шинэ нууц үгээ давтах" />
        <div class="error" id="error"></div>
        <button id="saveBtn">Хадгалах</button>
      </div>
    </div>
  </div>
</body>
`;
  }


  addEvents() {
    const shadow = this.shadowRoot;
    const popup = shadow.getElementById("popup");
    const openBtn = shadow.getElementById("openlink");
    const closeBtn = shadow.getElementById("close-popup");
    const saveBtn = shadow.getElementById("saveBtn");
    const errorEl = shadow.getElementById("error");

    openBtn.addEventListener("click", () => (popup.style.display = "flex"));
    closeBtn.addEventListener("click", () => (popup.style.display = "none"));

    saveBtn.addEventListener("click", () => {
      const current = shadow.getElementById("current").value.trim();
      const newPass = shadow.getElementById("new").value.trim();
      const repeat = shadow.getElementById("repeat").value.trim();

      const valid = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

      if (!valid.test(newPass)) {
        errorEl.textContent =
          "Нууц үг нь дор хаяж 8 тэмдэгт, 1 том үсэг, 1 тусгай тэмдэгттэй байх ёстой.";
        return;
      }

      if (newPass !== repeat) {
        errorEl.textContent = "Шинэ нууц үг таарахгүй байна.";
        return;
      }

      errorEl.textContent = "";
      alert("Нууц үг амжилттай солигдлоо.");
      popup.style.display = "none";
    });
  }
}

customElements.define("pt-password-change", PasswordChangePopup);
