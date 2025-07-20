function cargarHTML(id, archivo) {
    fetch(archivo)
      .then(res => {
        if (!res.ok) throw new Error(`Error al cargar ${archivo}`);
        return res.text();
      })
      .then(html => {
        document.getElementById(id).innerHTML = html;
      })
      .catch(error => {
        console.error(error);
        document.getElementById(id).innerHTML = `<p>Error al cargar ${archivo}</p>`;
      });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    cargarHTML("header", "header.html");
    cargarHTML("footer", "footer.html");
    cargarHTML("header_esp", "header_esp.html");
    cargarHTML("footer_esp", "footer_esp.html");
  });

  function setLanguage(lang) {
    document.querySelectorAll('.lang-content').forEach(el => el.classList.remove('active'));
    const selected = document.getElementById('lang-' + lang);
    if (selected) selected.classList.add('active');
  }

  function togglePopup() {
  const popup = document.getElementById("cvPopup");
  const isVisible = popup.style.display === "block";
  popup.style.display = isVisible ? "none" : "block";
}

window.addEventListener("click", function(e) {
  const popup = document.getElementById("cvPopup");
  const trigger = document.querySelector(".downloads");

  if (!popup.contains(e.target) && !trigger.contains(e.target)) {
    popup.style.display = "none";
  }
});

  