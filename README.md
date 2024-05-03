Ce site a pour objectif de rassembler la documentation de [Biodiversité Québec](https://biodiversite-quebec.ca/).

# Règles générales

## Informations nécessaires

Lors de la création d'un fichier quarto pour ajouter une nouvelle section au site, veuillez insérer les lignes suivantes dans l'entête du fichier afon de permettre le suivi de la date de création/modification et de la personne responsable de la section.

```
---
title: "Titre"
author: "Prénom Nom de la personne responsable"
date: "`r Sys.Date()`"
---
```

## Structure du site internet

La structure du site est représenté sous la forme d'un diagramme visible dans la section à [propos](https://biodiversitequebec.github.io/bq_docs/about.html). N'ayant actuellement pas de méthode automatisée pour le faire, il est nécessaire de mettre à jour ce diagramme à la main :sob:.
Pour ce faire, télécharger et ouvrez le fichier `diagramme_site/bq_docs_structure_site.drawio` via le site [diagrams.net](https://app.diagrams.net/). Faites les modifications nécessaires puis sauvegardez la nouvelle version du diagramme au format XML (extension .drawio).

## Badges

Les badges sont générés à partir du site [Shields.io](https://shields.io/badges).
