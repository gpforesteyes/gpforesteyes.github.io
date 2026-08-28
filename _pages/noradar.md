---
layout: page
permalink: /noradar/
title: No Radar
title_i18n: nav.noradar
description: #Artigos de outros autores trazidos para discussão nas reuniões do grupo.
nav: true
nav_order: 3
---

<!-- _pages/noradar.md -->

<p class="noradar-intro" data-i18n="noradar.intro">
  Artigos de outros autores, externos ao grupo, trazidos para discussão nas reuniões do ForestEyes.
</p>

<p class="noradar-intro">
  <span data-i18n="noradar.instagram">Para fotos e mais informações sobre as apresentações e discussões, acompanhe nosso</span>
  <a href="https://www.instagram.com/gpforesteyes/" target="_blank" rel="noopener noreferrer">Instagram <i class="fa-brands fa-instagram"></i></a>.
</p>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --file noradar %}

</div>
