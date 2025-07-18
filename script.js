// Dados dos eventos (pode manter como está)
const eventos = [
  {
    titulo: "Tour na Fábrica da Three Monkeys (Local: Zona Sul)",
    link: "https://www.sympla.com.br/evento/tour-na-fabrica-da-three-monkeys/2813867?referrer=www.google.com",
    imagem: " https://images.squarespace-cdn.com/content/v1/51ef2bf2e4b02bcf8471333b/1548975653637-3OLIBQG1CMETLNT86O92/three-monkeys.jpg?format=750w",
    dia: "Sábado",
    horario: "Tarde",
    local: "Zona Sul",
    valor: "Pago",
  },
  {
    titulo: "Rolé dos Favellados: Morro da Providência (Local: Centro)",
    link: " https://www.sympla.com.br/evento/morro-da-providencia-a-primeira-favela-role-dos-favellados-22-de-fevereiro/2828393?referrer=www.google.com",
    imagem: " https://www.cieds.org.br/storage/resized/posts/October2023-1050x/224bfa7d5901cc685ccd8be78e4cad87.png ",
    dia: "Sábado",
    horario: "Tarde",
    local: "Centro",
    valor: "Pago",
  },
  {
    titulo: "Forro de Pife DESCALÇO (Local: Zona Sul)",
    link: "https://www.sympla.com.br/evento/forro-de-pife-descalco-a-moda-e-fazer-cedinho-e-descalco/2837092 ",
    imagem: "https://bafafa.com.br/images/artigos/forro_de_pife_rampa_21032024_065219.jpg ",
    dia: "Sábado",
    horario: "Tarde",
    local: "Zona Sul",
    valor: "Pago",
  },
  {
    titulo: "BLACK BOM FANTASY (Local: Zona Norte)",
    link: "https://www.sympla.com.br/evento/black-bom-fantasy-22-2-renascenca-clube/2810937 ",
    imagem: "https://odia.ig.com.br/_midias/jpg/2024/11/22/1200x750/1_baile_black_bom_3c-34661080.jpg ",
    dia: "Sábado",
    horario: "Tarde",
    local: "Zona Norte",
    valor: "Pago",
  },
];

