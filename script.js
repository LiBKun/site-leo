document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu a");
  const mainImage = document.getElementById("main-image");
  const footImage = document.getElementById("foot-image");
  const tocalogo = document.getElementById("tocalogo");
  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Troca a imagem de fundo conforme o botão clicado
      const imgFile = e.currentTarget.getAttribute("data-img");
      if (imgFile) {
        mainImage.src = `img/${imgFile}1.jpeg`;
        footImage.src = `img/${imgFile}2.jpeg`;
        tocalogo.src = `img/${imgFile}3.png`;
      }

      // Atualiza a classe 'active'
      menuLinks.forEach(l => l.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });

  // ====== MAPA LEAFLET ======
  const coordenadas = [-22.5620471, -55.7224541];

  const mapa = L.map('map').setView(coordenadas, 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
  }).addTo(mapa);

  L.marker(coordenadas).addTo(mapa)
    .bindPopup('Tocamadera Home')
    .openPopup();
});
