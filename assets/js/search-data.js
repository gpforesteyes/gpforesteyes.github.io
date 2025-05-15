// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
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
          description: "Publicações por categoria em ordem cronologica reversa, feita por jekyll-scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projetos",
          title: "Projetos",
          description: "Projetos em Andamento",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-equipe",
          title: "Equipe",
          description: "Membros do grupo de pesquisa",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
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
          section: "News",},{id: "projects-integração-com-técnicas-de-inteligência-artificial-aprendizado-de-máquinas",
          title: 'Integração com técnicas de inteligência artificial (aprendizado de máquinas)',
          description: "Aplicação de técnicas de IA e machine learning para análise e gestão florestal",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai_forest/";
            },},{id: "projects-avanços-técnicos-e-tecnológicos-para-as-florestas-plantadas-e-nativas",
          title: 'Avanços técnicos e tecnológicos para as florestas plantadas e nativas',
          description: "Desenvolvimento e aplicação de novas tecnologias para manejo florestal",
          section: "Projects",handler: () => {
              window.location.href = "/projects/forest_advances/";
            },},{id: "projects-aplicações-e-integração-com-imageamento-por-sensor-hiperespectral",
          title: 'Aplicações e integração com Imageamento por Sensor Hiperespectral',
          description: "Utilização de sensores hiperespectrais para análise detalhada de características florestais",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hyperspectral_forest/";
            },},{id: "projects-aplicações-de-imageamento-por-lidar-para-as-estimativas-florestais",
          title: 'Aplicações de Imageamento por LiDAR para as estimativas Florestais',
          description: "Utilização de tecnologia LiDAR para estimativas precisas de atributos florestais",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lidar_forest/";
            },},{id: "projects-aplicações-de-sensores-multiespectrais-para-avaliações-florestais",
          title: 'Aplicações de sensores multiespectrais para avaliações Florestais',
          description: "Utilização de sensores multiespectrais para monitoramento e avaliação florestal",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multispectral_forest/";
            },},{id: "projects-análises-espaciais-e-geoestatistica-aplicada-as-estimativas-florestais",
          title: 'Análises espaciais e geoestatistica aplicada as estimativas florestais',
          description: "Aplicação de técnicas geoestatísticas e análises espaciais para melhorar a precisão das estimativas florestais",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spatial_analysis/";
            },},{id: "projects-aplicações-de-sensores-para-propriedades-químicas-físicas-e-morfológicas-das-árvores",
          title: 'Aplicações de sensores para propriedades químicas, físicas e morfológicas das árvores',
          description: "Análise avançada de propriedades das árvores utilizando sensores especializados",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tree_properties/";
            },},{id: "projects-aquisição-e-imageamento-com-veiculos-aéreos-não-tripulados-vants",
          title: 'Aquisição e Imageamento com Veiculos Aéreos Não Tripulados - VANTs',
          description: "Utilização de drones para aquisição de dados florestais",
          section: "Projects",handler: () => {
              window.location.href = "/projects/uav_forest/";
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
