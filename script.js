// Dados completos dos eventos
const eventos = [
  {
    titulo: "Tour na Fábrica da Three Monkeys (Local: Zona Sul)",
    link: "https://www.sympla.com.br/evento/tour-na-fabrica-da-three-monkeys/2813867?referrer=www.google.com",
    imagem:
      "https://images.squarespace-cdn.com/content/v1/51ef2bf2e4b02bcf8471333b/1548975653637-3OLIBQG1CMETLNT86O92/three-monkeys.jpg?format=750w",
    dia: "Sábado",
    horario: "Tarde",
    local: "Zona Sul",
    valor: "Pago",
  },
  {
    titulo: "Rolé dos Favellados: Morro da Providência (Local: Centro)",
    link: "https://www.sympla.com.br/evento/morro-da-providencia-a-primeira-favela-role-dos-favellados-22-de-fevereiro/2828393?referrer=www.google.com",
    imagem:
      "https://www.cieds.org.br/storage/resized/posts/October2023-1050x/224bfa7d5901cc685ccd8be78e4cad87.png",
    dia: "Sábado",
    horario: "Tarde",
    local: "Centro",
    valor: "Pago",
  },
  {
    titulo: "Forro de Pife DESCALÇO (Local: Zona Sul)",
    link: "https://www.sympla.com.br/evento/forro-de-pife-descalco-a-moda-e-fazer-cedinho-e-descalco/2837092",
    imagem:
      "https://bafafa.com.br/images/artigos/forro_de_pife_rampa_21032024_065219.jpg",
    dia: "Sábado",
    horario: "Tarde",
    local: "Zona Sul",
    valor: "Pago",
  },
  {
    titulo: "BLACK BOM FANTASY (Local: Zona Norte)",
    link: "https://www.sympla.com.br/evento/black-bom-fantasy-22-2-renascenca-clube/2810937",
    imagem:
      "https://odia.ig.com.br/_midias/jpg/2024/11/22/1200x750/1_baile_black_bom_3c-34661080.jpg",
    dia: "Sábado",
    horario: "Tarde",
    local: "Zona Norte",
    valor: "Pago",
  },
];

// Dados completos dos anúncios (ATUALIZADOS)
const anuncios = [
  {
    local: "Zona Sul",
    logo: "https://cafelamas.com.br/wp-content/uploads/2020/08/cropped-favicon-cafe-lamas-165x165.png",
    mapThumbnail: "https://i.imgur.com/MRmth8W.png",
    info: [
      "CAFÉ LAMAS",
      "Restaurante tradicional",
      "Rua Marquês de Abrantes, 18A - Flamengo",
      "Tel: (21) 2556-0799",
      "Diariamente, de 11h à 1h",
    ],
    mapsUrl:
      "https://www.google.com/maps/d/embed?mid=1azF1USX9h-khIPFXslkms8AiUSBgqeU&hl=pt-BR&ehbc=2E312F&ll=-22.972303599999993%2C-43.2033003&z=17",
    fullMapUrl:
      "https://www.google.com/maps/d/viewer?mid=1azF1USX9h-khIPFXslkms8AiUSBgqeU", // URL COMPLETO PARA CLIQUE
    site: "https://cafelamas.com.br",
  },
  {
    local: "Zona Norte",
    logo: "https://i.imgur.com/1Ax0HIk.jpeg",
    mapThumbnail: "https://i.imgur.com/fvOFhug.png",
    info: [
      "PESCADOS NA BRASA",
      "Restaurante comida do norte / Carimbó",
      "Rua Vitor Meireles, 92 – Riachuelo",
      "Tel: (21) 99359-4753",
      "3ª à sáb de 11h às 21h30",
      "Dom 11h às 18h",
    ],
    mapsUrl:
      "https://www.google.com/maps/d/embed?mid=1NVVMseOxNiiyu49K7YmLJD6VmoSAAZc&hl=pt-BR&ehbc=2E312F",
    fullMapUrl:
      "https://www.google.com/maps/d/viewer?mid=1NVVMseOxNiiyu49K7YmLJD6VmoSAAZc", // URL COMPLETO PARA CLIQUE
    site: "https://www.instagram.com/pescadosnabrasa",
  },
  {
    local: "Centro",
    logo: "https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/7602fa23-656e-4c11-9c93-7e6117a914c4/202308101032_Eyd3_i.jpg",
    mapThumbnail: "https://i.imgur.com/2Ytp1Jy.png",
    info: [
      "AL FARABI",
      "Restaurante, botequim e eventos",
      "Rua do Mercado, 34 – Centro",
      "Tel: (21) 3553-1518",
      "5a e 6a: 12h às 22h;",
      "Sáb e dom: 12h às 20h",
    ],
    mapsUrl:
      "https://www.google.com/maps/d/embed?mid=1-c8lNgLYEZ7s0F7wRMn9nayUGlPSZ1s&hl=pt-BR&ehbc=2E312F",
    fullMapUrl:
      "https://www.google.com/maps/d/viewer?mid=1-c8lNgLYEZ7s0F7wRMn9nayUGlPSZ1s", // URL COMPLETO PARA CLIQUE
    site: "https://www.instagram.com/alfa_bar_e_cultura",
  },
  {
    local: "Zona Oeste",
    logo: "https://espaconutriluz.com.br/wp-content/uploads/2022/04/logo-nutriluz.png",
    mapThumbnail: "https://i.imgur.com/2Ytp1Jy.png",
    info: [
      "ESPAÇO NUTRI LUZ",
      "Espaço de bem estar",
      "Estr. do Sacarrão, 1800, ltes 34 e 35 – Vargem Grande",
      "Tel: (21) 96540-3854",
      "De 4ª à dom em diferentes horários",
    ],
    mapsUrl:
      "https://www.google.com/maps/d/embed?mid=1LC-6qKyhMUqzhcZEnW3VageRlIn5Qp0&hl=pt-BR&ehbc=2E312F",
    fullMapUrl:
      "https://www.google.com/maps/d/viewer?mid=1LC-6qKyhMUqzhcZEnW3VageRlIn5Qp0", // URL COMPLETO PARA CLIQUE
    site: "https://www.instagram.com/espaco_nutri_luz",
  },
];

