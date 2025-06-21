function openModal() {
  document.getElementById("quoteModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("quoteModal").style.display = "none";
}

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const insuranceType = document.getElementById("insurance_type").value;
  const message = document.getElementById("message").value;
  alert(
    `Thank you, ${name}! Your quote request for ${insuranceType} has been received. We'll contact you soon.`
  );
  this.reset();
  closeModal();
});

window.onclick = function (event) {
  const modal = document.getElementById("quoteModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const partnersData = {
  general: [
    "SBI General Insurance",
    "TATA AIG General Insurance",
    "Bajaj Allianz General Insurance",
    "Go Digit General Insurance",
    "HDFC ERGO General Insurance",
  ],
  car: [
    "ICICI Lombard",
    "HDFC ERGO",
    "TATA AIG",
    "Bajaj Allianz",
    "SBI General",
    "ACKO",
    "Cholamandalam MS",
  ],
  bike: [
    "IFFCO Tokio",
    "Royal Sundaram",
    "Oriental Insurance",
    "Bajaj Allianz",
    "ACKO",
    "PolicyBazaar",
    "InsuranceDekho",
  ],
  health: [
    "Niva Bupa",
    "Aditya Birla Health",
    "Manipal Cigna",
    "Care Health",
    "TATA AIG",
    "HDFC ERGO",
  ],
  term: [
    "HDFC Life",
    "Max Life",
    "ICICI Prudential",
    "Bajaj Allianz",
    "SBI Life",
  ],
  life: [
    "MassMutual",
    "Guardian",
    "Thrivent",
    "Bajaj Allianz Life",
    "HDFC Life",
  ],
  investment: [
    "ULIPs (via Bajaj Allianz)",
    "LIC",
    "Aditya Birla Capital",
    "HDFC Life",
  ],
  business: [
    "TATA AIG (Commercial)",
    "Bajaj Allianz (Business)",
    "HDFC ERGO (Corporate)",
    "ICICI Lombard (Business)",
  ],
  travel: [
    "Reliance Travel Care",
    "Universal Sompo",
    "TATA AIG Travel",
    "Bajaj Allianz Travel",
    "PolicyBazaar Travel",
  ],
};

function showPartners(category) {
  const partnerList = document.getElementById("partnerList");
  partnerList.innerHTML = "";

  const partners = partnersData[category] || [];
  if (partners.length === 0) {
    partnerList.innerHTML =
      '<p class="no-partners">No partners available for this category.</p>';
  } else {
    partners.forEach((partner) => {
      const partnerItem = document.createElement("div");
      partnerItem.classList.add("partner-item");
      partnerItem.innerHTML = `<p>${partner}</p>`;
      partnerList.appendChild(partnerItem);
    });

    const allPartners = document.querySelectorAll(".partner-item");
    allPartners.forEach((item) => item.classList.add("active"));
  }
}

document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    showPartners(category);
  });
});

showPartners("");
