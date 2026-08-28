---
layout: page
title: Projetos
title_i18n: nav.projects
permalink: /projects/
description: Projetos em Andamento
description_i18n: projects.description
nav: true
nav_order: 4
display_categories: [Projetos de Pesquisa]
horizontal: false
---
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  {%- assign category_i18n_key = '' -%}
  {%- case category -%}
    {%- when 'Projetos de Pesquisa' -%}{%- assign category_i18n_key = 'projects.category.research' -%}
  {%- endcase -%}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category"{% if category_i18n_key != '' %} data-i18n="{{ category_i18n_key }}"{% endif %}>{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
