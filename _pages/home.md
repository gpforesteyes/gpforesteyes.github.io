---
layout: about
title: "." #home
permalink: /
nav: false
nav_order: 0
subtitle:  #Integração Geotecnológica para Variáveis Dendrométricas, Qualitativas e Tecnológicas da Madeira

# profile:
#   align: right
#   image: prof_pic.png
#   image_circular: true # crops the image to make it circular
#   more_info: >
#     <p>Universidade Federal do Paraná</p>
#     <p>CIFLOMA – Campus Jardim Botânico</p>
#     <p>Laboratório de Inventário Florestal e Biofix</p>
#     <p>Av. Pref. Lothário Meissner, 632 – Jardim Botânico</p>
#     <p>CEP 80.210-170 – Curitiba – PR</p>


selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---
<style>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
}

.video-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  backdrop-filter: blur(1px);
}

[data-theme='dark'] .video-overlay {
  background: rgba(0, 0, 0, 0.7);
}

[data-theme='light'] .video-overlay {
  background: rgba(255, 255, 255, 0.4);
}

.hero-container {
  position: relative;
  z-index: 1;
  height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 3rem;
  align-items: center;
  animation: fadeInUp 1.2s ease-out;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
    height: auto;
  }
  .hero-container {
    height: auto;
    min-height: calc(100vh - 120px);
  }
}

.hero-text {
  animation: slideInLeft 1s ease-out 0.3s both;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin-bottom: 1rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  text-align: center
}

[data-theme='light'] .hero-title {
  color:rgb(0, 0, 0);
  text-shadow: 1px 1px 2px rgba(255,255,255,1);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--global-text-color);
  margin-bottom: 1.5rem;
  line-height: 1.3;
  font-weight: 600;
  opacity: 1;
  text-align: center;
  /* text-shadow: 1px 1px 2px rgba(0,0,0,0.1); */
}

[data-theme='light'] .hero-subtitle {
  color:rgb(0, 0, 0);
  text-shadow: 1px 1px 2px rgba(255,255,255,1);
}

.explore-message {
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
}

[data-theme='dark'] .explore-message {
  color: #6C9C4E;
}

[data-theme='light'] .explore-message {
  color: #1D4528;
}

.explore-message:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}

.hero-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: slideInRight 1s ease-out 0.6s both;
  height: fit-content;
}

.profile-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  text-align: center;
  max-height: 400px;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 35px rgba(0,0,0,0.3);
}

.location-info {
  color: var(--global-text-color);
  font-size: 1 rem;
  line-height: 1.4;
  text-align: center;
}

.location-info p {
  margin: 0.2rem 0;
  opacity: 0.9;
}

.location-info p:first-child {
  font-weight: 600;
  font-size: 1 rem;
  margin-bottom: 0.6rem;
}

[data-theme='dark'] .location-info p:first-child {
  color: #6C9C4E;
}

[data-theme='light'] .location-info p:first-child {
  color: #1D4528;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Floating particles effect */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float 6s infinite ease-in-out;
}

.particle:nth-child(1) { left: 10%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; animation-delay: 1s; }
.particle:nth-child(3) { left: 30%; animation-delay: 2s; }
.particle:nth-child(4) { left: 40%; animation-delay: 3s; }
.particle:nth-child(5) { left: 50%; animation-delay: 4s; }
.particle:nth-child(6) { left: 60%; animation-delay: 0.5s; }
.particle:nth-child(7) { left: 70%; animation-delay: 1.5s; }
.particle:nth-child(8) { left: 80%; animation-delay: 2.5s; }
.particle:nth-child(9) { left: 90%; animation-delay: 3.5s; }

@keyframes float {
  0%, 100% { 
    transform: translateY(100vh) rotate(0deg); 
    opacity: 0; 
  }
  10%, 90% { 
    opacity: 1; 
  }
  50% { 
    transform: translateY(-10vh) rotate(180deg); 
  }
}

/* Social media styling */
.social-section .contact-icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-section .contact-icons a {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  text-decoration: none;
  padding: 0.3rem;
}

[data-theme='light'] .social-section .contact-icons a {
  color: rgba(0, 0, 0, 0.8);
}

.social-section .contact-icons a:hover {
  transform: translateY(-2px) scale(1.1);
}

[data-theme='dark'] .social-section .contact-icons a:hover {
  color: #6C9C4E;
}

[data-theme='light'] .social-section .contact-icons a:hover {
  color: #6C9C4E;
}
</style>

<div class="video-background">
  <video autoplay loop muted playsinline>
    <source src="assets/video/video_2.mp4" type="video/mp4">
    Seu navegador não suporta o elemento de vídeo.
  </video>
</div>
<div class="video-overlay"></div>

<div class="particles">
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
  <div class="particle"></div>
</div>

<div class="hero-container">
  <div class="hero-content">
    <div class="hero-text">
      <h1 class="hero-title">FORESTEYES</h1>
      <p class="hero-subtitle" data-i18n="home.subtitle">Grupo de Estudo sobre Integração Geotecnológica aplicadas a Engenharia Florestal</p>
      <!-- <div class="explore-message">
        Explore nosso site para conhecer nossas linhas de pesquisa, nossa equipe e o impacto de nossos trabalhos
      </div> -->
      
      <!-- Social media icons -->
      <div class="social-section" style="margin-top: 1.5rem;">
        <div class="contact-icons">{% include social.liquid %}</div>
      </div>
    </div>
    
    <div class="hero-profile">
      <div class="profile-card">
        <img src="assets/img/prof_pic.png" alt="Profile" class="profile-image">
        <div class="location-info">
          <p data-i18n="home.location.university">Universidade Federal do Paraná</p>
          <p data-i18n="home.location.campus">CIFLOMA – Campus Jardim Botânico</p>
          <p data-i18n="home.location.lab">Laboratório de Inventário Florestal e Biofix</p>
          <p data-i18n="home.location.address">Av. Pref. Lothário Meissner, 632 – Jardim Botânico</p>
          <p data-i18n="home.location.zip">CEP 80.210-170 – Curitiba – PR</p>
        </div>
      </div>
    </div>
  </div>
</div>