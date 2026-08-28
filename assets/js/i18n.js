// Site internationalization (PT-BR default / EN).
// Loaded in <head> so the language attribute is set before paint, avoiding flicker.

const I18N_DEFAULT = "pt";
const I18N_SUPPORTED = ["pt", "en"];

const I18N_DICT = {
  pt: {
    "lang.toggle.title": "Mudar idioma para Inglês",
    "lang.code": "PT-BR",

    "nav.about": "Sobre",
    "nav.publications": "Publicações",
    "nav.noradar": "No Radar",
    "nav.projects": "Projetos",
    "nav.books": "Livros",
    "nav.team": "Equipe",
    "nav.news": "Notícias",
    "nav.blog": "Blog",
    "nav.cv": "CV",
    "nav.teaching": "Ensino",
    "nav.repositories": "Repositórios",
    "nav.submenus": "Mais",

    "search.button": "Buscar",
    "search.placeholder": "Digite para buscar",

    "footer.last_updated": "Última atualização",
    "footer.impressum": "Aviso Legal",

    "home.subtitle": "Grupo de Estudo sobre Integração Geotecnológica aplicadas a Engenharia Florestal",
    "home.location.university": "Universidade Federal do Paraná",
    "home.location.campus": "CIFLOMA – Campus Jardim Botânico",
    "home.location.lab": "Laboratório de Inventário Florestal e Biofix",
    "home.location.address": "Av. Pref. Lothário Meissner, 632 – Jardim Botânico",
    "home.location.zip": "CEP 80.210-170 – Curitiba – PR",

    "about.subtitle": "Integração Geotecnológica para Variáveis Dendrométricas, Qualitativas e Tecnológicas da Madeira",
    "about.publications.heading": "Publicações",

    "books.subtitle": "Livros publicados",
    "profiles.description": "Membros do grupo de pesquisa",
    "projects.description": "Projetos em Andamento",
    "projects.category.research": "Projetos de Pesquisa",
    "news.title": "Notícias",
    "publications.title": "Publicações",
    "noradar.intro": "Artigos de outros autores, externos ao grupo, trazidos para discussão nas reuniões do ForestEyes.",
    "noradar.instagram": "Para fotos e mais informações sobre as apresentações e discussões, acompanhe nosso",

    "profile.role.coordinator": "Coordenadora",
    "profile.role.collaborator": "Pesquisador Colaborador",
    "profile.role.phd": "Doutorado",
    "profile.role.msc": "Mestrado",
    "profile.role.undergrad": "Graduação",
    "profile.role.lab_technician": "Técnica de Laboratório",

    "page.not_found.title": "Página não encontrada",
    "page.not_found.body": "Parece que houve um engano. Não há nada por aqui.",
    "page.not_found.redirect": "Você será redirecionado para a página inicial em 3 segundos. Caso não seja redirecionado, volte para a",
    "page.not_found.home_link": "página inicial",

    "project.bgb.title": "Sistema de amostragem e Inteligência Artificial para Estimativas da Biomassa Abaixo do Solo - BGB",
    "project.bgb.description": "Biomassa Abaixo do Solo",

    "project.jcarbon.title": "JCARBON® PLUS",
    "project.jcarbon.description": "Integração Digital para Monitoramento dos Estoques de Biomassa e Carbono em Florestas Nativas",

    "project.desastres.title": "Monitoramento do estoque de carbono e prevenção de desastres naturais na Serra do Mar – Paraná",
    "project.desastres.description": "Desenvolvimento e integração de tecnologias",

    "project.integracao.title": "Integração de geotecnologias para extração de métricas florestais",
    "project.integracao.description": "Integração de geotecnologias para extração de métricas florestais",

    "project.lid4d.title": "Lid4 - Estimativas em Inventários florestais: Nova era com sensores Lidar",
    "project.lid4d.description": "Utilização de tecnologia LiDAR para estimativas precisas de atributos florestais",

    "project.sif4d.title": "SIF4D – Inovação na fusão de dados para o monitoramento espacial avançado da dinâmica do carbono na vegetação",
    "project.sif4d.description": "Um enfoque para os plantios florestais brasileiros",
  },
  en: {
    "lang.toggle.title": "Switch language to Portuguese",
    "lang.code": "EN",

    "nav.about": "About",
    "nav.publications": "Publications",
    "nav.noradar": "On the Radar",
    "nav.projects": "Projects",
    "nav.books": "Books",
    "nav.team": "Team",
    "nav.news": "News",
    "nav.blog": "Blog",
    "nav.cv": "CV",
    "nav.teaching": "Teaching",
    "nav.repositories": "Repositories",
    "nav.submenus": "More",

    "search.button": "Search",
    "search.placeholder": "Type to start searching",

    "footer.last_updated": "Last updated",
    "footer.impressum": "Impressum",

    "home.subtitle": "Study Group on Geotechnological Integration applied to Forest Engineering",
    "home.location.university": "Federal University of Paraná",
    "home.location.campus": "CIFLOMA – Jardim Botânico Campus",
    "home.location.lab": "Forest Inventory and Biofix Laboratory",
    "home.location.address": "Av. Pref. Lothário Meissner, 632 – Jardim Botânico",
    "home.location.zip": "ZIP 80.210-170 – Curitiba – PR – Brazil",

    "about.subtitle": "Geotechnological Integration for Dendrometric, Qualitative and Technological Wood Variables",
    "about.publications.heading": "Publications",

    "books.subtitle": "Published books",
    "profiles.description": "Research group members",
    "projects.description": "Ongoing Projects",
    "projects.category.research": "Research Projects",
    "news.title": "News",
    "publications.title": "Publications",
    "noradar.intro": "Papers by authors outside the group, brought in for discussion at ForestEyes meetings.",
    "noradar.instagram": "For photos and more about the presentations and discussions, follow our",

    "profile.role.coordinator": "Coordinator",
    "profile.role.collaborator": "Collaborating Researcher",
    "profile.role.phd": "PhD Candidate",
    "profile.role.msc": "MSc Candidate",
    "profile.role.undergrad": "Undergraduate Student",
    "profile.role.lab_technician": "Laboratory Technician",

    "page.not_found.title": "Page not found",
    "page.not_found.body": "Looks like there has been a mistake. Nothing exists here.",
    "page.not_found.redirect": "You will be redirected to the main page within 3 seconds. If not redirected, please go back to the",
    "page.not_found.home_link": "home page",

    "project.bgb.title": "Sampling System and Artificial Intelligence for Below Ground Biomass Estimates – BGB",
    "project.bgb.description": "Below Ground Biomass",

    "project.jcarbon.title": "JCARBON® PLUS",
    "project.jcarbon.description": "Digital Integration for Monitoring Biomass and Carbon Stocks in Native Forests",

    "project.desastres.title": "Carbon stock monitoring and natural disaster prevention in the Serra do Mar – Paraná",
    "project.desastres.description": "Technology development and integration",

    "project.integracao.title": "Integration of geotechnologies for extracting forestry metrics",
    "project.integracao.description": "Integration of geotechnologies for extracting forestry metrics",

    "project.lid4d.title": "Lid4 – Forest Inventory Estimates: a New Era with LiDAR Sensors",
    "project.lid4d.description": "Use of LiDAR technology for accurate forest attribute estimates",

    "project.sif4d.title": "SIF4D – Data-fusion innovation for advanced spatial monitoring of vegetation carbon dynamics",
    "project.sif4d.description": "A focus on Brazilian forest plantations",
  },
};

