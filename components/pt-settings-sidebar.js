class SidebarNavigation extends HTMLElement {
    constructor() {
      super();
      
      // Create shadow DOM
      this.attachShadow({ mode: 'open' });
      
      // Template
      this.shadowRoot.innerHTML = `
        <aside class="sidebar">
          <nav>
            <ul>
              <li><a href="settings.html">Аккаунтын тохиргоо</a></li>
              <li><a href="payment.html">Төлбөрийн хэсэг</a></li>
              <li><a href="FAQ.html">Түгээмэл асуултууд</a></li>
              <li><a href=".//index.html" id="logout">Гарах</a></li>
            </ul>              
          </nav>
        </aside>
        <style>
          aside.sidebar {
            width: 301px;
            background-color: var(--variable-collection-backgorund);
            padding: 10px;
          }

          .sidebar nav ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 0;
            margin: 0;
          }

          .sidebar nav ul li a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 20px;
            text-decoration: none;
            color: #ffffff;
            font-family: "League Spartan-Regular", Helvetica;
            font-size: 24px;
          }

          .sidebar nav ul li a:hover {
            background-color: #172630;
          }
          
          .sidebar nav ul li .active {
            background-color: #172630;
            border-left: 4px solid #02bcb5;
            color: #02bcb5;
          }

          #logout {
            color: #d33232;
          }
        </style>
      `;
    }

    connectedCallback() {
      const links = this.shadowRoot.querySelectorAll(".sidebar nav ul li a");

      // Get previously saved ID
      const activeLink = localStorage.getItem("activeLink");

      // If there's a saved ID, add 'active' class to that link
      if (activeLink) {
        const activeElement = this.shadowRoot.querySelector(`.sidebar nav ul li a[href="${activeLink}"]`);
        if (activeElement) {
          activeElement.classList.add("active");
        }
      }

      links.forEach(link => {
        link.addEventListener("click", function (event) {
          // Remove 'active' class from all links
          links.forEach(l => l.classList.remove("active"));

          // Add 'active' class to clicked link
          this.classList.add("active");

          // Update saved ID
          localStorage.setItem("activeLink", this.getAttribute("href"));
        });
      });
    }
  }

  // Define the custom element
  customElements.define('sidebar-navigation', SidebarNavigation);