// Dados dos anunciantes master por região
const anuncios = [
  {
    local: "Centro",
    logo: "https://i.imgur.com/SAidmdv.png ",
    info: [
      "ATELIÊ CIRO FERNANDES",
      "(Lapa)",
      "Ateliê de xilogravura",
      "Visitas com agendamento",
      "Tel: (21) 99124-6515",
      "Site: Instagram",
    ],
    site: "https://www.instagram.com/cirofernandesxilo/ ",
  },
  {
    local: "Zona Norte",
    logo: "https://i.imgur.com/SAidmdv.png ",
    info: [
      "LIVRARIA BELLE ÉPOQUE",
      "(Méier)",
      "Sebo e livraria",
      "2ª à sáb 10h às 19h",
      "Tel: (21) 97625-7600",
      "Site: Instagram",
    ],
    site: "https://www.instagram.com/livrariabelleepoque/ ",
  },
  {
    local: "Zona Sul",
    logo: "https://cafelamas.com.br/wp-content/uploads/2020/08/cropped-favicon-cafe-lamas-165x165.png ",
    info: [
      "CAFÉ LAMAS",
      "(Flamengo)",
      "Restaurante tradicional",
      "Diariamente, de 11h à 1h",
      "Tel: (21) 2556-0799",
      "Site: Instagram",
    ],
    site: "https://cafelamas.com.br ",
  },
  {
    local: "Zona Oeste",
    logo: "https://espaconutriluz.com.br/wp-content/uploads/2022/04/logo-nutriluz.png ",
    info: [
      "ESPAÇO NUTRI LUZ",
      "(Vargem Grande)",
      "Espaço de bem estar",
      "4ª à dom em diferentes horários",
      "Tel: (21) 96540-3854",
      "Site: Instagram",
    ],
    site: "https://www.instagram.com/espaco_nutri_luz/ ",
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

// Função para atualizar o footer com base na região selecionada
function atualizarFooter(localSelecionado) {
  const footerTopLeft = document.getElementById("footerTopLeft");
  const footerTopRight = document.getElementById("footerTopRight");
  const footerBottomLeft = document.getElementById("footerBottomLeft");
  const footerBottomRight = document.getElementById("footerBottomRight");
  const locationIcon = document.getElementById("location-icon");

  // Reset do footer
  locationIcon.style.display = "block";

  if (localSelecionado) {
    const anunciante = anuncios.find((a) => a.local === localSelecionado);

    if (anunciante) {
      // Atualizar parte superior esquerda (logo)
      footerTopLeft.innerHTML = `
        <img src="${anunciante.logo}" alt="Logo do ${anunciante.info[0]}" id="advertiser-logo">
      `;

      // Atualizar parte superior direita (nome e site)
      footerTopRight.innerHTML = `
        <div class="advertiser-info">
          <h4><a href="${anunciante.site}" target="_blank">${anunciante.info[0]}</a></h4>
          <p><em>${anunciante.info[1]}</em></p><br/>
          ${anunciante.info.slice(2).map((info) => `<p>${info}</p>`).join("")}
        </div>
      `;

      // Atualizar parte inferior esquerda (texto do mapa)
      footerBottomLeft.innerHTML = `
        <p>Veja todos os anunciantes<br/>da região ${anunciante.local}<br/><br/>Clique na imagem ao lado</p>
      `;

      // Atualizar parte inferior direita (miniatura do mapa)
      const paginaRegiao = localSelecionado.toLowerCase().replace(" ", "-") + ".html";
      footerBottomRight.innerHTML = `
        <a href="${paginaRegiao}" class="map-link">
          <img src="https://i.ibb.co/533gcXw/centro.png " alt="Mapa da ${anunciante.local}" class="map-thumbnail">
        </a>
      `;

      locationIcon.style.display = "none";
      return;
    }
  }

  // Reset para estado padrão do footer
  footerTopLeft.innerHTML = `
    <img src="https://i.imgur.com/SAidmdv.png " alt="Megafone" id="footerLogo">
  `;
  footerTopRight.innerHTML = `
    <p>Clique no filtro LOCAL para ver</p>
    <p>os principais anunciantes da região</p>
  `;
  footerBottomLeft.innerHTML = `
    <p>Selecionando um LOCAL você encontra</p>
    <p>todos os anunciantes da região</p>
  `;
  footerBottomRight.innerHTML = "";
}

// Função para abrir modal do anunciante
function openAdvertiserModal(advertiserId) {
  // Esconder todos os modais
  document.querySelectorAll(".detalhes-anunciante").forEach((modal) => {
    modal.style.display = "none";
  });

  // Mostrar o modal específico
  const modal = document.getElementById(`${advertiserId}-modal`);
  if (modal) {
    modal.style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
  }
}

// Função para fechar o modal
function fecharDetalhes() {
  document.querySelectorAll(".detalhes-anunciante").forEach((modal) => {
    modal.style.display = "none";
  });
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
}

// Fechar com ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    fecharDetalhes();
  }
});

// Event listeners dos filtros
document.getElementById("filterDay").addEventListener("change", filtrarEventos);
document.getElementById("filterTime").addEventListener("change", filtrarEventos);
document.getElementById("filterLocation").addEventListener("change", function () {
  filtrarEventos();
  const localSelecionado = this.value;
  atualizarFooter(localSelecionado);
});
document.getElementById("filterValue").addEventListener("change", filtrarEventos);

// Atualizar footer ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  filtrarEventos();
  const localSelecionado = document.getElementById("filterLocation").value;
  atualizarFooter(localSelecionado);
});