function getLang() {
  let lang = null;
  try {
    lang = localStorage.getItem("lang");
  } catch (e) {
    // localStorage may be unavailable (private mode, etc.) — fall back to default.
  }
  if (!I18N_SUPPORTED.includes(lang)) {
    lang = I18N_DEFAULT;
  }
  return lang;
}

function setLang(lang) {
  if (!I18N_SUPPORTED.includes(lang)) {
    lang = I18N_DEFAULT;
  }
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    // Ignore storage failures.
  }
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
  applyI18n();
}

function toggleLang() {
  setLang(getLang() === "pt" ? "en" : "pt");
}

function translate(key, lang) {
  lang = lang || getLang();
  const dict = I18N_DICT[lang] || I18N_DICT[I18N_DEFAULT];
  return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
}

function applyI18n() {
  const lang = getLang();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translate(key, lang);
    if (value !== null) {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    const value = translate(key, lang);
    if (value !== null) {
      el.setAttribute("title", value);
      el.setAttribute("aria-label", value);
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = translate(key, lang);
    if (value !== null) {
      el.setAttribute("placeholder", value);
    }
  });
}

// Set the language attribute as early as possible to prevent a flash of
// the wrong language before the page finishes rendering.
function initLang() {
  const lang = getLang();
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");

  document.addEventListener("DOMContentLoaded", function () {
    applyI18n();
    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        toggleLang();
      });
    }
  });
}
