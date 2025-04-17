class PtFAQ extends HTMLElement { constructor() { super(); this.attachShadow({ mode: "open" }); }

connectedCallback() { this.shadowRoot.innerHTML = ` <style> .faqmain { padding: 20px; font-family: Arial, sans-serif; }

php-template
Copy
Edit
    .faqmain h2 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .faq {
      margin-bottom: 20px;
      border-left: 4px solid #02bcb5;
      padding-left: 16px;
    }

    .faq h2 {
      font-size: 20px;
      color: #02bcb5;
      margin: 0 0 8px 0;
    }

    .faq p {
      font-size: 16px;
      color: #444;
    }
  </style>
  <section class="faqmain">
    <h2>Түгээмэл Асуулт, хариулт</h2>
    <section class="faq">
      <h2>1. PlayTV багцууд гэж юу вэ?</h2>
      <p>PlayTV үйлчилгээ нь Basic болон Premium гэсэн 2 төрлийн багцтай. Basic багцтай хэрэглэгч Hollywood, Солонгос контентууд болон үндсэн сувгуудыг үзэх боломжтой...</p>
    </section>
    <section class="faq">
      <h2>2. PLayTV багцаа хэрхэн идэвхжүүлэх вэ?</h2>
      <p>Хэрэглэгч төлбөр төлөхдөө ба www.playtv.mn веб хөтчөөс...</p>
    </section>
    <section class="faq">
      <h2>3. PlayTV багцаа хэрхэн өөрчлөх вэ?</h2>
      <p>Basic багцаас Premium багц руу шилжих: Basic багцын идэвхтэй хугацаандаа Premium багц руу ахих боломжтой...</p>
    </section>
  </section>
`;
} }

customElements.define("pt-faq", PtFAQ);