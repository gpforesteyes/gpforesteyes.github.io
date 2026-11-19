// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: ".",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-sobre",
          title: "Sobre",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-publicações",
          title: "Publicações",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-no-radar",
          title: "No Radar",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/noradar/";
          },
        },{id: "nav-projetos",
          title: "Projetos",
          description: "Projetos em Andamento",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-livros",
          title: "Livros",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-equipe",
          title: "Equipe",
          description: "Membros do grupo de pesquisa",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-sistema-de-amostragem-e-inteligência-artificial-para-estimativas-da-biomassa-abaixo-do-solo-bgb",
          title: 'Sistema de amostragem e Inteligência Artificial para Estimativas da Biomassa Abaixo do Solo...',
          description: "Biomassa Abaixo do Solo",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BGB/";
            },},{id: "projects-jcarbon-plus",
          title: 'JCARBON® PLUS',
          description: "Integração Digital para Monitoramento dos Estoques de Biomassa e Carbono em Florestas Nativas",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Jcarbon/";
            },},{id: "projects-monitoramento-do-estoque-de-carbono-e-prevenção-de-desastres-naturais-na-serra-do-mar-paraná",
          title: 'Monitoramento do estoque de carbono e prevenção de desastres naturais na Serra do...',
          description: "Desenvolvimento e integração de tecnologias",
          section: "Projects",handler: () => {
              window.location.href = "/projects/desastres/";
            },},{id: "projects-integração-de-geotecnologias-para-extração-de-métricas-florestais",
          title: 'Integração de geotecnologias para extração de métricas florestais',
          description: "Integração de geotecnologias para extração de métricas florestais",
          section: "Projects",handler: () => {
              window.location.href = "/projects/integracao/";
            },},{id: "projects-lid4-estimativas-em-inventários-florestais-nova-era-com-sensores-lidar",
          title: 'Lid4 - Estimativas em Inventários florestais: Nova era com sensores Lidar',
          description: "Utilização de tecnologia LiDAR para estimativas precisas de atributos florestais",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lid4d/";
            },},{id: "projects-sif4d-inovação-na-fusão-de-dados-para-o-monitoramento-espacial-avançado-da-dinâmica-do-carbono-na-vegetação",
          title: 'SIF4D – Inovação na fusão de dados para o monitoramento espacial avançado da...',
          description: "Um enfoque para os plantios florestais brasileiros",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sif4d/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%70%66%6F%72%65%73%74%65%79%65%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/gpforesteyes", "_blank");
        },
      },{
        id: 'social-lattes',
        title: 'Lattes',
        section: 'Socials',
        handler: () => {
          window.open("http://lattes.cnpq.br/http://dgp.cnpq.br/dgp/espelhogrupo/321192", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/gpforesteyes", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