// Função para criar os slides do carrossel
function criarSlides(eventos, nenhumFiltro = false) {
  const carousel = document.getElementById("eventCarousel");

  if ($(carousel).hasClass("slick-initialized")) {
    $(carousel).slick("unslick");
  }

  carousel.innerHTML = nenhumFiltro
    ? `<p>Escolha seus eventos usando os filtros acima.</p>`
    : eventos.length
    ? eventos
        .map(
          (evento) => `
          <div class="slide">
              <a href="${evento.link}" target="_blank">
                  <img src="${evento.imagem}" alt="${evento.titulo}" loading="lazy">
                  <h3>${evento.titulo}</h3>
              </a>
          </div>
      `
        )
        .join("")
    : `<p>Nenhum evento encontrado com os filtros selecionados.</p>`;

  if (!nenhumFiltro && eventos.length) {
    $(carousel).slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="prev-button">←</button>',
      nextArrow: '<button type="button" class="next-button">→</button>',
    });
  }
}

// Função para filtrar eventos
function filtrarEventos() {
  const dia = document.getElementById("filterDay").value;
  const horario = document.getElementById("filterTime").value;
  const local = document.getElementById("filterLocation").value;
  const valor = document.getElementById("filterValue").value;

  const nenhumFiltro = !dia && !horario && !local && !valor;

  if (nenhumFiltro) {
    criarSlides([], true);
    return;
  }

  const eventosFiltrados = eventos.filter((evento) => {
    return (
      (!dia || evento.dia === dia) &&
      (!horario || evento.horario === horario) &&
      (!local || evento.local === local) &&
      (!valor || evento.valor === valor)
    );
  });

  criarSlides(eventosFiltrados);
  atualizarFooter(local);
}

// Função para atualizar o footer - VERSÃO FINAL CORRIGIDA
function atualizarFooter(localSelecionado) {
  const footerTopLeft = document.getElementById("footerTopLeft");
  const footerTopRight = document.getElementById("footerTopRight");
  const footerBottomLeft = document.getElementById("footerBottomLeft");
  const footerBottomRight = document.getElementById("footerBottomRight");
  const locationIcon = document.getElementById("location-icon");
  const googleMaps = document.getElementById("google-maps");

  // Reset de estados
  locationIcon.style.display = "block";
  googleMaps.style.display = "none";
  googleMaps.onclick = null; // Remove evento anterior

  if (localSelecionado) {
    const anuncio = anuncios.find((a) => a.local === localSelecionado);

    if (anuncio) {
      // Topo Esquerdo - Logo do anunciante
      footerTopLeft.innerHTML = `<img src="${anuncio.logo}" alt="${anuncio.info[0]}" class="advertiser-logo">`;

      // Topo Direito - Informações do anunciante
      footerTopRight.innerHTML = `
              <div class="advertiser-info">
                  <h4><a href="${anuncio.site}" target="_blank">${
        anuncio.info[0]
      }</a></h4>
                  <p><em>${anuncio.info[1]}</em></p><br/>
                  ${anuncio.info
                    .slice(2)
                    .map((info) => `<p>${info}</p>`)
                    .join("")}
              </div>
          `;

      // Inferior Esquerdo - Texto do mapa
      footerBottomLeft.innerHTML = `Veja no mapa ao lado<br/>outros lugares em ${anuncio.local}<br/><br/>Clique no canto superior direito <br/>do mapa para ampliá-lo<br/>`;

      // INFERIOR DIREITO - SOLUÇÃO DEFINITIVA
      googleMaps.src = anuncio.mapsUrl;
      googleMaps.style.display = "block";
      locationIcon.style.display = "none"; // Oculta o ícone

      // Adiciona evento de clique para abrir mapa completo
      googleMaps.onclick = function () {
      console.log("URL gerada:", anuncio.mapsUrl); // Exibe a URL no console
      window.location.href = anuncio.mapsUrl;
};

      return;
    }
  }

  // Reset para footer estático
  footerTopLeft.innerHTML =
    '<img src="https://i.imgur.com/SAidmdv.png" alt="Megafone" id="footerLogo">';
  footerTopRight.innerHTML =
    "<p>Clique no filtro LOCAL para ver</p><p>os principais anunciantes da região</p>";
  footerBottomLeft.innerHTML =
    "<p>Selecionando um LOCAL você encontra</p><p>todos os anunciantes da região</p>";
}

// Event listeners
document.getElementById("filterDay").addEventListener("change", filtrarEventos);
document
  .getElementById("filterTime")
  .addEventListener("change", filtrarEventos);
document
  .getElementById("filterLocation")
  .addEventListener("change", filtrarEventos);
document
  .getElementById("filterValue")
  .addEventListener("change", filtrarEventos);

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  filtrarEventos();
});
